# Implementation Plan: Adaptive Enterprise UI Lab — Phase 1

- **Status:** In Progress
- **Feature Directory:** `specs/005-adaptive-enterprise-ui-lab/`

## 1. Approach

1. Preserve the existing Research taxonomy and publication gating.
2. Build Phase 1 as a reusable application slice under `src/components/adaptive-ui-lab/`, not as article-specific inline logic.
3. Keep domain state, runtime context, validation, authored knowledge, knowledge applicability, response policy, and rendering separate.
4. Implement the deterministic resolver first and make its expected scenario behavior explicit before visual polish.
5. Present Phase 1 as a focused single-field study: Worker Group is the only visible product control; surrounding variables belong to the lab harness.
6. Embed the application into `src/content/research/documentation-driven-adaptive-ux.mdx` only after the resolver boundary is stable.
7. Keep the article unpublished unless Orielsy explicitly approves publication.
8. Do not add AI, WebLLM, MCP, backend infrastructure, persistence, telemetry, or a separate repository in Phase 1.
9. Do not publish production from the feature branch.

## 2. Intended Phase 1 Structure

```text
src/components/adaptive-ui-lab/
  types.ts
  fixtures.ts
  knowledge.ts
  validation.ts
  resolver.ts
  response-policy.ts
  AdaptiveEnterpriseUiLab.astro
```

Exact filenames may change if existing repository conventions indicate a better fit, but the concern boundaries should remain.

## 3. Deterministic Implementation Order

1. Define domain/runtime/response types.
2. Add fixed Worker Group and simulation fixtures.
3. Implement deterministic validation.
4. Add authored product-knowledge records with provenance and applicability.
5. Implement derived facts and knowledge matching.
6. Implement response policy.
7. Implement the resolver orchestration function.
8. Verify the required scenario matrix.
9. Add the interactive Astro/client-side presentation.
10. Separate lab-context controls visually and structurally from the single Worker Group product surface.
11. Embed it into the existing unpublished Research entry.
12. Run build/verification where execution access permits.
13. Review branch diff against `main` for unrelated changes.

## 4. Required Scenario Matrix

The deterministic core must cover:

- New user, v4.1, distributed, no Worker Group, 3 available groups.
- New user, v4.2, distributed, no Worker Group, 3 available groups.
- Experienced user, v4.2, distributed, no Worker Group, 3 available groups.
- New user, v4.2, distributed, no Worker Group, exactly 1 available group.
- Experienced user, v4.2, distributed, no Worker Group, exactly 1 available group.
- v4.2 distributed configuration with a Worker Group selected successfully.

The UI harness additionally allows Local / Distributed execution context so the viewer can see the Worker Group field become irrelevant when distributed execution is not active.

## 5. Future-Phase Guardrail

Do not build generic AI/runtime abstractions in Phase 1. Instead, preserve clean seams so later phases can add optional intent resolution, semantic retrieval, explanation adaptation, WebLLM/browser-local inference, and capability routing without replacing the deterministic core.

Later capabilities should generally become additional research phases/publications that reuse the same lab rather than continuously expanding the Phase 1 article.

## 6. Verification

- Confirm work remains on `feature/adaptive-enterprise-ui-lab`.
- Confirm `main` is not modified directly.
- Confirm the Research entry remains publication-gated.
- Confirm no `gh-pages` or production publishing action occurs.
- Verify the resolver scenario outputs before UI polish.
- Run `npm run build` if the execution environment permits; otherwise record the blocker explicitly.
