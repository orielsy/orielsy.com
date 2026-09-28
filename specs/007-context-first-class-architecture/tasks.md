# Tasks: Product Knowledge as Architecture

- **Status:** Published / Editorial Compression Applied / Shared Diagram System Applied / Build Verification Pending

## Research framing

- [x] Review the project constitution and site-foundation research roadmap.
- [x] Identify the existing unpublished umbrella placeholder as the predecessor rather than creating a competing Research entry.
- [x] Define the synthesis thesis and its relationship to Project Memory, Context Engineering, Documentation-Driven Adaptive UX, and Adaptive AI Runtime.
- [x] Define explicit boundaries for code, state, schemas, specifications/policy, product knowledge, and composition.
- [x] Reframe authority as concern-specific rather than a universal “code wins” rule.
- [x] Define the progression Durable → Selectable → Applicable → Composable.

## Durable specification

- [x] Create `specs/007-context-first-class-architecture/spec.md`.
- [x] Create `specs/007-context-first-class-architecture/plan.md`.
- [x] Create this task file.
- [x] Update `specs/001-site-foundation/spec.md` so the research roadmap reflects the synthesis article.
- [x] Use **Product Knowledge as Architecture** as the canonical reader-facing framing while preserving **Context as a First-Class Architectural Primitive** as the thesis.
- [x] Record the shared Research diagram publication system in ADR 006.
- [x] Align this feature spec and plan with the compressed editorial structure and shared diagram system.

## Article

- [x] Replace the unpublished `ai-across-interface-lifecycle.mdx` placeholder with the synthesis article.
- [x] Connect to the published Project Memory and Documentation-Driven Adaptive UX articles without duplicating their scope.
- [x] Explain development-time and runtime systems as different consumers of a broader knowledge architecture.
- [x] Introduce declarative product composition as a proposed consequence, not a finished framework.
- [x] Include explicit limitations and open questions.
- [x] Adopt the title **Product Knowledge as Architecture: From Project Memory to Declarative Product Composition**.
- [x] Make “Context as a First-Class Architectural Primitive” the internal thesis rather than the reader-facing title.
- [x] Remove overclaims that machine-readable meaning was historically impossible or that implementation was never a bottleneck.
- [x] Clarify that documentation is an authoring surface for product knowledge, not the architecture itself.
- [x] Compress the paper into the seven-section Lovable-informed argument without losing the thesis or authority boundaries.
- [x] Keep the research lineage as support for the argument rather than reproducing the discovery history section by section.
- [x] End on the research question of how much final interface composition still needs imperative authoring.

## Visuals

- [x] Add `ContextAsArchitectureVisual.astro`.
- [x] Add `DeclarativeProductCompositionVisual.astro`.
- [x] Reframe the first figure around architectural homes rather than universal authority.
- [x] Add Durable / Selectable / Applicable / Composable to the first figure.
- [x] Separate state from deterministic policy in the account-review example.
- [x] Move risk-escalation permission from state into deterministic policy.
- [x] Rename the knowledge input **Authored product knowledge**.
- [x] Label the resulting interface **Derived surface**.
- [x] Keep deterministic ownership of state, authorization, and side effects visible inside the figure.
- [x] Ensure the example states that it is illustrative rather than an implemented production system.
- [x] Normalize both synthesis diagrams to the shared Research publication scale.
- [x] Move both synthesis diagrams onto `ResearchFigureFrame.astro`.
- [x] Promote a shared Research-wide type/spacing baseline through `research-graphics.css` so legacy figures inherit the same publication scale.
- [x] Keep normal reading-column width as the default and reserve `ResearchBreakout` for genuinely wide information structures.

## Verification

- [x] Confirm the old placeholder is removed so the Research collection has no duplicate umbrella entry.
- [x] Confirm publication frontmatter remains `status: published`, `published: true`, `draft: false`.
- [ ] Review representative legacy and shared-frame diagrams in Day theme.
- [ ] Review representative legacy and shared-frame diagrams in Night theme.
- [ ] Review narrow/mobile layout after the shared diagram baseline.
- [ ] Review wide/desktop layout after the shared diagram baseline.
- [ ] Run `npm run build`.

## Publication

- [x] Publication date remains `2026-09-28` after Orielsy's explicit approval.
- [x] Repository publication state remains public.
- [ ] Complete build/visual verification before any production deployment.
- [ ] Do **not** deploy production without a separate explicit request.
