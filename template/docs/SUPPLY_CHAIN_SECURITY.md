# Supply Chain Security

## Current Defaults

- Do not commit secrets, tokens, or local private configuration.
- Commit auditable dependency manifests and lockfiles once the real stack exists.
- Pin new GitHub Actions to immutable commit SHAs instead of floating tags.

## Tooling To Add Later

- `actions/dependency-review-action`: PR dependency changes.
- `google/osv-scanner-action`: known open source vulnerabilities.
- `anchore/sbom-action`: SPDX SBOM artifact.
- `actions/attest-build-provenance`: signed build provenance.

## When The Project Becomes Real

- Add ecosystem-specific lockfiles and keep them committed.
- Make the build deterministic and produce explicit versioned artifacts.
- Gate production deployment on release artifact provenance verification.
