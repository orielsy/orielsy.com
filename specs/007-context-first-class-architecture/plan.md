# Implementation Plan: Product Knowledge as Architecture

## Objective

Maintain the published synthesis article **Product Knowledge as Architecture**, with the subtitle **From Project Memory to Declarative Product Composition**, as the canonical umbrella piece connecting durable project memory, context selection, runtime product knowledge, and declarative product composition without overstating implementation maturity.

The phrase **Context as a First-Class Architectural Primitive** remains the thesis inside the article rather than the reader-facing title.

## Source Review

Use these repository artifacts as the factual and conceptual baseline:

- `.specify/memory/constitution.md`
- `specs/001-site-foundation/spec.md`
- `specs/004-spec-driven-project-memory/spec.md`
- `src/content/research/specification-driven-ai-development.mdx`
- `src/content/research/documentation-driven-adaptive-ux.mdx`
- `src/content/research/context-engineering-software-development.mdx`
- `src/content/research/adaptive-ai-runtime-enterprise-ui.mdx`
- `docs/decisions/006-research-diagram-publication-system.md`

The retired `ai-across-interface-lifecycle.mdx` artifact remains historical predecessor context only.

## Editorial Strategy

The article should present the argument in a compressed seven-section arc rather than reproducing each stage of the discovery process as its own section.

```text
The Missing Architectural Home
        ↓
Durable / Selectable / Applicable / Composable
        ↓
A Bounded Composition
        ↓
Authority Belongs to the Concern
        ↓
From Pages to Capability Systems
        ↓
Documentation as an Authoring Surface
        ↓
What the Thesis Still Has to Prove
```

### 1. Reach the architectural gap quickly

Open with the recurring questions, identify the missing architectural home for meaning, and state the working thesis without a long historical preamble.

### 2. Preserve the research progression

```text
Project Memory          → Durable
Context Engineering     → Selectable
Documentation-Driven UX → Applicable
Declarative Composition → Composable
```

The first three remain distinct research threads. The fourth is the new proposition owned by this synthesis.

### 3. Keep development-time and runtime consumers distinct

Use one concise explanation rather than a standalone long section. Coding agents and runtime interfaces may draw from a broader knowledge architecture, but they consume different projections with different lifecycles, authority boundaries, and failure modes.

### 4. Use one bounded capability example

The account-review example remains the primary concrete illustration:

- restricted account state
- missing identity verification
- no active risk review
- trusted product capabilities
- authored task intent and prerequisite explanation
- deterministic policy that blocks restriction removal and permits escalation
- a derived surface where verification is the relevant next step

State and policy remain semantically distinct.

### 5. Keep authority concern-specific

Use the model:

```text
Current facts            → application state
Implemented behavior     → code
Intended behavior        → governing specification or policy
Meaning and explanation  → product knowledge
Disagreement             → expose the defect
```

The governing principle remains:

> Authority belongs to the artifact responsible for the concern.

### 6. Position AI as interpreter/composer

AI may interpret intent, retrieve product knowledge, connect concepts, select candidate capabilities, adapt explanation, or propose composition. It must not become the source of current facts, authorization, or irreversible execution outcomes.

### 7. Treat documentation as an authoring surface

Documentation is one human-friendly input format. The durable architecture is the represented knowledge and the contracts governing its use.

### 8. End with what remains unproven

Finish with research questions around authority, synchronization, dynamic range, testing, representation, and inference boundaries rather than presenting a framework launch.

## Title Model

Research entries may define an explicit optional `subtitle` field.

For this article:

- title: **Product Knowledge as Architecture**
- subtitle: **From Project Memory to Declarative Product Composition**
- metadata/SEO may combine them with a colon

The visible Research header must render the fields directly. It must not infer a subtitle by splitting punctuation inside the title.

## Visual Implementation

The two article figures remain static Astro components:

- `ContextAsArchitectureVisual.astro`
- `DeclarativeProductCompositionVisual.astro`

Both use `ResearchFigureFrame.astro` and the shared Research diagram baseline defined by ADR 006.

### Shared publication rules

- normal reading-column width is the default
- `ResearchBreakout.astro` is used only when the figure genuinely needs more horizontal room
- figure title is approximately 16-18px
- primary nodes are approximately 14px
- explanatory copy is approximately 11px
- technical labels are approximately 9px
- captions are approximately 11-12px
- card padding is generally 14-16px unless the information structure requires otherwise
- internal information architecture remains diagram-specific

`research-graphics.css` supplies a compatible baseline to existing Research figures so older visuals inherit the same publication scale while they are incrementally migrated to the shared frame.

No React, client framework, animation dependency, or new component library is required.

## Route Strategy

The canonical content file and public route are:

- `src/content/research/product-knowledge-as-architecture.mdx`
- `/research/product-knowledge-as-architecture/`

The earlier working-title route `/research/context-as-first-class-architectural-primitive/` is retained only as a compatibility redirect so existing links do not break. New internal links and publication metadata should use the canonical Product Knowledge route.

## Publication Strategy

The article remains publicly configured in source:

```yaml
status: published
published: true
draft: false
pubDate: 2026-09-28
```

Repository publication state and production deployment remain separate actions. Do not deploy production unless explicitly requested.

## Verification

Before any production deployment:

1. confirm publication frontmatter remains public
2. confirm the canonical Product Knowledge route and old-route redirect
3. inspect the title/subtitle hierarchy at narrow and wide widths
4. inspect the shared diagram system in Day and Night themes
5. inspect narrow and wide layouts across representative older and newer figures
6. verify the two synthesis figures remain semantically correct
7. verify public links do not expose unpublished detail routes as normal navigation
8. run `npm run build`
9. report any inability to verify rather than assuming success
