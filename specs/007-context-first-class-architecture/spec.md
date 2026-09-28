# Specification: Product Knowledge as Architecture

- **Status:** Published / Active Research
- **Owner:** Orielsy Diaz
- **Feature Directory:** `specs/007-context-first-class-architecture/`

## 1. Goal

Maintain the published synthesis article **Product Knowledge as Architecture**, with the subtitle **From Project Memory to Declarative Product Composition**, as the canonical umbrella piece connecting project memory, context engineering, documentation-driven adaptive UX, and the new proposition of declarative product composition.

The reader-facing subject is **product knowledge as architecture**. The internal thesis remains:

> Context is becoming a first-class architectural primitive, and explicit product knowledge may allow parts of an interface to be derived from trusted capabilities rather than imperatively authored.

The article asks:

> If reliable capabilities already exist, how much of a product's final composition still needs to be authored imperatively, and how much can instead be derived from state, policy, product knowledge, and context?

This is an architectural exploration, not a claim that a general framework has already been implemented.

## 2. Architectural Gap

Modern software has deliberate homes for several concerns:

```text
Implemented behavior → Code
Current state        → Data / application state
Structure            → Schemas / contracts
```

Meaning, intent, relevance, explanation, policy rationale, and composition are often less coherently represented. They may be distributed across product documents, tickets, UI code, support material, requirements, prompts, and human memory.

The article explores whether product knowledge and context deserve more explicit architectural ownership.

Machine-readable knowledge must not be presented as historically new. Rule engines, expert systems, model-driven systems, configuration-driven products, knowledge graphs, and related approaches provide relevant lineage. The current proposition is that AI broadens the practical range of structured and semi-structured human-authored knowledge software can interpret and use as context.

## 3. Research Progression

The synthesis should make this progression legible:

```text
Project Memory          → Durable
Context Engineering     → Selectable
Documentation-Driven UX → Applicable
Declarative Composition → Composable
```

The first three properties point to distinct existing research threads. **Composable** is the new proposition owned by this synthesis.

The article is a synthesis layer above, not a replacement for:

1. **From Prompts to Project Memory: Spec-Driven Development for Coding Agents**
   - owns durable development-time project memory
2. **Context Engineering for Software Development**
   - owns selection and delivery of relevant development-time repository context
   - remains unpublished until independently ready
3. **Documentation-Driven Adaptive UX**
   - owns runtime product knowledge as contextual interface input
4. **Adaptive AI Runtime for Enterprise UI**
   - owns the execution-location question for intelligent capabilities

The article must not imply that these are already one implemented system.

## 4. Different Consumers, Shared Knowledge Architecture

Development-time and runtime consumers remain distinct.

Development-time agents may consume specifications, ADRs, architecture constraints, repository rules, component contracts, and implementation context.

Runtime interfaces may consume product semantics, applicability metadata, explanatory guidance, policy references, version/audience context, and current application state.

They may draw from a broader knowledge architecture, but they have different lifecycles, authority boundaries, and failure modes. The article must not describe them as literally the same operational layer.

## 5. Concern-Specific Authority

The architectural model is ownership by concern, not one universal source of truth.

```text
Current facts            → application state
Implemented behavior     → code
Intended behavior        → governing specification or policy
Meaning and explanation  → product knowledge
Disagreement             → expose the defect
```

Do not state that code automatically wins every disagreement. Code is authoritative evidence for what the current implementation does. A governing specification or policy may reveal that the implementation is defective.

The governing principle is:

> **Authority belongs to the artifact responsible for the concern.**

AI belongs on the interpretation/composition side of this boundary. It may retrieve knowledge, connect intent to product concepts, select candidate capabilities, adapt explanation, or propose a composition. It must not invent current state, authorization, successful side effects, or irreversible outcomes.

## 6. Declarative Product Composition

The architecture should distinguish:

### Engineering responsibility

- implement reliable domain capabilities
- define component/action contracts
- enforce authorization, validation, invariants, and side effects
- expose bounded, testable capabilities

### Product/domain knowledge responsibility

- describe intent and meaning
- describe relevance and prerequisites
- describe or reference policy without becoming its enforcement mechanism
- identify useful capabilities
- describe explanatory and composition guidance

### Context/composition responsibility

- select relevant product knowledge
- select permitted capabilities
- order or compose capabilities for the task
- adapt explanation or emphasis
- remain constrained by deterministic state and policy

The article may use a non-coder authoring example only as an abstraction stress test. It must not frame non-coders or AI as replacing engineering.

The article may argue that as component/code generation becomes cheaper, deciding what should exist, for whom, under what conditions, and within what constraints becomes comparatively more valuable. It must not claim that implementation was never a bottleneck.

A useful shorthand is:

```text
UI = f(state, capabilities, policy, context)
```

This is a thinking model, not an executable formula or completed framework.

## 7. Required Account-Review Example

Include a clearly labeled conceptual example based on a restricted-account review workflow.

The four inputs are:

1. **Current state**: restricted account, identity verification missing, no active risk review.
2. **Available capabilities**: Customer Profile, Account Status, Transaction History, Identity Verification, Restriction Action, Risk Escalation.
3. **Authored product knowledge**: task purpose, relevant information, prerequisite explanation, composition guidance.
4. **Deterministic policy**: restriction removal requires verified identity; risk escalation is permitted while restricted; authorization and mutation remain enforced by application code.

