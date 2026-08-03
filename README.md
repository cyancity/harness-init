# harness-init

Initialize a structured documentation harness into any project — a lightweight set of markdown conventions that helps AI coding agents stay aligned with your project's architecture, quality standards, and history.

## Usage

```bash
npx @yolo/harness-init [target-directory]
```

If no target is given, the current directory is used.

## What it does

Copies a `template/` of markdown files into your project:

```
AGENTS.md              # routing layer — tells agents what to read and when
CLAUDE.md              # points to AGENTS.md
docs/
├── ARCHITECTURE.md    # repo shape and boundary rules
├── CORE_BELIEFS.md    # operating principles (plan-first, TDD)
├── COLLAB.md          # collaboration and commit rules
├── QUALITY_SCORE.md   # self-assessed quality scores
├── HISTORY_GUIDE.md   # how to record what changed and why
├── PLANS_GUIDE.md     # when to create execution plans
├── SECURITY.md        # auth, secrets, data handling
├── RELIABILITY.md     # health, logging, retries
├── FRONTEND.md        # UI and design system rules
├── CICD.md            # pipeline and deployment
├── PRODUCT_SENSE.md   # user value and prioritization
├── SUPPLY_CHAIN_SECURITY.md  # dependencies and provenance
├── exec-plans/        # active and completed execution plans
├── histories/         # per-task change records
├── releases/          # user-facing release notes
├── references/        # curated external references
├── design-docs/       # design documents
└── generated/         # auto-generated docs
```

Existing files are never overwritten — only new files are added.

## After init

1. Fill in `docs/ARCHITECTURE.md` (project-specific section)
2. Set initial scores in `docs/QUALITY_SCORE.md`
3. Fill in domain docs as needed

## License

MIT