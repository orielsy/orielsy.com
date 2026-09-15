# Specification: Adaptive Enterprise UI Lab — Phase 1 Foundation

- **Status:** Phase 1 Implemented / Phase 2 Specified
- **Owner:** Orielsy Diaz
- **Feature Directory:** `specs/005-adaptive-enterprise-ui-lab/`

## 1. Goal

Establish **Adaptive Enterprise UI Lab** as a long-lived reference application inside `orielsy.com` for exploring AI-augmented enterprise interfaces across multiple Research publications.

Phase 1 implements the Product Knowledge / Adaptive UX slice only. It demonstrates that meaningful interface adaptation can be driven deterministically from application state, product knowledge, user context, and response policy before any inference system is added.

The Phase 1 implementation is embedded in the related Research publication, but the application architecture is not article-specific. Later phases should extend the same domain, state, knowledge, resolver, and UI boundaries rather than replace them.

The same application is represented in the Projects catalog as a **publicly navigable Project with `status: In Progress`**. The Research article explains the reasoning; the Project entry represents the evolving artifact. These two surfaces must remain distinct rather than duplicating the same content.

## 2. Long-Lived Project Direction

The same reference application may later add:

- non-chat AI capabilities
- natural-language intent resolution
- semantic product-knowledge retrieval
- explanation adaptation
- WebLLM / browser-local inference
- local/server/cloud capability routing
- runtime instrumentation where justified

The conceptual phase map is:

- **Phase 1 — Product Knowledge / Deterministic Adaptive UX:** implemented and currently supports `Documentation-Driven Adaptive UX`.
- **Phase 2 — Selective non-chat inference:** specified / beginning, but not implemented. The first capability is natural-language intent/question mapping into known product concepts, followed by deterministic evidence reconciliation. The detailed contract lives in `phase-2.md`.
- **Phase 3 — Adaptive inference runtime:** planned only; may later support `Adaptive AI Runtime for Enterprise UI` and investigate where useful inference executes.

Future phases must not be described as implemented until verifiable source exists.

## 3. Phase 1 Scenario

Phase 1 deliberately studies **one visible product field: Data Connection**.

The shared scenario controls simulate:

- user familiarity: New / Experienced
- product version: 4.1 / 4.2
- compatible Data Connections: One / Several

The product comparison renders **Standard UI** and **Adaptive UI** simultaneously. Both begin from the same scenario and application truth, while each surface maintains its own interaction state so the visitor can experience the two policies independently.

Standard UI provides the conventional baseline and behaves reactively: required-state validation appears when the visitor attempts to continue without a Data Connection. Adaptive UI uses the same scenario plus deterministic validation, authored product knowledge, and response policy to intervene proactively when the available evidence supports explanation, highlighting, suggestion, or safe preconfiguration.

The compatibility control demonstrates evidence-sensitive UI authority: when several compatible Data Connections exist, the adaptive UI may guide but must not guess; when exactly one compatible connection exists, it may safely offer that value as a user-accepted action.

The lab also exposes a compact deterministic decision trace showing the adaptive path through application state, validation, applicable authored knowledge, and response policy. This trace is explanatory instrumentation for the research demo; it is not part of the fictional product surface.

The initial deterministic slice demonstrates compact vs expanded help, first-time-user guidance, version-specific guidance, deterministic validation, current-state-aware explanation, safe suggested action, optional preconfiguration only when the correct choice is unambiguous, and a direct Standard-versus-Adaptive comparison without changing the shared scenario.

## 4. Architectural Boundaries

The implementation must keep these concerns distinct:

1. **Domain state** — the selected Data Connection for the experience being evaluated.
2. **Runtime/user context** — surrounding product version, familiarity, and compatible connections.
3. **Application truth and validation** — deterministic requirements and available options.
4. **Product knowledge** — authored explanatory/configuration knowledge with provenance and applicability.
5. **Knowledge applicability** — whether an authored item applies to the current state.
6. **Optional inference** — beginning in Phase 2, may reduce ambiguity or select candidate concepts but cannot redefine application truth.
7. **Evidence reconciliation** — deterministic filtering of inferred candidates against current application truth and approved knowledge.
8. **Response policy** — how strongly the UI should intervene given available evidence.
9. **UI rendering** — how structured responses are presented.

The resolver should coordinate these layers without owning component rendering or DOM behavior.

## 5. Core Principles

- State first, AI second.
- Application truth is authoritative.
- Deterministic validation handles deterministic rules.
- Product knowledge explains and enriches; it does not redefine business logic.
- Authored knowledge is preferred where the situation is known.
- Adaptive does not necessarily mean generative.
- User familiarity may change explanation depth, not application truth.
- Knowledge applicability and UI response policy are separate concerns.
- Inference may improve ambiguity resolution or relevance selection but does not gain authority merely by being AI-generated.
- UI authority should increase only as evidence becomes more deterministic.
- Phase 1 must remain independently functional when Phase 2 inference is unavailable.

## 6. Phase 1 Resolver Contract

Conceptual pipeline:

```text
application state
      ↓
deterministic validation
      ↓
product/runtime context
      ↓
applicable authored knowledge
      ↓
response policy
      ↓
structured UI responses
```

Phase 1 contains no semantic inference.

Phase 2 may insert optional inference for intent/concept interpretation, but any inferred result must be reconciled against authoritative application state before response policy or the UI acts on it. See `phase-2.md` for the exact boundary.

