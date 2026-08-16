#!/usr/bin/env node
import { cpSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join, relative, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const TEMPLATE_DIR = join(__dirname, "..", "template");
const target = resolve(process.argv[2] || ".");
const isUpdate = process.argv.includes("--update");

// 规则类文件：--update 时会被模板覆盖（Agent 工作流与路由，几乎不会手改）
const RULE_FILES = new Set([
  "AGENTS.md",
  "CLAUDE.md",
  "docs/WORKFLOW.md",
  "docs/HISTORY_GUIDE.md",
  "docs/PLANS_GUIDE.md",
  "docs/histories/template.md",
  "docs/exec-plans/templates/execution-plan.md",
  "docs/exec-plans/tech-debt-tracker.md",
  "docs/releases/README.md",
  "docs/releases/feature-release-notes.md",
]);

// 项目扩展类文件：--update 时不覆盖（保存用户填写的项目内容）
const PROJECT_FILES = new Set([
  "docs/ARCHITECTURE.md",
  "docs/QUALITY_SCORE.md",
  "docs/PRODUCT.md",
  "docs/SECURITY.md",
  "docs/OPS.md",
  "docs/design-docs/index.md",
  "docs/references/README.md",
  "docs/generated/README.md",
]);

if (!existsSync(target)) mkdirSync(target, { recursive: true });

console.log(
  `${isUpdate ? "Updating" : "Initializing"} harness template into: ${target}\n`
);

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

let added = 0, updated = 0, skipped = 0;

for (const src of walk(TEMPLATE_DIR).sort()) {
  const rel = relative(TEMPLATE_DIR, src);
  const dest = join(target, rel);
  if (existsSync(dest)) {
    if (isUpdate && RULE_FILES.has(rel)) {
      cpSync(src, dest);
      updated++;
      console.log(`  updated: ${rel}`);
    } else {
      skipped++;
      console.log(`  skip (exists${isUpdate ? ", 项目扩展文件或非规则文件" : ""}): ${rel}`);
    }
  } else {
    mkdirSync(dirname(dest), { recursive: true });
    cpSync(src, dest);
    added++;
    console.log(`  added: ${rel}`);
  }
}

mkdirSync(join(target, "docs/exec-plans/active"), { recursive: true });
mkdirSync(join(target, "docs/exec-plans/completed"), { recursive: true });

console.log(`\nDone. added=${added} updated=${updated} skipped=${skipped}`);
console.log(`Next steps:`);
console.log(`  1. Fill in docs/ARCHITECTURE.md (project-specific section)`);
console.log(`  2. Set initial scores in docs/QUALITY_SCORE.md`);
console.log(`  3. Fill domain docs as needed`);
