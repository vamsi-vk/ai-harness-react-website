/**
 * scripts/optimize-images.mjs
 *
 * Generates .webp (q85) and .avif (q60) siblings for the listed PNG illustrations
 * in /public so the <PictureSet /> component can serve next-gen formats with
 * graceful PNG fallback. Source PNGs are NOT modified; they remain the
 * universal fallback.
 *
 * Run manually whenever the source PNGs change:
 *   npm run optimize:images
 *
 * (Intentionally not wired as a `prebuild` hook so day-to-day `npm run build`
 * stays fast; sharp on these images takes ~3 seconds.)
 */

import sharp from "sharp";
import { mkdir, stat, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = resolve(__dirname, "..", "public");

// Only the 5 large UI illustrations get next-gen variants. Logos / icons /
// favicons stay PNG (sharp edges + small files; not worth converting).
const TARGETS = [
  "hero.png",
  "industries.png",
  "governance.png",
  "workflow.png",
  "lifecycle.png",
];

const WEBP_QUALITY = 85;
const AVIF_QUALITY = 60;

/** Pretty-print byte counts. */
function fmt(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

/** Hash a Buffer to a short hex digest; used to skip already-optimized files. */
async function shortHash(buf) {
  const { createHash } = await import("node:crypto");
  return createHash("sha1").update(buf).digest("hex").slice(0, 12);
}

async function optimizeOne(filename) {
  const srcPath = join(PUBLIC_DIR, filename);
  if (!existsSync(srcPath)) {
    console.warn(`  ⚠  skip ${filename}: not found in public/`);
    return null;
  }

  const srcBuf = await readFile(srcPath);
  const srcSize = srcBuf.byteLength;

  const base = filename.replace(/\.png$/i, "");
  const webpPath = join(PUBLIC_DIR, `${base}.webp`);
  const avifPath = join(PUBLIC_DIR, `${base}.avif`);

  // Cache: write the source SHA into a sidecar file. If a re-run sees the same
  // hash and the output files exist, we skip the (slow) AVIF encode.
  const hash = await shortHash(srcBuf);
  const cachePath = join(PUBLIC_DIR, `.${base}.optimized`);
  if (existsSync(cachePath) && existsSync(webpPath) && existsSync(avifPath)) {
    const cached = (await readFile(cachePath, "utf8")).trim();
    if (cached === hash) {
      const w = (await stat(webpPath)).size;
      const a = (await stat(avifPath)).size;
      console.log(
        `  ⏭  ${filename}  (cached) → ${fmt(w)} webp, ${fmt(a)} avif`,
      );
      return { filename, srcSize, webpSize: w, avifSize: a, cached: true };
    }
  }

  const pipeline = sharp(srcBuf);

  await pipeline
    .clone()
    .webp({ quality: WEBP_QUALITY, effort: 6 })
    .toFile(webpPath);
  const webpSize = (await stat(webpPath)).size;

  await pipeline
    .clone()
    .avif({ quality: AVIF_QUALITY, effort: 5 })
    .toFile(avifPath);
  const avifSize = (await stat(avifPath)).size;

  await writeFile(cachePath, hash);

  const webpPct = ((1 - webpSize / srcSize) * 100).toFixed(0);
  const avifPct = ((1 - avifSize / srcSize) * 100).toFixed(0);
  console.log(
    `  ✓  ${filename}  ${fmt(srcSize).padStart(8)} → ${fmt(webpSize).padStart(8)} webp (-${webpPct}%), ${fmt(avifSize).padStart(8)} avif (-${avifPct}%)`,
  );

  return { filename, srcSize, webpSize, avifSize };
}

async function main() {
  if (!existsSync(PUBLIC_DIR)) {
    console.error(`public/ not found at ${PUBLIC_DIR}`);
    process.exit(1);
  }
  await mkdir(PUBLIC_DIR, { recursive: true });

  console.log(`Optimizing ${TARGETS.length} image(s) in public/`);
  console.log(`  webp quality: ${WEBP_QUALITY}, avif quality: ${AVIF_QUALITY}\n`);

  const results = [];
  for (const t of TARGETS) {
    const r = await optimizeOne(t);
    if (r) results.push(r);
  }

  const totals = results.reduce(
    (acc, r) => ({
      src: acc.src + r.srcSize,
      webp: acc.webp + r.webpSize,
      avif: acc.avif + r.avifSize,
    }),
    { src: 0, webp: 0, avif: 0 },
  );

  console.log("\nTotal:");
  console.log(`  png   ${fmt(totals.src).padStart(10)}`);
  console.log(
    `  webp  ${fmt(totals.webp).padStart(10)}  (-${(((1 - totals.webp / totals.src) * 100) | 0)}%)`,
  );
  console.log(
    `  avif  ${fmt(totals.avif).padStart(10)}  (-${(((1 - totals.avif / totals.src) * 100) | 0)}%)`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
