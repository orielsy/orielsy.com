# Tasks: Adaptive Enterprise UI Lab

- **Status:** Phase 1 Complete — Public In Progress / Phase 2 Specified / Local Verification Pending
- **Feature Directory:** `specs/005-adaptive-enterprise-ui-lab/`

## Phase 1 Task Checklist

- [x] Confirm `orielsy/orielsy.com` and `main` as the authoritative source.
- [x] Read `AGENTS.md`, constitution, content-taxonomy ADR, publication-gating spec, and production publishing scripts.
- [x] Create the original `feature/adaptive-enterprise-ui-lab` implementation branch from the then-current `main` tip.
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
- [ ] Execute `npm run test:adaptive-ui` in an environment with repository execution access and confirm all six scenarios pass.
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
- [x] Embed the Lab in `src/content/research/documentation-driven-adaptive-ux.mdx`.
- [x] Update the article copy to describe the refined Data Connection comparison accurately.
- [x] Align the durable Phase 1 spec and plan with the Data Connection presentation.
- [x] Preserve Research publication as a separate explicit decision; Documentation-Driven Adaptive UX is currently published after explicit approval.
- [x] Add an `Adaptive Enterprise UI Lab` Project entry pointing to the real in-repository Lab source and associated Research.
- [x] Publish that Project entry while retaining `status: In Progress`, clearly distinguishing implemented Phase 1 from later planned phases.
- [x] Make the Project page artifact-first by embedding the working Phase 1 Lab directly on the public project detail page.
- [x] Associate the Project with both the Progressive Enhancement and Documentation-Driven Adaptive UX publications that directly frame the implemented architecture.

## Phase 2 Definition

- [x] Inspect the current Phase 1 resolver, product-knowledge records, response policy, UI harness, project entry, and dependency surface before defining Phase 2.
- [x] Select natural-language intent / question mapping as the first Phase 2 capability.
- [x] Define the capability in `phase-2.md`.
- [x] Preserve application truth, validation, compatibility, version rules, authored knowledge, and response authority as deterministic boundaries.
- [x] Define structured inference output as candidate concepts rather than final product advice or actions.
- [x] Require inferred candidates to pass deterministic applicability filtering and application-state reconciliation before response policy.
- [x] Define safe failure/fallback behavior so Phase 1 remains functional when inference is unavailable or uncertain.
- [x] Explicitly forbid the model from deciding validation, permissions, compatibility, product/version truth, product policy, ambiguous configuration choices, or runtime tier selection.
- [x] Defer runtime selection, WebLLM, browser-local/machine-local/server execution, and capability routing to Phase 3.
- [x] Do not implement keyword matching and present it as AI.
- [x] Defer Phase 2 implementation in this task because the repository contains no genuine inference runtime integration and selecting one would prematurely couple the capability to Phase 3 execution architecture.

## Current Verification Notes

- The scenario suite lives at `src/components/adaptive-ui-lab/resolver.test.mts` and is wired to `npm run test:adaptive-ui` using Node's built-in test runner and TypeScript stripping mode; no new test-framework dependency was introduced.
- `AdaptiveEnterpriseUiLab.astro` compares Standard UI and Adaptive UI simultaneously under the same scenario variables: user familiarity, product version, and compatible Data Connections. The two surfaces intentionally keep separate selected values and continuation attempts.
- The conventional baseline waits for an attempted continuation before showing required validation; the adaptive experience can surface context-aware intervention earlier from the same scenario.
- A shared-application-truth band states the scenario both experiences inherit, while a collapsible decision trace exposes how the adaptive side resolves state, validation, authored knowledge, and response policy.
- Several compatible connections permit guidance but never guessing; exactly one compatible connection permits a safe user-accepted “Use …” action.
- `src/content/research/documentation-driven-adaptive-ux.mdx` is published and remains the interactive Phase 1 publication surface.
- `src/content/projects/adaptive-enterprise-ui-lab.mdx` is now `published: true` / `status: In Progress`. Its public page labels Phase 1 as implemented, Phase 2 as planned/beginning but not implemented, and Phase 3 as planned.
- The Project entry links to the actual `orielsy.com/src/components/adaptive-ui-lab/` source path; no separate repository is claimed.
- Phase 2's first capability is specified in `phase-2.md`; no inference implementation is claimed yet.
- No production publishing command is part of this feature work.

## Remaining Verification

- [ ] Run `npm run test:adaptive-ui` in an execution environment with repository access.
- [ ] Run `npm run build` in an execution environment with repository access.
- [ ] Visually verify the homepage focus descriptions at mobile and desktop widths.
- [ ] Visually verify the public Adaptive Enterprise UI Lab Project page and Projects archive in both themes.
- [ ] Review final branch diff against `main` for unrelated changes.

## Phase 1 Non-Goals That Remain True

- No LLMs or remote AI APIs in Phase 1.
- No WebLLM in Phase 1.
- No MCP in Phase 1.
- No embeddings or vector search in Phase 1.
- No backend/database/auth/persistence in Phase 1.
- No telemetry or runtime instrumentation in Phase 1.
- No separate Adaptive Enterprise UI Lab repository yet.
- No production deployment without explicit approval after merge to `main`.
