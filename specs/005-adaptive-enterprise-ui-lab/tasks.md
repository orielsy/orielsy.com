# Tasks: Adaptive Enterprise UI Lab — Phase 1

- **Status:** Implementation Complete — Local Verification Pending
- **Feature Directory:** `specs/005-adaptive-enterprise-ui-lab/`

## Task Checklist

- [x] Confirm `orielsy/orielsy.com` and `main` as the authoritative source.
- [x] Read `AGENTS.md`, constitution, content-taxonomy ADR, publication-gating spec, and production publishing scripts.
- [x] Create `feature/adaptive-enterprise-ui-lab` from the current `main` tip.
- [x] Record Adaptive Enterprise UI Lab as a long-lived shared reference application rather than a one-article demo.
- [x] Record Product Knowledge / Adaptive UX as Phase 1 only.
- [x] Define Phase 1 architecture and implementation boundaries.
- [x] Inspect existing component/client-interactivity conventions relevant to the embedded lab.
- [x] Implement domain/runtime/response types.
- [x] Add deterministic fixtures.
- [x] Implement validation.
- [x] Add authored product-knowledge records.
- [x] Implement derived facts and knowledge matching.
- [x] Implement response policy.
- [x] Implement resolver orchestration.
- [x] Add executable tests for the six required scenario outcomes.
- [ ] Execute `npm run test:adaptive-ui` in a Node environment with repository access and confirm all six scenarios pass.
- [x] Build the interactive Astro/client-side UI.
- [x] Separate lab-context controls from the fictional product surface.
- [x] Narrow the Phase 1 product surface to the Worker Group field only.
- [x] Move Execution Mode into the lab context and remove Target Environment from the visible experiment.
- [x] Collapse secondary beginner/version guidance behind a progressive “Why this guidance?” disclosure.
- [x] Embed the lab in `src/content/research/documentation-driven-adaptive-ux.mdx`.
- [x] Update the article copy to describe the single-field deterministic experiment accurately.
- [x] Align the durable Phase 1 spec and plan with the single-field presentation decision.
- [x] Confirm the Research article remains unpublished unless explicit publication approval is given.
- [ ] Run `npm run build` if execution access permits.
- [x] Review the branch diff against `main` for unrelated changes.
- [x] Do not publish production from this branch.

## Verification Notes

- The scenario suite lives at `src/components/adaptive-ui-lab/resolver.test.mts` and is wired to `npm run test:adaptive-ui` using Node's built-in test runner and TypeScript stripping mode; no new test-framework dependency was introduced.
- A fresh local clone was attempted again after the Phase 1 UI refinement, but the assistant execution container still cannot resolve `github.com`. Because repository bytes cannot be cloned into the execution environment, neither `npm run test:adaptive-ui` nor `npm run build` has been claimed as passing.
- `AdaptiveEnterpriseUiLab.astro` now presents four lab-context variables (user familiarity, product version, execution mode, available Worker Groups) separately from a single Worker Group product field.
- Target Environment remains part of the underlying domain model but is fixed to Production in this Phase 1 presentation because it does not materially affect the demonstrated behavior.
- Secondary explanatory responses are progressively disclosed so required-state explanation and safe next action remain visually primary.
- `src/content/research/documentation-driven-adaptive-ux.mdx` embeds the Phase 1 lab while retaining `published: false` and `status: draft`.
- Branch comparison against `main` shows only the Phase 1 lab implementation, its spec/plan/tasks, the article embedding/copy update, and the single `package.json` test script. No unrelated site files are changed.
- No production publishing command has been run and `main` / `gh-pages` remain untouched by this feature work.

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
