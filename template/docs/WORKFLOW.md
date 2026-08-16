# Workflow

工作流与协作规则（原则、提交、验收、交付的唯一事实源）。

## Operating Principles

- Humans steer; agents execute.
- Repository-local knowledge beats private context. Everything stays in the repo.
- Repeated agent failure means fix the scaffolding, not retry the prompt.
- Short stable entry points beat large unstable instruction dumps.
- Mechanical checks (lint, test, typecheck) beat soft conventions.
- Keep cleanup and simplification continuous. Entropy compounds.

## Plan-First

- Every task starts with a plan before writing code.
- The plan states: goal, approach, files to touch, verification strategy.
- For large tasks (multi-commit, architectural impact), persist the plan in `docs/exec-plans/active/`.

## TDD

- Write or confirm tests before implementation.
- Implement until all tests pass.
- A task is not done until the full test suite passes.
- If no test exists for the behavior being changed, write one first.

## Brainstorming (for feature/design decisions)

Before implementing any new feature or design choice:
1. Ask 3-5 clarifying questions about intent, constraints, and preferences.
2. Present 2-3 structured options with tradeoffs.
3. Wait for user to choose before proceeding.

## Git And Commits

- Keep commits scoped and descriptive. One commit, one concern.
- **收尾拆分**：会话结束时，把本次改动按「逻辑单元」拆分——每个独立功能/修复一个 commit；相互独立的改动拆成多个 PR。禁止把所有 change 并进一个 commit 或一个 PR。
- Before a commit or PR, verify docs, examples, and histories reflect final behavior.
- Call out risks, migrations, and deferred follow-ups explicitly.

## Feature Delivery Gate

Use this state sequence for every user-visible feature or behavior change:

`implementing -> local verification passed -> locally deployed -> agent smoke-tested -> awaiting human acceptance -> accepted -> committed (split) -> PR opened -> merged`

- Define one acceptance unit before implementation and do not mix the next feature into it.
- Use the project's documented local development command; do not substitute an ad-hoc environment.
- Give the human the URL or application entry point, test data, steps, and expected result.
- Explicit acceptance such as "approved" or "accepted" advances the task. Silence does not.
- While acceptance is pending, stop. On the human's next message, remind them before handling another feature.
- Feedback returns the same task to `implementing`; repeat checks, deployment, and acceptance.

## Post-Acceptance Delivery（验收后全流程由 Agent 负责）

Human 明确验收通过后（如 `Accepted. Merge.`），Agent 接管全部交付：

1. 确认当前分支是 **`<agent-name>/` 前缀的 feature 分支**（如 `codex/foo`、`claude/bar`），绝不是默认分支。
2. Finalize the task history with the human's exact redacted acceptance wording.
3. Confirm no product change occurred after the recorded local verification; rerun affected checks if it did.
4. Run `git diff --check` and review the complete change scope.
5. **按逻辑单元拆分提交**，push 分支。
6. 创建 PR；PR 冲突由 Agent 负责解决。
7. **由 Agent 完成合并**，并向 human 报告合并结果、CI 状态与收尾情况。

## Hard Stop（仍然不可做）

- 未获得显式验收前，不 commit、不 push、不开 PR、不合并。
- 不向默认分支直接提交或合并。
- 远端 CI 未通过前不合并。
- 不把「验收」扩大解释——`done` / `commit it` / `you know what to do` 都不是合并授权。

## Configuration Hygiene

- Document every environment variable or external dependency required to boot.
- Avoid hidden setup steps; encode them in scripts or versioned markdown.
