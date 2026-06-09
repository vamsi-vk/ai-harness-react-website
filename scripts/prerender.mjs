/**
 * scripts/prerender.mjs
 *
 * Build-time prerenderer.
 *
 * After `vite build` produces dist/, this script:
 *   1. Spins up a tiny static file server pointing at dist/.
 *   2. For each route in ROUTES, navigates a headless Chromium instance to it,
 *      waits for React to render (signalled by an <h1> appearing in the DOM),
 *      and captures the resulting outerHTML.
 *   3. Writes the captured HTML to dist/<route>/index.html (and dist/index.html
 *      for "/").
 *
 * The result: every listed route ships as a fully-rendered static HTML file,
 * so SEO crawlers, audit tools, and social scrapers that don't execute
 * JavaScript still see the H1, meta tags, structured data, and body content.
 *
 * The same files are then re-hydrated by React on the client; visitors get
 * the SPA experience they always did.
 *
 * Run automatically as part of `npm run build`. To run standalone:
 *   npm run prerender
 */

import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve, extname } from "node:path";
import { fileURLToPath } from "node:url";

import { PRERENDER_ROUTES } from "./seo-routes.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = resolve(__dirname, "..", "dist");
const SHELL_PATH = join(DIST_DIR, "index.html");
const PORT = Number(process.env.PRERENDER_PORT ?? 5174);

/**
 * Routes to prerender are defined in scripts/seo-routes.mjs so this list
 * and public/sitemap.xml can never drift apart. To add a new public route,
 * edit seo-routes.mjs (no change needed in this file).
 */
const ROUTES = PRERENDER_ROUTES;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".webmanifest": "application/manifest+json",
};

/** Start a minimal static file server over dist/ that also acts as an SPA
 *  fallback. Crucially the SPA fallback returns an *in-memory* copy of the
 *  original Vite-built index.html (`shellHtml`), NOT whatever happens to be
 *  on disk at dist/index.html, which gets overwritten with the
 *  prerendered home page during this run, and serving it to subsequent
 *  routes would leak Home's metadata into every other page. */
function startStaticServer({ shellHtml }) {
  return new Promise((resolveServer) => {
    const server = createServer((req, res) => {
      try {
        const url = new URL(req.url, `http://localhost:${PORT}`);
        let pathname = decodeURIComponent(url.pathname);
        if (pathname.endsWith("/")) pathname += "index.html";

        const abs = join(DIST_DIR, pathname);
        const exists = existsSync(abs) && statSync(abs).isFile();

        // For the root shell path, always serve the in-memory original.
        if (pathname === "/index.html") {
          res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control": "no-store",
          });
          res.end(shellHtml);
          return;
        }

        // SPA fallback for any extensionless path that has no matching file.
        if (!exists) {
          if (!extname(pathname)) {
            res.writeHead(200, {
              "Content-Type": "text/html; charset=utf-8",
              "Cache-Control": "no-store",
            });
            res.end(shellHtml);
            return;
          }
          res.writeHead(404).end("Not Found");
          return;
        }

        const ext = extname(abs).toLowerCase();
        res.writeHead(200, {
          "Content-Type": MIME[ext] ?? "application/octet-stream",
          "Cache-Control": "no-store",
        });
        createReadStream(abs).pipe(res);
      } catch (err) {
        res.writeHead(500).end(String(err?.message ?? err));
      }
    });
    server.listen(PORT, "127.0.0.1", () => resolveServer(server));
  });
}

/** Launch Chromium in a way that works locally and on Vercel's Linux builders. */
async function launchBrowser() {
  const useServerlessChromium =
    process.env.VERCEL === "1" ||
    process.env.CI === "true" ||
    process.platform === "linux";

  if (useServerlessChromium) {
    const [{ default: chromium }, { default: puppeteerCore }] = await Promise.all([
      import("@sparticuz/chromium"),
      import("puppeteer-core"),
    ]);

    return puppeteerCore.launch({
      args: [...chromium.args, "--no-sandbox", "--disable-setuid-sandbox"],
      executablePath: await chromium.executablePath(),
      headless: true,
    });
  }

  const { default: puppeteer } = await import("puppeteer");
  return puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
}

