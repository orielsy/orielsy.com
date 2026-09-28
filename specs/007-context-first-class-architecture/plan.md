# Implementation Plan: Context as a First-Class Architectural Primitive

## Objective

Turn the existing unpublished umbrella placeholder into a complete synthesis article that connects development-time project memory, context selection, runtime product knowledge, and declarative product composition without overstating implementation maturity.

## Source Review

Use the following repository artifacts as the factual and conceptual baseline:

- `.specify/memory/constitution.md`
- `specs/001-site-foundation/spec.md`
- `specs/004-spec-driven-project-memory/spec.md`
- `src/content/research/specification-driven-ai-development.mdx`
- `src/content/research/documentation-driven-adaptive-ux.mdx`
- `src/content/research/context-engineering-software-development.mdx`
- `src/content/research/adaptive-ai-runtime-enterprise-ui.mdx`
- `src/content/research/ai-across-interface-lifecycle.mdx` as the unpublished predecessor

## Content Strategy

### 1. Start from the recurring pattern

Open with the observation that several apparently separate investigations keep returning to the same architectural issue: software needs a durable, selectable representation of the knowledge required to interpret and compose behavior.

### 2. Establish the source-of-truth model

Use the conceptual mapping:

```text
Behavior         → Code
State            → Data / application state
Structure        → Schemas / contracts
Meaning / Intent → Product knowledge
Composition      → Context + policy + capabilities
```

Clarify that the final two rows are the research proposition, not settled industry taxonomy.

### 3. Connect existing work without repeating it

- Project Memory / SDD demonstrates durable development-time context.
- Context Engineering for Software Development asks how the right subset is selected.
- Documentation-Driven Adaptive UX demonstrates product knowledge participating in runtime UI behavior while application truth remains deterministic.
- Adaptive AI Runtime remains the separate execution-location problem.

The synthesis article should link to published work and describe unpublished work without presenting it as complete.

### 4. Introduce capability-oriented composition

Shift the discussion away from "AI generates JSX" toward a bounded capability model:

```text
engineering-built capabilities
+ current state
+ product knowledge
+ policy
→ context / composition layer
→ interface
```

The key architectural question is how much page-level orchestration must remain imperative once reliable capabilities and contracts already exist.

### 5. Use one concrete conceptual example

Create an account-review example with:

- restricted account state
- missing identity verification
- available domain/UI capabilities
- authored task intent and prerequisites
- a composed interface where the restriction-removal action is unavailable until verification succeeds
- an escalation action that remains available

The visual should make the division of responsibility obvious.

### 6. Bound the thesis

Include a section that explicitly keeps authentication, authorization, security invariants, state mutation, and data-integrity validation outside arbitrary documentation-driven control.

### 7. Finish with open questions rather than a framework launch

The article should end with research questions around authority, validation, stale knowledge, composition stability, testing, deterministic boundaries, and when dynamic composition is worth the complexity.

## Visual Implementation

Create static Astro components under `src/components/research/` using current semantic design tokens and existing publication conventions.

Planned components:

- `ContextAsArchitectureVisual.astro`
- `DeclarativeProductCompositionVisual.astro`

Use `ResearchBreakout.astro` for the wider composition figure.

No React, client framework, animation dependency, or new component library is required.

## Content Migration

Because the existing umbrella artifact has never been published, replace it before publication rather than maintain two overlapping Research entries.

Planned path:

- retire `src/content/research/ai-across-interface-lifecycle.mdx`
- create `src/content/research/context-as-first-class-architectural-primitive.mdx`

Update the site-foundation research roadmap so the durable taxonomy reflects the evolved umbrella piece.

## Publication Strategy

The first repository version remains unpublished for editorial and visual review:

```yaml
status: draft
published: false
draft: false
```

Preview with the existing `npm run dev:content` workflow.

Once reviewed, publication is a separate explicit change to frontmatter followed by build verification and the normal production deployment process.

## Verification

Before publication:

1. verify the old placeholder no longer creates a duplicate Research entry
2. confirm all linked public Research routes exist
3. inspect both visuals in Day and Night themes
4. inspect narrow and wide layouts
5. run `npm run build`
6. confirm article remains absent from normal production routing until explicitly published
