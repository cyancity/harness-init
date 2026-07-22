# Execution Plans Guide

Use execution plans for tasks too large, risky, or stateful for short chat context.

## Create A Plan When

- The task spans multiple commits or working sessions.
- The work has architectural impact or significant migration risk.
- Success depends on staged rollout or validation checkpoints.
- Multiple contributors or agents may touch the same area over time.

## Storage

- Active plans: `docs/exec-plans/active/`
- Completed plans: `docs/exec-plans/completed/`
- Template: `docs/exec-plans/templates/execution-plan.md`
- Deferred debt: `docs/exec-plans/tech-debt-tracker.md`

## Expectations

- State goal, scope, risks, and validation strategy.
- Keep the implementation log in the repo, not only in chat.
- Update status as decisions change.
- Close or archive stale plans so active/ stays trustworthy.
