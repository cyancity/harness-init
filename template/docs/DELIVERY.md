# Post-Acceptance Delivery

Use this runbook only after the human explicitly accepts the locally deployed feature and asks the agent to follow this file.

Recommended trigger: `Accepted. Follow docs/DELIVERY.md.`

Phrases such as "done", "commit it", or "you know what to do" are not merge authorization.

## Sequence

1. Confirm the current branch is a feature branch, never the default branch.
2. Finalize the task history with the human's exact redacted acceptance wording.
3. Confirm no product change occurred after the recorded local verification; rerun affected checks if it did.
4. Run `git diff --check` and review the complete change scope.
5. Commit and push only the feature branch.
6. Create or update a **draft** PR and report local validation plus remote CI status.
7. Stop and return control to the human.

## Hard Stop

- Never merge the default branch.
- Never mark the PR ready, enable auto-merge, or treat pending CI as passed.
- Never start another feature as an implied continuation of the delivery command.

The human may mark the draft PR ready in the Git hosting interface. If the project has trusted merge automation, it may merge only after required CI passes; the agent never invokes merge.