/** Capture the fully-rendered HTML for a single route. */
async function prerenderRoute(browser, route) {
  const page = await browser.newPage();

  const consoleErrors = [];
  page.on("pageerror", (err) => consoleErrors.push(`pageerror: ${err.message}`));
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(`console.error: ${msg.text()}`);
  });

  await page.setUserAgent(
    "AI-Harness-Prerender/1.0 (+https://ai-harness.com; puppeteer)",
  );
  await page.setViewport({ width: 1280, height: 800 });

  const url = `http://localhost:${PORT}${route}`;
  await page.goto(url, { waitUntil: "networkidle0", timeout: 45_000 });

  // Wait for React to render. Every page in src/pages/* renders an <h1>;
  // its presence is our signal that the route component (and any lazy
  // chunk it depends on) has mounted.
  await page.waitForSelector("h1", { timeout: 15_000 });

  // Small idle pad so React 19's Document Metadata hoisting (<title>,
  // <meta>, <link>, JSON-LD <script>) finishes flushing into <head>.
  await new Promise((r) => setTimeout(r, 250));

  // Strip the static defaults from index.html (<title>, <meta>, <link>
  // tagged with data-default) so the prerendered HTML contains ONLY the
  // route-specific tags emitted by the <Seo /> component. Without this,
  // every page would have duplicate <title>/canonical/og:* tags and most
  // SEO crawlers would pick the wrong (default home) one.
  //
  // Also tag the root element so client code can detect prerendered loads
  // if it ever wants to (e.g. to skip a one-time intro animation).
  await page.evaluate(() => {
    document
      .querySelectorAll("head [data-default]")
      .forEach((el) => el.remove());
    document.documentElement.setAttribute("data-prerendered", "true");
  });

  const html = await page.evaluate(
    () => "<!doctype html>\n" + document.documentElement.outerHTML,
  );

  await page.close();

  if (consoleErrors.length) {
    console.warn(`  ! ${route} produced ${consoleErrors.length} console error(s):`);
    for (const line of consoleErrors) console.warn(`    ${line}`);
  }

  return html;
}

function routeToOutputPath(route) {
  if (route === "/") return join(DIST_DIR, "index.html");
  return join(DIST_DIR, route.replace(/^\//, ""), "index.html");
}

async function main() {
  if (!existsSync(DIST_DIR)) {
    console.error("dist/ not found. Run `vite build` first.");
    process.exit(1);
  }
  if (!existsSync(SHELL_PATH)) {
    console.error(`${SHELL_PATH} not found. Run \`vite build\` first.`);
    process.exit(1);
  }

  const startedAt = Date.now();

  // Snapshot the original Vite-built shell BEFORE any prerender writes can
  // overwrite dist/index.html. This in-memory copy is what the static
  // server hands out for SPA fallbacks during this run.
  const shellHtml = await readFile(SHELL_PATH, "utf-8");
  if (shellHtml.includes("data-prerendered")) {
    console.error(
      "dist/index.html is already a prerendered output, not the original Vite shell.\n" +
        "Run `npm run build` (which re-runs `vite build`) to regenerate the clean shell first.",
    );
    process.exit(1);
  }
  if (!shellHtml.includes("data-default")) {
    console.warn(
      "[prerender] warning: dist/index.html has no [data-default] tags. " +
        "Static defaults won't be stripped from prerendered routes; they may end up with duplicate <title>/<meta>.",
    );
  }

  console.log(`[prerender] starting static server on http://127.0.0.1:${PORT}`);
  const server = await startStaticServer({ shellHtml });

  console.log("[prerender] launching headless Chromium…");
  const browser = await launchBrowser();

  let failed = 0;
  try {
    for (const route of ROUTES) {
      const t0 = Date.now();
      try {
        const html = await prerenderRoute(browser, route);
        const out = routeToOutputPath(route);
        await mkdir(dirname(out), { recursive: true });
        await writeFile(out, html, "utf-8");
        const rel = out.replace(DIST_DIR + "/", "dist/");
        const ms = Date.now() - t0;
        const sizeKb = (Buffer.byteLength(html) / 1024).toFixed(1);
        console.log(`[prerender] ${route.padEnd(14)} -> ${rel}  (${sizeKb} KB, ${ms} ms)`);
      } catch (err) {
        failed++;
        console.error(`[prerender] FAILED ${route}: ${err?.message ?? err}`);
      }
    }
  } finally {
    await browser.close();
    await new Promise((r) => server.close(r));
  }

  const totalMs = Date.now() - startedAt;
  if (failed > 0) {
    console.error(`[prerender] finished with ${failed} failure(s) in ${totalMs} ms`);
    process.exit(1);
  }
  console.log(`[prerender] done: ${ROUTES.length} routes in ${totalMs} ms`);
}

main().catch((err) => {
  console.error("[prerender] fatal:", err);
  process.exit(1);
});
