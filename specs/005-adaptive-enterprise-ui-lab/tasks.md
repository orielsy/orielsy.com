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
- [x] Narrow the Phase 1 product surface to one field.
- [x] Replace the Worker Group scenario with the more legible Data Connection concept.
- [x] Remove obsolete Execution Mode and Target Environment state from the Phase 1 domain model.
- [x] Render Standard UI and Adaptive UI side by side from one shared scenario.
- [x] Let each comparison surface maintain independent interaction state so the two policies can be experienced without surprising cross-control synchronization.
- [x] Make the conventional baseline reactive by surfacing required-state validation only after an attempted continuation.
- [x] Keep the adaptive side proactive by resolving applicable knowledge and response policy before the user hits the same failure state.
- [x] Add an explicit shared-application-truth summary between scenario controls and the comparison.
- [x] Add a collapsible deterministic decision trace for state, validation, applicable knowledge, and response policy.
- [x] Use compatible-connection count to demonstrate ambiguity versus safe preconfiguration.
- [x] Collapse secondary beginner/version guidance behind a progressive “Why this guidance?” disclosure.
- [x] Replace the opening text workflow diagram with a purpose-built conventional-versus-adaptive explanatory visual.
- [x] Embed the lab in `src/content/research/documentation-driven-adaptive-ux.mdx`.
- [x] Update the article copy to describe the refined Data Connection comparison accurately.
- [x] Align the durable Phase 1 spec and plan with the Data Connection presentation.
- [x] Confirm the Research article remains unpublished unless explicit publication approval is given.
- [ ] Run `npm run build` if execution access permits.
- [x] Review the branch diff against `main` for unrelated changes.
- [x] Do not publish production from this branch.

## Verification Notes

- The scenario suite lives at `src/components/adaptive-ui-lab/resolver.test.mts` and is wired to `npm run test:adaptive-ui` using Node's built-in test runner and TypeScript stripping mode; no new test-framework dependency was introduced.
- The assistant execution environment has not been able to clone the repository from GitHub, so neither `npm run test:adaptive-ui` nor `npm run build` is claimed as passing yet.
- `AdaptiveEnterpriseUiLab.astro` now compares Standard UI and Adaptive UI simultaneously under the same scenario variables: user familiarity, product version, and compatible Data Connections. The two surfaces intentionally keep separate selected values and continuation attempts.
- The conventional baseline waits for an attempted continuation before showing required validation; the adaptive experience can surface context-aware intervention earlier from the same scenario.
- A shared-application-truth band states the scenario both experiences inherit, while a collapsible decision trace exposes how the adaptive side resolves state, validation, authored knowledge, and response policy.
- The Data Connection domain replaces the earlier Worker Group/Execution Mode/Target Environment scenario so the micro-demo can be understood without learning fictional infrastructure terminology.
- Several compatible connections permit guidance but never guessing; exactly one compatible connection permits a safe user-accepted “Use …” action.
- Secondary explanatory responses are progressively disclosed so required-state explanation and safe next action remain visually primary.
- `src/components/research/DocumentationDrivenAdaptiveVisual.astro` replaces the article's original text-only workflow diagram with a conventional external-detour versus in-product adaptive-path visual.
- `src/content/research/documentation-driven-adaptive-ux.mdx` embeds both the explanatory visual and the Phase 1 lab while retaining `published: false` and `status: draft`.
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
