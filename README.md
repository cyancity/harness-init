# harness-init

Initialize a structured documentation harness into any project — a lightweight set of markdown conventions that helps AI coding agents stay aligned with your project's architecture, quality standards, and history.

## Usage

```bash
npx @yolo/harness-init [target-directory]          # init
npx @yolo/harness-init [target-directory] --update # update rule files only
```

If no target is given, the current directory is used.

## What it does

Copies a `template/` of markdown files into your project:

```
AGENTS.md              # routing layer — tells agents what to read and when
CLAUDE.md              # points to AGENTS.md
docs/
├── WORKFLOW.md        # principles, commit rules, acceptance + delivery (Agent 负责合并)
├── ARCHITECTURE.md    # repo shape and boundary rules (project-specific)
├── HISTORY_GUIDE.md   # how to record requirements/decisions (skips off-topic chat)
├── PLANS_GUIDE.md     # when to create execution plans
├── SECURITY.md        # auth, secrets, dependencies (project-specific)
├── OPS.md             # reliability + CI/CD + local acceptance contract (project-specific)
├── PRODUCT.md         # user value + frontend rules (project-specific)
├── QUALITY_SCORE.md   # self-assessed quality scores (project-specific)
├── exec-plans/        # active and completed execution plans
├── histories/         # per-task change records (requirements only)
├── releases/          # user-facing release notes
├── references/        # curated external references
└── design-docs/       # design documents
```

## init vs update

- **Default (init)**: never overwrites existing files — only adds missing ones.
- **`--update`**: overwrites only the **rule files** (AGENTS.md, WORKFLOW.md, HISTORY_GUIDE.md, PLANS_GUIDE.md, history/plan templates, release note templates). Project-specific docs (ARCHITECTURE.md, QUALITY_SCORE.md, PRODUCT.md, SECURITY.md, OPS.md) are **never overwritten**, so your project content stays safe.

## After init

1. Fill in `docs/ARCHITECTURE.md` (project-specific section)
2. Set initial scores in `docs/QUALITY_SCORE.md`
3. Fill in domain docs as needed

## License

MIT