## 7. UI Authority

Phase 1 may support these response levels:

1. no intervention
2. expanded description
3. contextual help
4. current-state explanation
5. highlight relevant control
6. suggest next action
7. preconfigure a safe value

Do not automatically execute destructive or ambiguous actions.

A single valid candidate may be offered as a user-accepted preconfiguration. Multiple valid candidates must not be guessed among. Phase 2 inference must not bypass this rule.

## 8. Hosting, Repository Scope, and Project Representation

- Repository: `orielsy/orielsy.com`
- Authoritative source branch: `main`
- The implementation remains inside the Orielsy.com codebase under `src/components/adaptive-ui-lab/`.
- Do not create a separate repository for the Lab at this stage.
- Phase 1 remains embedded in the related Research publication.
- The Projects catalog contains a **published** `Adaptive Enterprise UI Lab` entry with lifecycle status **In Progress**, pointing to the actual in-repository source path rather than inventing a separate repository.
- Public status does not imply completion: the Project page must distinguish implemented Phase 1 from specified-but-unimplemented Phase 2 and planned Phase 3.
- Do not add a top-level Labs navigation section.

If the Lab later becomes a separately packaged artifact, moving it to its own repository would require a separate explicit decision. The current Project representation does not imply that such a repository exists.

## 9. Static-First Constraint

Phase 1 remains fully compatible with the site's static Astro/GitHub Pages architecture.

Phase 1 does not add:

- backend services
- database
- authentication
- persistence
- remote APIs
- LLMs
- WebLLM
- MCP
- embeddings
- vector search
- telemetry

All Phase 1 behavior runs from local TypeScript/data and client-side state where interactivity is required.

Phase 2 must preserve this deterministic core. A genuine inference implementation must not be fabricated merely to keep the site static; if an execution choice would prematurely solve Phase 3 runtime architecture, Phase 2 remains specified until that dependency is intentionally addressed.

## 10. Research Integration

The first slice belongs with the existing Research entry:

`src/content/research/documentation-driven-adaptive-ux.mdx`

The Research article is not itself the architecture boundary of the application. It is the first publication surface that embeds the shared reference application.

`Documentation-Driven Adaptive UX` is currently the intentional primary Featured Research entry because it combines the strongest present evidence across frontend/UI architecture, enterprise UX, product knowledge, context engineering, deterministic adaptive behavior, and a real interactive reference implementation.

`AI as a UI Capability, Not Just a Chatbot` remains a public Concept Draft. Its next substantive evidence should come from a real Phase 2 implementation rather than speculative article expansion.

Publication remains separately gated by existing content-publication rules. Current Research/Project state must always be taken from source frontmatter.

## 11. Production Publishing

Source work happens on feature branches and is reviewed before merge to `main`.

Do not publish production automatically.

Production is intentionally published only from `main` using:

```bash
npm run live
```

A source push or feature-branch commit must not be treated as a production deployment.

## 12. Phase 1 Acceptance Criteria

Phase 1 is complete when:

- domain and runtime-context types are explicit
- fixed demo fixtures exist
- deterministic validation is implemented separately from product knowledge
- authored product-knowledge records include provenance and applicability metadata
- knowledge matching is deterministic
- response policy is separate from knowledge applicability
- the resolver returns structured UI responses
- the required scenario matrix is represented as executable or otherwise verifiable behavior
- the publication demo clearly separates shared scenario controls from product surfaces
- Data Connection is the sole visible product field in the Phase 1 experiment
- Standard UI and Adaptive UI are visible side by side under the same shared scenario
- each comparison surface can be interacted with independently without changing the shared scenario
- Standard UI demonstrates conventional reactive validation after an attempted continuation
- Adaptive UI demonstrates proactive intervention derived from deterministic state and authored knowledge
- the shared application truth is summarized explicitly for the reader
- an inspectable deterministic trace exposes state, validation, applicable knowledge, and response policy
- exactly one compatible Data Connection can be safely offered
- several compatible Data Connections never cause the system to guess
- experienced users receive less automatically surfaced explanation than new users without changing underlying rules
- v4.2-specific guidance is absent for v4.1
- selecting a valid Data Connection removes the missing-connection intervention
- Phase 1 contains no AI, backend, or production deployment

## 13. Phase 2 Boundary

The first Phase 2 capability is specified in `specs/005-adaptive-enterprise-ui-lab/phase-2.md`.

Its intended progression is:

```text
user question
      ↓
intent / concept interpretation
      ↓
candidate product-knowledge concepts
      ↓
deterministic applicability filtering
      ↓
actual application-state reconciliation
      ↓
response policy
      ↓
contextual UI explanation
```

The model may help resolve ambiguity. It must not decide validation, permissions, compatibility, version truth, business rules, product policy, or ambiguous configuration actions.

The current repository has no genuine inference runtime integration, so Phase 2 implementation is deliberately deferred rather than represented with fake AI or a keyword matcher disguised as inference.

## 14. Phase 3 Compatibility

Do not build generic runtime-routing abstractions into Phase 2. Preserve clean seams so Phase 3 can later investigate:

- WebLLM / browser-local inference
- machine-local inference
- server / edge / cloud inference
- capability detection
- fallback between execution tiers
- runtime instrumentation
- measured latency, memory, compatibility, and cost tradeoffs

Phase 3 should answer **where a useful capability executes** only after Phase 2 demonstrates that the capability itself adds value to the interface.
