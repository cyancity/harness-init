# AGENTS.md

This is the routing layer. Keep it short. Details live in `docs/`.

## Read At The Start Of Each Task

- `docs/CORE_BELIEFS.md`: operating principles, plan-first, TDD.
- `docs/COLLAB.md`: collaboration and commit rules.
- `docs/ARCHITECTURE.md`: repo shape and boundary rules.
- `docs/HISTORY_GUIDE.md`: start the task history draft and conversation record.

## Read Before Finishing A Task

- `docs/HISTORY_GUIDE.md`: finalize validation and acceptance evidence.
- `docs/QUALITY_SCORE.md`: check weakest areas.

## Read When The Task Needs It

- `docs/SECURITY.md`: auth, secrets, data handling.
- `docs/RELIABILITY.md`: health, logging, retries.
- `docs/FRONTEND.md`: UI, design system, visual rules.
- `docs/CICD.md`: pipeline and deployment.
- `docs/PRODUCT_SENSE.md`: user value and prioritization.
- `docs/SUPPLY_CHAIN_SECURITY.md`: dependencies and provenance.
- `docs/PLANS_GUIDE.md`: when to create an execution plan.
- `docs/releases/README.md`: user-facing release notes.
- `docs/references/README.md`: curated external references.

## Working Rules

- Plan before code. Tests before done.
- Work on one acceptance unit at a time.
- After automated checks, deploy the change to the project's documented local development environment and smoke-test it.
- Ask the human to inspect the local result. Until they explicitly accept it, do not start the next feature, commit, push, or open a PR.
- If the human returns with another request while acceptance is pending, remind them of the pending acceptance first.
- A complete local verification permits PR handoff while remote CI is queued or running; remote CI must pass before merge.
- Keep the task's redacted conversation and evidence in `docs/histories/`.
- If a doc is stale, fix it in the same task.
