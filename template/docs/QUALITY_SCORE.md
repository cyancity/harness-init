# Quality Score

Track quality by area so agents can prioritize the weakest parts.

## Scale

- `A`: strong coverage, stable, clear docs, low risk.
- `B`: acceptable, known gaps.
- `C`: works but needs targeted hardening.
- `D`: fragile or underspecified.

## Current Scores

| Area | Score | Why | Next Step |
| --- | --- | --- | --- |
| Product surface | D | Not yet defined. | Define first user journey. |
| Architecture docs | C | Scaffold exists. | Fill in project-specific content. |
| Testing | D | No stack-specific tests. | Add minimal smoke path. |
| Observability | D | No local stack. | Document logs, metrics, traces. |
| Security | C | Defaults documented. | Add real auth and secret rules. |
