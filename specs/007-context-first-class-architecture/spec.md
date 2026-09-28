# Specification: Product Knowledge as Architecture

- **Status:** Published / Active Research
- **Owner:** Orielsy Diaz
- **Feature Directory:** `specs/007-context-first-class-architecture/`

## 1. Goal

Evolve the earlier umbrella concept into a substantive synthesis article titled **Product Knowledge as Architecture: From Project Memory to Declarative Product Composition**.

The article explains the deeper architectural question connecting several existing research threads on orielsy.com without collapsing those focused pieces into one implemented framework.

The reader-facing subject is **product knowledge as architecture**. The core thesis inside the article is:

> Context is becoming a first-class architectural primitive, and some interfaces may become derived views of structured product knowledge over a bounded capability system.

The new research question is:

> If reliable capabilities already exist, how much of a product's final composition still needs to be encoded imperatively — and how much can instead be derived from state, policy, product knowledge, and context?

## 2. Core Thesis

Modern software has deliberate architectural homes for several concerns:

- **implemented behavior** → code
- **current state** → data / application state
- **structure** → schemas and contracts

Meaning, intent, relevance, explanation, policy rationale, and composition are often less coherently represented. They may be scattered across documentation, tickets, UI code, support material, prompts, requirements, and human memory.

The article explores whether **product knowledge and context can become a durable architectural layer** that software systems can store, select, validate for applicability, and use during bounded composition.

AI is relevant because models broaden the practical range of structured and semi-structured human-authored knowledge software can interpret. The thesis must not depend on giving a model authority over concerns owned by deterministic systems.

Machine-readable knowledge itself must not be presented as new. Rule engines, expert systems, model-driven systems, configuration-driven products, knowledge graphs, and related approaches predate the current AI wave.

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
   - keeps application state and validation authoritative for the concerns they own

4. **Adaptive AI Runtime for Enterprise UI**
   - owns the execution-location question for intelligent capabilities
   - remains a separate runtime concern

The synthesis should make this progression legible:

```text
Project Memory          → durable
Context Engineering     → selectable
Documentation-Driven UX → applicable
Declarative Composition → composable
```

The first three are grounded in existing research threads. **Composable** is the new architectural proposition.

The article must not imply that these are already one implemented system.

## 4. Architectural-Ownership Model

The article and first diagram should introduce this conceptual mapping:

```text
Implemented behavior → Code
Current state        → Data / application state
Structure            → Schemas / contracts
Meaning / Intent     → Product knowledge
Composition          → Context + policy + capabilities
```

The final two rows are the research proposition, not settled industry taxonomy.

The framing must be **architectural ownership**, not a universal winner-takes-all hierarchy of authority.

Authority depends on the concern:

```text
Current facts            → application state
Current implementation   → code tells us what happens now
Intended behavior        → governing specification / policy may outrank defective code
Meaning and explanation  → product knowledge
Conflict                 → surface the defect rather than silently choose one source
```

Do not state that “code wins” whenever code and product knowledge disagree. Source code remains evidence for what the implementation currently does; it does not automatically supersede a governing specification describing intended behavior.

A useful composition shorthand may be presented as:

```text
UI = f(state, capabilities, policy, context)
```

It must be described as a thinking model rather than an executable formula or completed framework.

## 5. One Knowledge Architecture, Different Consumers

Development-time and runtime consumers must remain distinct.

### Development-time consumers may use

- specifications
- ADRs
- architecture constraints
- repository rules
- component contracts
- implementation context

### Runtime consumers may use

- product semantics
- applicability metadata
- explanatory guidance
- policy references
- version / audience / state context

The shared architectural idea is a broader knowledge layer from which each consumer selects what is appropriate to its job. The article must not describe development-time and runtime systems as literally the same operational layer.

## 6. Declarative Product Composition

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
- describe or reference policy without becoming its enforcement mechanism
- identify useful capabilities and prerequisites
- describe explanatory or composition guidance

### Context / composition responsibility

- select relevant product knowledge
- select permitted capabilities
- order or compose those capabilities for the task
- adapt explanation or emphasis
- remain constrained by deterministic state and policy

The article may use a non-coder authoring example only as an **abstraction stress test**. It must not frame non-coders or AI as replacing engineering.

As component/code generation becomes cheaper, the article may argue that deciding what should exist, for whom, under what conditions, and within what constraints becomes comparatively more valuable. It must not claim that implementation “was never the bottleneck.”

## 7. Required Illustrative UI

Include a clearly labeled conceptual interface example based on an account-review workflow.

The four inputs are:

1. **Current state** — restricted account, identity verification missing, recent activity available, no active risk review.
2. **Available capabilities** — Customer Profile, Account Status, Transaction History, Identity Verification, Restriction Action, Risk Escalation.
3. **Authored product knowledge** — task purpose, relevant information, prerequisite explanation, composition guidance.
4. **Deterministic policy** — restriction removal requires verified identity; risk escalation is permitted while restricted; authorization and mutation remain enforced by application code.

The rendered **Derived surface** should visibly demonstrate:

- current state influencing the composition
- relevant capabilities being selected
- an unavailable action explained by an unmet prerequisite
- an escalation path remaining available because policy permits it

