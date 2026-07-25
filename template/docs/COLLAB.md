# Collaboration Guide

## Development Principles

- Prefer boring, legible, well-instrumented technology.
- Keep code, docs, tests, and config synchronized. If behavior changes, update docs in the same change.
- Fix the environment when an agent repeatedly fails; do not rely on prompt retries.
- When fixing a bug, expand tests and docs so the same class of bug stays caught.

## Git And Review

- Keep commits scoped and descriptive. One commit, one concern.
- Before a commit or PR, verify docs, examples, and histories reflect final behavior.
- Prefer small, scoped pull requests.
- Call out risks, migrations, and deferred follow-ups explicitly.

## Feature Delivery Gate

Use this state sequence for every user-visible feature or behavior change:

`implementing -> automated checks passed -> locally deployed -> agent smoke-tested -> awaiting human acceptance -> accepted -> committed -> PR opened`

- Define one acceptance unit before implementation and do not mix the next feature into it.
- Use the project's documented local development command; do not substitute an ad-hoc environment.
- Give the human the URL or application entry point, test data, steps, and expected result.
- Explicit acceptance such as "approved" or "accepted" advances the task. Silence does not.
- While acceptance is pending, stop. On the human's next message, remind them before handling another feature.
- Feedback returns the same task to `implementing`; repeat checks, deployment, and acceptance.
- Only after acceptance: finalize history, commit, push, and open the PR. Do not auto-merge unless asked.

## Testing And Validation

- Every meaningful code change leaves behind stronger verification than before.
- Prefer repository-native commands that agents can run directly.
- If the app has a UI, make it locally bootable and testable.
- A failed deployment or smoke check blocks the human acceptance request.

## Configuration Hygiene

- Document every environment variable or external dependency required to boot.
- Avoid hidden setup steps; encode them in scripts or versioned markdown.
