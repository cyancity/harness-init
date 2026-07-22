# Core Beliefs

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
