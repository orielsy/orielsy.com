# Implementation Plan: Product Knowledge as Architecture

## Objective

Maintain the published synthesis article **Product Knowledge as Architecture: From Project Memory to Declarative Product Composition** as the canonical umbrella piece connecting development-time project memory, context selection, runtime product knowledge, and declarative product composition without overstating implementation maturity.

The phrase **Context as a First-Class Architectural Primitive** remains the thesis inside the article rather than the reader-facing title.

## Source Review

Use the following repository artifacts as the factual and conceptual baseline:

- `.specify/memory/constitution.md`
- `specs/001-site-foundation/spec.md`
- `specs/004-spec-driven-project-memory/spec.md`
- `src/content/research/specification-driven-ai-development.mdx`
- `src/content/research/documentation-driven-adaptive-ux.mdx`
- `src/content/research/context-engineering-software-development.mdx`
- `src/content/research/adaptive-ai-runtime-enterprise-ui.mdx`

The retired `ai-across-interface-lifecycle.mdx` artifact is historical predecessor context only and must not be restored as a competing public entry.

## Content Strategy

### 1. Start from the recurring pattern

Open with the observation that several apparently separate investigations keep returning to the same architectural issue: software needs durable, selectable, applicable knowledge that can be used by different consumers without surrendering deterministic control.

The new question added by this synthesis is whether that knowledge can become **composable** — whether it can participate in selecting and arranging trusted capabilities into a useful interface.

### 2. Establish architectural homes without creating one universal hierarchy

Use the conceptual mapping:

```text
Implemented behavior → Code
Current state        → Data / application state
Structure            → Schemas / contracts
Meaning / Intent     → Product knowledge
Composition          → Context + policy + capabilities
```

Clarify that the final two rows are the research proposition, not settled taxonomy.

Authority is concern-specific:

```text
Current facts            → application state
Current implementation   → code tells us what happens now
Intended behavior        → governing specification / policy may reveal defective code
Meaning and explanation  → product knowledge
Conflict                 → surface the disagreement rather than silently choose one winner
```

### 3. Make the research progression explicit

```text
Project Memory          → Durable
Context Engineering     → Selectable
Documentation-Driven UX → Applicable
Declarative Composition → Composable
```

The first three stages point to distinct existing research threads. The fourth is the new proposition owned by this synthesis.

### 4. Keep development-time and runtime consumers distinct

Development-time coding agents and runtime interface systems may draw from a broader knowledge architecture, but they are not the same operational layer.

Development-time consumers may use specs, ADRs, repository rules, component contracts, and implementation context.

Runtime consumers may use product semantics, applicability, explanatory guidance, policy references, version/audience context, and current application state.

### 5. Introduce capability-oriented composition

Shift the discussion away from unconstrained “AI generates JSX” toward a bounded capability model:

```text
engineering-built capabilities
+ current state
+ authored product knowledge
+ deterministic policy
→ context / composition layer
→ derived interface
```

The key architectural question is how much page-level orchestration must remain imperative once reliable capabilities and contracts already exist.

Do not claim implementation was never a bottleneck; instead argue that as generation becomes cheaper, deciding what should exist and under what constraints becomes comparatively more valuable.

### 6. Use one concrete conceptual example

Use the account-review example with:

- restricted account state
- missing identity verification
- no active risk review
- available domain/UI capabilities
- authored task intent and prerequisite explanation
- deterministic policy that blocks restriction removal and permits escalation
- a derived interface where verification is the relevant next step

The visual must keep **state** and **policy** semantically separate.

### 7. Bound AI's role

Position AI as interpreter/composer, not authority:

- interpret natural-language intent
- map a task to known product concepts
- retrieve relevant knowledge
- select candidate capabilities
- adapt explanation
- propose a composition

Deterministic systems continue to own current state, authorization, side effects, and irreversible operations.

### 8. Treat documentation as an authoring surface

Documentation may be one human-friendly way to express product knowledge, but the architecture is the knowledge layer itself, potentially normalized into typed or structured representations.

Do not equate the thesis with traditional docs-as-code.

### 9. Finish with open questions rather than a framework launch

End with research questions around authority levels, synchronization, dynamic range, testing, representation, and inference boundaries.

The final question should remain:

> If state, trusted capabilities, deterministic policy, and product knowledge are explicit, how much of the final interface still needs to be authored imperatively?

## Visual Implementation

Maintain static Astro components under `src/components/research/` using current semantic design tokens and existing publication conventions:

- `ContextAsArchitectureVisual.astro`
- `DeclarativeProductCompositionVisual.astro`

### `ContextAsArchitectureVisual.astro`

- asks where concerns live in the architecture, not which artifact universally “wins”
- separates established architectural homes from research propositions
- surfaces Durable / Selectable / Applicable / Composable
- states that authority remains scoped to the concern each artifact owns

### `DeclarativeProductCompositionVisual.astro`

- separates current state from deterministic policy
- labels product knowledge as **Authored product knowledge**
- moves risk-escalation permission into deterministic policy
- labels the output **Derived surface**
- keeps deterministic ownership of state, authorization, and side effects visible

Use `ResearchBreakout.astro` for the wider composition figure.

No React, client framework, animation dependency, or new component library is required.

## Route Stability

Keep the existing published route/file:

- `src/content/research/context-as-first-class-architectural-primitive.mdx`

The reader-facing title may change without forcing route churn.

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
2. inspect both visuals in Day and Night themes
3. inspect narrow and wide layouts
4. verify public links do not expose unpublished detail routes as normal navigation
5. run `npm run build`
6. report any inability to verify rather than assuming success
