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

## Testing And Validation

- Every meaningful code change leaves behind stronger verification than before.
- Prefer repository-native commands that agents can run directly.
- If the app has a UI, make it locally bootable and testable.

## Configuration Hygiene

- Document every environment variable or external dependency required to boot.
- Avoid hidden setup steps; encode them in scripts or versioned markdown.
