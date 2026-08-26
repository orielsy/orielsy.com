# Tasks: Explicit Content Publication Gating

- **Status:** Completed
- **Feature Directory:** `specs/003-content-publication-gating/`

## Task Checklist

- [x] Read the constitution, existing specifications, and content-taxonomy decisions
- [x] Add a fail-closed `published` field to Research and Project collection schemas
- [x] Add an independent public concept-draft field to Research and Project collection schemas
- [x] Classify authored and placeholder entries with explicit publication state
- [x] Keep unpublished entries separate from published results while preserving direct status routes
- [x] Add public concept-draft badges and detail-page explanations
- [x] Preserve status-only rendering for direct unpublished routes
- [x] Render safe status pages for direct unpublished routes
- [x] Add `noindex, nofollow` metadata to unpublished routes
- [x] Limit RSS output to published Research entries
- [x] Record the durable decision in `docs/decisions/004-content-publication-gating.md`
- [x] Build and inspect generated routes, catalog counts, and RSS output
