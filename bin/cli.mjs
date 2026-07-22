#!/usr/bin/env node
import { cpSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join, relative, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const TEMPLATE_DIR = join(__dirname, "..", "template");
const target = resolve(process.argv[2] || ".");

if (!existsSync(target)) mkdirSync(target, { recursive: true });

console.log(`Initializing harness template into: ${target}\n`);

function walk(dir) {
  const entries = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      entries.push(...walk(full));
    } else {
      entries.push(full);
    }
  }
  return entries;
}

for (const src of walk(TEMPLATE_DIR).sort()) {
  const rel = relative(TEMPLATE_DIR, src);
  const dest = join(target, rel);
  if (existsSync(dest)) {
    console.log(`  skip (exists): ${rel}`);
  } else {
    mkdirSync(dirname(dest), { recursive: true });
    cpSync(src, dest);
    console.log(`  added: ${rel}`);
  }
}

mkdirSync(join(target, "docs/exec-plans/active"), { recursive: true });
mkdirSync(join(target, "docs/exec-plans/completed"), { recursive: true });

console.log(`\nDone. Next steps:`);
console.log(`  1. Fill in docs/ARCHITECTURE.md (project-specific section)`);
console.log(`  2. Set initial scores in docs/QUALITY_SCORE.md`);
console.log(`  3. Fill domain docs as needed`);
