# Tasks: Adaptive Enterprise UI Lab — Phase 1

- **Status:** Implementation Complete — Roadmap Formalized / Local Verification Pending
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
- [x] Preserve Research publication as a separate explicit decision; Documentation-Driven Adaptive UX is currently published after explicit approval.
- [x] Add an unpublished `Adaptive Enterprise UI Lab` Project-in-Progress entry that points to the real in-repository Lab source and associated Research.
- [x] Record Phase 2 and Phase 3 as future-only directions rather than implemented capabilities.
- [ ] Run `npm run build` if execution access permits after roadmap changes.
- [x] Review the original implementation branch diff against `main` for unrelated changes.
- [x] Do not publish production from feature/content branches.

## Verification Notes

- The scenario suite lives at `src/components/adaptive-ui-lab/resolver.test.mts` and is wired to `npm run test:adaptive-ui` using Node's built-in test runner and TypeScript stripping mode; no new test-framework dependency was introduced.
- `AdaptiveEnterpriseUiLab.astro` compares Standard UI and Adaptive UI simultaneously under the same scenario variables: user familiarity, product version, and compatible Data Connections. The two surfaces intentionally keep separate selected values and continuation attempts.
- The conventional baseline waits for an attempted continuation before showing required validation; the adaptive experience can surface context-aware intervention earlier from the same scenario.
- A shared-application-truth band states the scenario both experiences inherit, while a collapsible decision trace exposes how the adaptive side resolves state, validation, authored knowledge, and response policy.
- The Data Connection domain replaces the earlier Worker Group/Execution Mode/Target Environment scenario so the micro-demo can be understood without learning fictional infrastructure terminology.
- Several compatible connections permit guidance but never guessing; exactly one compatible connection permits a safe user-accepted “Use …” action.
- Secondary explanatory responses are progressively disclosed so required-state explanation and safe next action remain visually primary.
- `src/components/research/DocumentationDrivenAdaptiveVisual.astro` replaces the article's original text-only workflow diagram with a conventional external-detour versus in-product adaptive-path visual.
- `src/content/research/documentation-driven-adaptive-ux.mdx` currently has `published: true`; that publication state is independent of the Lab Project entry.
- `src/content/projects/adaptive-enterprise-ui-lab.mdx` is intentionally `published: false` / `status: In Progress`, so normal production presents it only through Projects-in-Progress behavior and does not expose its unfinished body as a finished project.
- The Project entry links to the actual `orielsy.com/src/components/adaptive-ui-lab/` source path; no separate repository is claimed.
- Phase 1 is implemented. Phase 2 non-chat AI capabilities and Phase 3 adaptive inference runtime work remain future roadmap directions only.
- No production publishing command is part of this roadmap task.

## Phase 1 Non-Goals

- No LLMs or remote AI APIs.
- No WebLLM in Phase 1.
- No MCP in Phase 1.
- No embeddings or vector search.
- No backend/database/auth/persistence.
- No telemetry or runtime instrumentation yet.
- No separate Adaptive Enterprise UI Lab repository yet.
- No production deployment without explicit approval after merge to `main`.