The **Derived surface** should demonstrate:

- current state influencing composition
- relevant capabilities being selected
- an unavailable action explained by an unmet prerequisite
- escalation remaining available because policy permits it

The figure caption must state that product knowledge did not implement authorization, account mutation, verification, data retrieval, or escalation. Engineering supplied those capabilities and contracts.

The example is illustrative architecture, not an implemented production product.

## 8. Documentation as an Authoring Surface

Documentation may be a human-friendly authoring surface for product knowledge, but it is not the architecture itself.

The durable architectural asset is the represented knowledge layer, potentially normalized, typed, versioned, tagged with provenance, connected to schemas, checked against policy, and made selectable by other systems.

Do not equate this proposal with traditional docs-as-code. Traditional docs-as-code gives documentation software-engineering practices. This research asks whether authored product knowledge can participate as system input.

## 9. Required Restraint

Do not state or imply that:

- documentation should replace code
- AI should improvise product behavior from prose
- a language model should become the universal source of product truth
- non-coders can safely build arbitrary enterprise products without engineering
- the architecture is already implemented as a general framework
- declarative product composition has been proven at production scale
- every UI should become dynamically generated
- the page is obsolete
- schemas, code, tests, specifications, or application state become unnecessary
- machine-readable meaning was historically impossible
- development-time and runtime context are literally the same operational layer
- code automatically wins every conflict with specifications or product knowledge

Use language such as **working thesis**, **architectural exploration**, **proposed model**, **investigate**, and **may** where the evidence is conceptual.

## 10. Editorial Structure

The article should use a compressed argument rather than reproducing the full discovery history at section-level resolution.

Canonical section structure:

1. **The Missing Architectural Home**
2. **Durable, Selectable, Applicable, Composable**
3. **A Bounded Composition**
4. **Authority Belongs to the Concern**
5. **From Pages to Capability Systems**
6. **Documentation as an Authoring Surface**
7. **What the Thesis Still Has to Prove**

The opening should reach the architectural gap and thesis quickly. Earlier research lineage should support the argument rather than dominate its structure.

The final question remains:

> If those layers are explicit, how much of the final interface still needs to be authored imperatively?

## 11. Publication

- Content type: **Research / Architecture Exploration**
- Canonical title: **Product Knowledge as Architecture**
- Subtitle: **From Project Memory to Declarative Product Composition**
- Metadata/SEO title may combine them as **Product Knowledge as Architecture: From Project Memory to Declarative Product Composition**.
- Research content supports an explicit optional `subtitle` field; display rendering must not infer subtitles by splitting punctuation in `title`.
- Core thesis phrase: **Context as a First-Class Architectural Primitive**
- Canonical content file is `product-knowledge-as-architecture.mdx` and canonical public route is `/research/product-knowledge-as-architecture/`.
- The former working-title route `/research/context-as-first-class-architectural-primitive/` remains only as a compatibility redirect to the canonical route.
- Publication state remains `status: published`, `published: true`, `draft: false`.
- Publication date remains 2026-09-28.
- Repository publication state and production deployment are separate actions.

## 12. Visual Requirements

### Context architecture figure

- frame the question as where concerns live in the architecture
- present code/data/schemas as established homes
- present product knowledge and composition as research propositions
- surface **Durable → Selectable → Applicable → Composable**
- state that the proposal is additive and authority remains scoped to the concern each artifact owns

### Declarative product composition figure

- use **Authored product knowledge** as the knowledge input label
- keep state and deterministic policy distinct
- keep risk-escalation permission in deterministic policy
- label the resulting interface **Derived surface**
- keep deterministic ownership of state, authorization, and side effects visible

Both figures use the shared Research publication-diagram system defined by ADR 006 and `ResearchFigureFrame.astro`.

All visuals must:

- use semantic site tokens
- work in Day and Night themes
- remain static-first
- remain legible on narrow screens
- use semantic figure/caption structure
- identify conceptual/proposed relationships where needed
- remain in the reading column by default unless their information architecture genuinely requires `ResearchBreakout`

## 13. Acceptance Criteria

The article is in its intended published state when:

- the reader-facing title is **Product Knowledge as Architecture**
- the reader-facing subtitle is **From Project Memory to Declarative Product Composition**
- the canonical public route is `/research/product-knowledge-as-architecture/`
- Context as a First-Class Architectural Primitive remains the thesis
- the article uses the compressed seven-section editorial structure
- existing Research is connected without stealing the scope of those pieces
- development-time and runtime context remain clearly distinct consumers
- authority is concern-specific rather than reduced to “code wins”
- capability composition is explained without suggesting arbitrary AI-generated behavior
- the account-review example makes state, capabilities, authored product knowledge, deterministic policy, and the derived surface legible
- deterministic product truth and enforcement remain bounded
- speculative claims remain labeled as such
- both diagrams follow the shared Research diagram publication system
- publication frontmatter remains public
- `npm run build` succeeds before production deployment, or inability to verify the build is reported explicitly