The figure caption must state that the authored product-knowledge layer did **not** implement authorization, account mutation, verification, data retrieval, or escalation; engineering supplied those capabilities and contracts.

The example is illustrative architecture, not an implemented production product.

## 8. Documentation Is an Authoring Surface

The article must distinguish the architectural concept from its authoring format.

Documentation may serve as a human-friendly authoring surface for product knowledge, but the durable architecture is the represented knowledge layer — potentially normalized, structured, versioned, tagged with provenance, connected to schemas, and constrained by policy.

Do not equate this proposal with traditional docs-as-code. Traditional docs-as-code generally gives documentation software-engineering practices; this research asks whether authored product knowledge can participate as system input.

## 9. What Product Knowledge Can and Cannot Own

Potentially appropriate concerns include:

- product intent
- semantic meaning
- explanatory guidance
- relationships between capabilities
- composition guidance
- applicability
- prerequisites
- policy rationale and references
- provenance metadata

Concerns that must remain owned by deterministic systems unless separately proven otherwise include:

- authentication and authorization
- transactional side effects
- security invariants
- authoritative current state
- validation that protects data integrity
- irreversible operations

Documentation may explain these rules. It must not silently redefine or enforce them.

## 10. Required Restraint / Disallowed Claims

Do not state or imply that:

- documentation should replace code
- AI should improvise product behavior from prose
- a language model should become the universal source of product truth
- non-coders can safely build arbitrary enterprise products without engineering
- this architecture is already implemented as a general framework
- declarative product composition has been proven at production scale
- every UI should become dynamically generated
- the page is obsolete
- schemas, code, tests, specifications, or application state become unnecessary
- machine-readable meaning was historically impossible
- development-time and runtime context are literally the same operational layer
- code automatically wins every conflict with specifications or product knowledge

Use language such as **working thesis**, **architectural exploration**, **proposed model**, **investigate**, and **may** where the evidence is conceptual rather than implemented.

## 11. Article Shape

The published article should cover:

1. **The Pattern I Kept Running Into**
2. **Software Has Clear Homes for Behavior, State, and Structure**
3. **Context as Architecture** — durable, selectable, applicable, composable
4. **One Knowledge Architecture, Different Consumers**
5. **From Generated Components to Capability Systems**
6. **Where AI Actually Fits**
7. **Documentation Is an Authoring Surface, Not the Architecture**
8. **The Page May Stop Being the Primary Authored Artifact**
9. **What Product Knowledge Can and Cannot Own**
10. **Toward Declarative Product Composition**

The exact headings may evolve editorially if the argument remains intact.

## 12. Taxonomy & Publication

- Content type: **Research / Architecture Exploration**
- Canonical title: **Product Knowledge as Architecture: From Project Memory to Declarative Product Composition**
- Core thesis phrase: **Context as a First-Class Architectural Primitive**
- Existing file/route remains `context-as-first-class-architectural-primitive.mdx` to avoid unnecessary route churn after publication.
- The previous `ai-across-interface-lifecycle.mdx` artifact was unpublished and was replaced before publication rather than preserved as a public route.
- Orielsy explicitly approved publication on 2026-09-28.
- Publication state remains `status: published`, `published: true`, `draft: false`.
- Publication date is 2026-09-28.
- The article is a finished published Research piece while still describing the architectural model as a working thesis.

## 13. Visual Requirements

### Context architecture figure

- Frame the question as **where concerns live in the architecture**, not “what wins.”
- Present implemented behavior/code, current state/data, and structure/schemas as established homes.
- Present meaning/product knowledge and composition/context-policy-capabilities as research propositions.
- Surface the progression **Durable → Selectable → Applicable → Composable**.
- State that the proposal is additive and authority remains scoped to the concern each artifact owns.

### Declarative product composition figure

- Use **Authored product knowledge** as the knowledge input label.
- Keep state and policy semantically distinct; “risk escalation permitted” belongs to deterministic policy, not current state.
- Label the resulting interface as a **Derived surface**.
- State inside or below the surface that state, authorization, and side effects remain owned by deterministic systems.

All visuals must:

- use existing semantic site tokens
- work in Day and Night themes
- remain static-first with no unnecessary client JavaScript
- remain legible on narrow screens
- use semantic figure/caption structure
- explicitly identify conceptual/proposed relationships where needed

## 14. Acceptance Criteria

The article is in its intended published state when:

- the reader-facing title is **Product Knowledge as Architecture: From Project Memory to Declarative Product Composition**
- context-as-first-class-primitive remains the thesis rather than having to carry the entire reader-facing title
- the synthesis connects existing Research without stealing the scope of those pieces
- development-time and runtime context are clearly distinguished as different consumers of a broader knowledge architecture
- authority is concern-specific rather than reduced to “code wins”
- the article explains capability composition without suggesting arbitrary AI-generated behavior
- the account-review example makes state, capabilities, authored product knowledge, deterministic policy, and the derived surface legible
- deterministic product truth and enforcement remain clearly bounded
- speculative claims are labeled as such
- the relevant site-foundation research roadmap reflects the canonical title and framing
- publication frontmatter remains public
- `npm run build` succeeds before production deployment, or inability to verify the build is reported explicitly
