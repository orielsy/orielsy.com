# Tasks: Adaptive Enterprise UI Lab — Phase 1

- **Status:** In Progress
- **Feature Directory:** `specs/005-adaptive-enterprise-ui-lab/`

## Task Checklist

- [x] Confirm `orielsy/orielsy.com` and `main` as the authoritative source.
- [x] Read `AGENTS.md`, constitution, content-taxonomy ADR, publication-gating spec, and production publishing scripts.
- [x] Create `feature/adaptive-enterprise-ui-lab` from the current `main` tip.
- [x] Record Adaptive Enterprise UI Lab as a long-lived shared reference application rather than a one-article demo.
- [x] Record Product Knowledge / Adaptive UX as Phase 1 only.
- [x] Define Phase 1 architecture and implementation boundaries.
- [ ] Inspect existing component/client-interactivity conventions relevant to the embedded lab.
- [ ] Implement domain/runtime/response types.
- [ ] Add deterministic fixtures.
- [ ] Implement validation.
- [ ] Add authored product-knowledge records.
- [ ] Implement derived facts and knowledge matching.
- [ ] Implement response policy.
- [ ] Implement resolver orchestration.
- [ ] Verify the six required scenario outcomes.
- [ ] Build the interactive Astro/client-side UI.
- [ ] Embed the lab in `src/content/research/documentation-driven-adaptive-ux.mdx`.
- [ ] Confirm the Research article remains unpublished unless explicit publication approval is given.
- [ ] Run `npm run build` if execution access permits.
- [ ] Review the branch diff against `main` for unrelated changes.
- [ ] Do not publish production from this branch.

## Phase 1 Non-Goals

- No LLMs or remote AI APIs.
- No WebLLM yet.
- No MCP.
- No embeddings or vector search.
- No backend/database/auth/persistence.
- No telemetry or runtime instrumentation yet.
- No separate Adaptive Enterprise UI Lab repository yet.
- No standalone Projects entry yet.
- No production deployment without explicit approval after merge to `main`.
