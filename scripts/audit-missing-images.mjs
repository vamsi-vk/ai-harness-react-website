/**
 * Find public image paths referenced from src/ that lack png (or avif/webp siblings).
 * Run: node scripts/audit-missing-images.mjs
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "src");
const PUBLIC = join(ROOT, "public");

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (/\.(tsx?|jsx?)$/.test(name)) out.push(p);
  }
  return out;
}

const text = walk(SRC)
  .map((f) => readFileSync(f, "utf8"))
  .join("\n");

const refs = new Set();
for (const m of text.matchAll(
  /["'`](\/illustrations\/custom\/[A-Za-z0-9._/-]+\.(?:png|jpe?g|webp|avif))["'`]/g,
)) {
  refs.add(m[1]);
}
for (const m of text.matchAll(/\bbase=["'](\/[^"']+)["']/g)) {
  let p = m[1];
  if (!/\.(png|jpe?g|webp|avif)$/i.test(p)) p = `${p}.png`;
  refs.add(p);
}

const missingPng = [];
const missingNextGen = [];

for (const ref of [...refs].sort()) {
  const stem = ref.replace(/\.(png|jpe?g|webp|avif)$/i, "");
  const rel = stem.replace(/^\//, "");
  const hasPng = existsSync(join(PUBLIC, `${rel}.png`));
  const hasWebp = existsSync(join(PUBLIC, `${rel}.webp`));
  const hasAvif = existsSync(join(PUBLIC, `${rel}.avif`));
  if (!hasPng) missingPng.push(ref);
  else if (!hasWebp || !hasAvif) {
    missingNextGen.push({ ref, rel, webp: hasWebp, avif: hasAvif });
  }
}

console.log(`Referenced image paths: ${refs.size}`);
console.log(`Missing PNG: ${missingPng.length}`);
for (const p of missingPng) console.log(`  PNG  ${p}`);
console.log(`Missing AVIF/WebP siblings: ${missingNextGen.length}`);
for (const m of missingNextGen) {
  console.log(`  ${!m.webp ? "NO-WEBP " : ""}${!m.avif ? "NO-AVIF " : ""}${m.ref}`);
}

if (missingNextGen.length) {
  const { default: sharp } = await import("sharp");
  const { readFile, writeFile } = await import("node:fs/promises");
  const { createHash } = await import("node:crypto");
  for (const m of missingNextGen) {
    const pngPath = join(PUBLIC, `${m.rel}.png`);
    const buf = await readFile(pngPath);
    if (!m.webp) {
      await sharp(buf).webp({ quality: 85, effort: 6 }).toFile(join(PUBLIC, `${m.rel}.webp`));
      console.log(`  + wrote ${m.rel}.webp`);
    }
    if (!m.avif) {
      await sharp(buf).avif({ quality: 60, effort: 5 }).toFile(join(PUBLIC, `${m.rel}.avif`));
      console.log(`  + wrote ${m.rel}.avif`);
    }
    const hash = createHash("sha1").update(buf).digest("hex").slice(0, 12);
    await writeFile(join(PUBLIC, `${m.rel}.optimized`), hash);
  }
}
