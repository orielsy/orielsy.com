# Specification: Context as a First-Class Architectural Primitive

- **Status:** Drafting / Editorial Review Pending
- **Owner:** Orielsy Diaz
- **Feature Directory:** `specs/007-context-first-class-architecture/`

## 1. Goal

Evolve the existing unpublished umbrella concept, **AI Across the Interface Lifecycle**, into a substantive synthesis article titled **Context as a First-Class Architectural Primitive**.

The article should explain the deeper architectural question connecting several existing research threads on orielsy.com without collapsing those focused pieces into one framework.

The core question is:

> What happens when context becomes a first-class architectural primitive rather than incidental prompt material or passive documentation?

## 2. Core Thesis

Modern software has established authoritative representations for several concerns:

- **behavior** → code
- **state** → data / application state
- **structure** → schemas and contracts

Meaning, intent, policy, relevance, explanation, and composition are often less coherently represented. They may be scattered across documentation, tickets, UI code, support material, prompts, requirements, and human memory.

The article explores whether **product knowledge and context can become a durable architectural layer** that software systems can store, select, validate, and apply.

AI is relevant because models can increasingly interpret structured and semi-structured product knowledge, but the thesis must not depend on giving a model authority over deterministic product truth.

## 3. Relationship to Existing Research

This article is a synthesis layer above, not a replacement for, existing focused Research:

1. **From Prompts to Project Memory: Spec-Driven Development for Coding Agents**
   - owns durable development-time project memory
   - shows how specifications, ADRs, constitutions, and repository rules can preserve intent across coding-agent sessions

2. **Context Engineering for Software Development**
   - owns selection and delivery of relevant development-time repository context
   - remains unpublished until independently ready

3. **Documentation-Driven Adaptive UX**
   - owns runtime product knowledge as contextual interface input
   - keeps application state and validation authoritative

4. **Adaptive AI Runtime for Enterprise UI**
   - owns the execution-location question for intelligent capabilities
   - remains a separate runtime concern

The synthesis should make the progression legible:

```text
stored context
→ selected context
→ applied context
→ potentially authoritative product knowledge
```

The article must not imply that these are already one implemented system.

## 4. Product-Knowledge Model

The article should introduce this conceptual mapping:

```text
Behavior         → Code
State            → Data / application state
Structure        → Schemas / contracts
Meaning / Intent → Product knowledge
Composition      → Context + policy + capabilities
```

This is a conceptual model, not a claim that every software system requires five literal layers.

A useful shorthand may be presented as:

```text
UI = f(state, capabilities, policy, context)
```

The article must explicitly describe this as a thinking model rather than an executable formula or completed framework.

## 5. Declarative Product Composition

A central consequence to investigate is **declarative product composition**.

The architecture should distinguish:

### Engineering responsibility

- implement reliable domain capabilities
- define component and action contracts
- enforce authorization, validation, invariants, and side effects
- expose bounded, testable capabilities

### Product / domain knowledge responsibility

- describe intent
- describe meaning and relevance
- express product policy where appropriate
- identify useful capabilities and prerequisites
- describe explanatory or composition guidance

### Context / composition responsibility

- select relevant product knowledge
- select permitted capabilities
- order or compose those capabilities for the task
- adapt explanation or emphasis
- remain constrained by deterministic state and policy

The article may use a non-coder authoring example only as an **abstraction stress test**. It must not frame non-coders or AI as replacing engineering.

## 6. Required Illustrative UI

Include a clearly labeled conceptual interface example based on an account-review workflow.

Available capabilities may include:

- Customer Profile
- Account Status
- Transaction History
- Identity Verification
- Restriction Action
- Risk Escalation

The authored product knowledge should express a task such as investigating a restricted account, relevant information, available actions, and prerequisites.

The rendered example should visibly demonstrate:

- current state influencing the composition
- relevant capabilities being selected
- an unavailable action explained by an unmet prerequisite
- an escalation path remaining available

The figure caption must state that the documentation/product-knowledge layer did **not** implement authorization, account mutation, verification, or data retrieval; engineering supplied those capabilities and contracts.

The example is illustrative architecture, not an implemented production product.

## 7. What Documentation / Product Knowledge Can and Cannot Own

The article must resist the framing that documentation should replace application logic.

Potentially appropriate authoritative or semi-authoritative concerns include:

- product intent
- semantic meaning
- explanatory guidance
- relationships between capabilities
- composition guidance
- prerequisites and policy references when backed by deterministic enforcement
- provenance and applicability metadata

Concerns that must remain in deterministic systems include, unless separately proven otherwise:

- authentication and authorization
- transactional side effects
- security invariants
- authoritative current state
- validation that protects data integrity
- irreversible operations

Documentation may explain these rules. It must not silently redefine them.

## 8. Required Restraint / Disallowed Claims

Do not state or imply that:

- documentation should replace code
- AI should improvise product behavior from prose
- a language model should become the source of product truth
- non-coders can safely build arbitrary enterprise products without engineering
- this architecture is already implemented as a general framework
- declarative product composition has been proven at production scale
- every UI should become dynamically generated
- the page is obsolete
- schemas, code, tests, or application state become unnecessary

Use language such as **working thesis**, **architectural exploration**, **proposed model**, **investigate**, and **could** where the evidence is conceptual rather than implemented.

## 9. Article Shape

The first complete draft should cover:

1. **The Pattern I Kept Running Into**
2. **Software Has Sources of Truth — But Not Always for Meaning**
3. **Context as Architecture**
4. **Development-Time Context: Project Memory and SDD**
5. **Runtime Context: Product Knowledge in the Interface**
6. **From Generated Components to Capability Systems**
7. **The Page May Stop Being the Primary Authored Artifact**
8. **What Documentation Can and Cannot Own**
9. **Where AI Actually Fits**
10. **Open Questions**

The exact headings may evolve editorially if the argument remains intact.

## 10. Taxonomy & Publication

- Content type: **Research / Architecture Exploration**
- Working title: **Context as a First-Class Architectural Primitive**
- The previous `ai-across-interface-lifecycle.mdx` artifact is unpublished and may be replaced before publication rather than preserved as a public route.
- The new article should remain `published: false` during initial editorial and visual review.
- Once the article itself is complete and reviewed, it may be published as a finished Research piece while still describing the architectural model as a working thesis.
- Do not use the site's public **In Progress** state merely because the research direction remains open; publication state describes whether the article itself is ready.

## 11. Visual Requirements

At minimum, include:

1. **Context as architecture** — a compact visual showing behavior/code, state/data, structure/schemas, meaning/product knowledge, and composition/context-policy-capabilities.
2. **Declarative product composition** — a wider conceptual figure that connects current state, bounded capabilities, product knowledge, and policy to a composed account-review interface.

Visuals must:

- use existing semantic site tokens
- work in Day and Night themes
- remain static-first with no unnecessary client JavaScript
- remain legible on narrow screens
- use semantic figure/caption structure
- explicitly identify conceptual/proposed relationships where needed

## 12. Acceptance Criteria

The feature is ready for publication when:

- the old umbrella placeholder has been replaced by a coherent synthesis rather than duplicated by a competing article
- the thesis connects existing Research without stealing the scope of those pieces
- development-time and runtime context are clearly distinguished
- the article explains capability composition without suggesting arbitrary AI-generated behavior
- the account-review example makes the concept understandable without implying a production implementation
- deterministic product truth remains clearly bounded
- speculative claims are labeled as such
- the article is editorially complete enough to stand alone
- the relevant site-foundation research roadmap is updated to reflect the evolved umbrella thesis
- `npm run build` succeeds, or inability to verify the build is reported explicitly
