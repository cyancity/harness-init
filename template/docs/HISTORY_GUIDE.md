# Change History Guide

Use `docs/histories/` for repository-changing tasks. Start the entry when work begins and keep it uncommitted until the task is accepted.

## Requirements

- Create or update one history file per completed code-change task.
- Record every user message from the feature request through explicit acceptance verbatim, except mandatory redaction.
- Summarize each assistant response to its decisions, actions, and results.
- Replace secrets, tokens, keys, real phone numbers, private environment values, local absolute paths, and token-bearing URLs with named `[REDACTED_*]` placeholders.
- If a task spans multiple rounds, update the same file instead of creating duplicates.
- Silence is not acceptance. Leave the entry in `awaiting human acceptance` until the user explicitly approves it.

## Layout And Naming

- Directory: `docs/histories/YYYY-MM/`
- Filename: `YYYYMMDD-HHmm-task-slug.md`
- Template: `docs/histories/template.md`

## What To Include

- The chronological redacted conversation record.
- Main code and documentation changes.
- Design intent and why the chosen approach was taken.
- Most important files touched.
- Actual automated checks, local deployment, smoke-test evidence, and the inspection entry point.
- Feedback rounds and the user's final acceptance wording.

The conversation window ends at explicit acceptance. Post-acceptance Git and PR results belong in the PR description; this avoids an endless follow-up commit solely to record the response announcing that commit.
