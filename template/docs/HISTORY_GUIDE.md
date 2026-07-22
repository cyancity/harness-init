# Change History Guide

Use `docs/histories/` for finished code-change tasks. Pure Q&A or research tasks do not need a history entry unless they result in repository changes.

## Requirements

- Create or update one history file per completed code-change task.
- Preserve the user request in concise, useful form.
- Keep secrets, local paths, and sensitive values out of the record.
- If a task spans multiple rounds, update the same file instead of creating duplicates.

## Layout And Naming

- Directory: `docs/histories/YYYY-MM/`
- Filename: `YYYYMMDD-HHmm-task-slug.md`
- Template: `docs/histories/template.md`

## What To Include

- The user request or a concise redacted version.
- Main code and documentation changes.
- Design intent and why the chosen approach was taken.
- Most important files touched.
