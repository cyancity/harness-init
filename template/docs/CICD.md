# CI/CD Guide

## Current State

No default workflows. Add testing, build, scanning, release, and deployment workflows when the real project stack is known.

## Design Principle

Start with the smallest real validation path, then add build artifacts, supply-chain scanning, release, and deployment. Pin GitHub Actions to commit SHAs, not floating tags.

## Recommended Sequence

1. Define the project's own local validation command.
2. Add a minimal PR gate (real tests, lint, or smoke checks).
3. Add packaging, SBOM, and provenance after a real deliverable exists.
4. Add environment-specific deployment jobs after a real runtime exists.
5. Document all pipeline entry points and release artifacts here.
