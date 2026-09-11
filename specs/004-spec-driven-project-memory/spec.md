# Specification: Spec-Driven Project Memory Research Article

- **Status:** Ready for Publication
- **Owner:** Orielsy Diaz
- **Feature Directory:** `specs/004-spec-driven-project-memory/`

## 1. Goal

Turn the existing Research note at `src/content/research/specification-driven-ai-development.mdx` into a concrete, defensible article about using version-controlled repository artifacts as durable project memory for coding agents.

The article must be grounded in the real `orielsy.com` repository and must not read as a generic Spec-Driven Development explainer.

## 2. Core Thesis

Coding agents can implement substantial work, but product intent, architectural constraints, and prior decisions are fragile when they live only in transient conversations. A practical response is to externalize important decisions into version-controlled project memory and route agents to the relevant artifacts as work evolves.

The article should present this as a working architecture pattern used in this repository, not as an invention of Spec-Driven Development or a guarantee of correct output.

## 3. Required Repository Evidence

The article must use the actual repository structure and may reference small excerpts from:

- `AGENTS.md`
- `.specify/memory/constitution.md`
- `specs/001-site-foundation/{spec.md,plan.md,tasks.md}`
- `specs/002-about-page/`
- `specs/003-content-publication-gating/`
- `docs/decisions/002-content-taxonomy.md`
- `docs/decisions/003-manual-production-publishing.md`
- `docs/decisions/004-content-publication-gating.md`
- `docs/decisions/005-github-pages-seo-and-url-policy.md`
- current implementation files where needed to distinguish specification from behavior

Do not invent files, workflows, benchmarks, implementation details, or historical decisions.

## 4. Required Concepts

The article must distinguish:

- transient working context from durable project memory
- `AGENTS.md` as a routing layer rather than a mega-prompt
- constitution as project-wide invariants
- feature specs as desired behavior and scope
- plans as implementation approach
- tasks as immediate execution state
- ADRs as durable decision rationale
- implementation as the resulting code/content

It must emphasize **context selection rather than context accumulation**: the objective is to externalize knowledge, organize it by scope, and surface relevant artifacts when a task needs them.

## 5. Required Failure Case

Use the previously reintroduced “design systems” wording as an illustrative context-persistence failure.

The factual boundary is:

- supported: reusable UI components, component architecture, frontend patterns, frontend systems, UI architecture, engineering standards
- not established: formal design-system ownership

The example must be understated. It should show how a plausible claim can reappear when a prior decision is missing from working context, and how moving that constraint into durable repository rules makes silent regression less likely.

It must not claim that specifications prevent all mistakes.

## 6. Claims That Must Not Appear

Do not state or imply that:

- Orielsy invented Spec-Driven Development
- coding agents are deterministic compilers
- conversational prompts have “zero version control”
- prompts are inherently useless
- specifications guarantee reproducibility or correctness
- specs eliminate model drift
- all agent context should be loaded at once
- formal specifications replace tests or engineering judgment
- the unpublished Repository Context Engine is already implemented

## 7. Limitations Section

The article must explicitly acknowledge that:

- specifications can be wrong
- specifications can become stale
- agents can still misunderstand them
- excessive documentation creates noise
- durable context requires maintenance
- tests remain necessary
- human engineering judgment remains necessary

## 8. Future Direction

The closing may connect to the unpublished Repository Context Engine concept only with future-oriented language such as exploring, investigating, proposed direction, possible evolution, or next step.

Possible future topics include relevance-aware retrieval, MCP-based context delivery, repository-specific architectural knowledge, selective context loading, and automatic routing to relevant specs/ADRs.

## 9. Diagrams

The article may use embedded architectural diagrams when they clarify the argument rather than decorate it.

The current approved diagrams are:

- **The Project Memory Stack** — shows `AGENTS.md`, Constitution, Feature Spec, Plan, Tasks, ADR, and Implementation as differently scoped knowledge layers rather than a rigid execution pipeline.
- **Context Selection, Not Context Accumulation** — shows `AGENTS.md` as a lightweight human-authored routing layer that points tasks toward relevant repository memory while leaving unrelated context unselected.

These diagrams must remain responsive, text-readable, and semantically embedded in the article. They must not imply automated relevance detection, MCP retrieval, or guaranteed agent correctness.

## 10. Taxonomy & Publication

- Content type: **Research**
- Existing slug/file path remains stable.
- Orielsy explicitly approved publication on 2026-09-11.
- `published: true`, `draft: false`, and `status: published` represent the intended public state.
- Publication date is 2026-09-11.
- Do not add a Work section or change navigation.
- No new ADR is required unless a new durable site-wide decision emerges during implementation.

## 11. Acceptance Criteria

The feature is ready to merge when:

- the old article has been substantially rewritten around `orielsy.com` as the case study
- weak or absolute claims from the old draft have been removed or qualified
- the article explains the repository knowledge layers accurately
- the design-systems failure case is included accurately
- current behavior and future exploration are clearly separated
- the two architecture diagrams reinforce the article without overstating automation or maturity
- the article is explicitly configured for publication
- the article follows the existing Research taxonomy and editorial voice
- the production build succeeds, or any inability to run it is reported explicitly rather than assumed
