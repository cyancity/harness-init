# AGENTS.md

This is the routing layer. Keep it short; details live in `docs/`.

## Read At The Start Of Each Task

- `docs/WORKFLOW.md`: operating principles, commit rules, acceptance and delivery.
- `docs/ARCHITECTURE.md`: repo shape and boundary rules.
- `docs/HISTORY_GUIDE.md`: start the task history draft and requirement record.

## Read Before Finishing A Task

- `docs/HISTORY_GUIDE.md`: finalize validation and acceptance evidence.
- `docs/WORKFLOW.md`: after acceptance, follow the post-acceptance delivery sequence (Agent 负责合并).

## Read When The Task Needs It

- `docs/SECURITY.md`: auth, secrets, dependencies and supply chain.
- `docs/OPS.md`: reliability, CI/CD, local acceptance contract.
- `docs/PRODUCT.md`: user value, frontend and design rules.
- `docs/QUALITY_SCORE.md`: check weakest areas.
- `docs/PLANS_GUIDE.md`: when to create an execution plan.

## 全局记忆（跨 Agent 共享）

本机所有 coding agent 共享 `~/memory/`（git 仓库）：

- 会话开始：读 `~/memory/profile.md` + `~/memory/conventions.md`（我的画像与约定）。
- 当前工作目录对应某个项目时，读 `~/memory/projects/<项目名>/state.md`（薄状态：进展/卡点/下一步）；项目细节仍以本仓库 `docs/` 为准。
- 会话结束：有价值的决策/坑/进度更新回 `~/memory/projects/<项目名>/` 并带身份提交（`git -C ~/memory -c user.name=<agent> commit`）。

## Working Rules

- Plan before code. Tests before done.
- Work on one acceptance unit at a time.
- After automated checks, deploy the change to the project's documented local development environment and smoke-test it.
- Ask the human to inspect the local result. Until they explicitly accept it, do not start the next feature, commit, push, or open a PR.
- If the human returns with another request while acceptance is pending, remind them of the pending acceptance first.
- **显式验收通过后**：Agent 负责全部交付（拆分提交、开 PR、解决冲突、合并、报告）。
- 远端 CI 未通过前不合并。
- Keep the task's redacted requirement/decision record and evidence in `docs/histories/`.
- If a doc is stale, fix it in the same task.
