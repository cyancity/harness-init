# CI/CD Guide

## Current State

No default workflows. Add testing, build, scanning, release, and deployment workflows when the real project stack is known.

## Design Principle

Start with the smallest real validation path, then add build artifacts, supply-chain scanning, release, and deployment. Pin GitHub Actions to commit SHAs, not floating tags.

## Local Acceptance Contract

Before implementing product behavior, document one canonical local deployment path for each runnable surface. Each path must state:

- the command that starts the real local dependencies and applies migrations;
- the URL, simulator, or application entry point the human should inspect;
- the smallest readiness and feature smoke checks;
- how to stop or reset the environment safely.

Documentation or generator-only changes may use a disposable generated output plus link and smoke checks instead of booting unrelated product services. A PR is created only after the local result receives explicit human acceptance.

## Recommended Sequence

1. Define the project's own local validation command.
2. Define the local deployment and human acceptance entry point.
3. Add a minimal PR gate (real tests, lint, or smoke checks).
4. Add packaging, SBOM, and provenance after a real deliverable exists.
5. Add environment-specific deployment jobs after a real runtime exists.
6. Document all pipeline entry points and release artifacts here.
