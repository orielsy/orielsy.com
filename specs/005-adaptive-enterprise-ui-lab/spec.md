# Specification: Adaptive Enterprise UI Lab — Phase 1

- **Status:** In Progress
- **Owner:** Orielsy Diaz
- **Feature Directory:** `specs/005-adaptive-enterprise-ui-lab/`

## 1. Goal

Establish **Adaptive Enterprise UI Lab** as a long-lived reference application inside `orielsy.com` for exploring AI-augmented enterprise interfaces across multiple Research publications.

Phase 1 implements the Product Knowledge / Adaptive UX slice only. It must prove that meaningful interface adaptation can be driven deterministically from application state, product knowledge, user context, and response policy before any inference system is added.

The Phase 1 implementation is embedded in the related Research publication, but the application architecture must not be article-specific. Future phases should extend the same domain, state, knowledge, resolver, and UI boundaries rather than replace them.

The same application is also represented in the Projects catalog as an **unpublished Project-in-Progress** entry. The Research article explains the reasoning; the Project entry represents the evolving artifact. These two surfaces must remain distinct rather than duplicating the same content.

## 2. Long-Lived Project Direction

The same reference application may later add:

- non-chat AI capabilities
- natural-language intent resolution
- semantic product-knowledge retrieval
- explanation adaptation
- WebLLM / browser-local inference
- local/server/cloud capability routing
- runtime instrumentation where justified

These are future extension points only. Phase 1 must not implement or imply that these capabilities already exist.

The conceptual phase map is:

- **Phase 1 — Product Knowledge / Deterministic Adaptive UX:** implemented and currently supports `Documentation-Driven Adaptive UX`.
- **Phase 2 — Non-chat AI capabilities:** future only; may later support `AI as a UI Capability, Not Just a Chatbot`.
- **Phase 3 — Adaptive inference runtime:** future only; may later support `Adaptive AI Runtime for Enterprise UI`.

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

The lab must also expose a compact deterministic decision trace showing the adaptive path through application state, validation, applicable authored knowledge, and response policy. This trace is explanatory instrumentation for the research demo; it is not part of the fictional product surface.

The initial deterministic slice must demonstrate compact vs expanded help, first-time-user guidance, version-specific guidance, deterministic validation, current-state-aware explanation, safe suggested action, optional preconfiguration only when the correct choice is unambiguous, and a direct Standard-versus-Adaptive comparison without changing the shared scenario.

## 4. Architectural Boundaries

The implementation must keep these concerns distinct:

1. **Domain state** — the selected Data Connection for the experience being evaluated.
2. **Runtime/user context** — surrounding product version, familiarity, and compatible connections.
3. **Application truth and validation** — deterministic requirements and available options.
4. **Product knowledge** — authored explanatory/configuration knowledge with provenance and applicability.
5. **Knowledge applicability** — whether an authored item applies to the current state.
6. **Response policy** — how strongly the UI should intervene given available evidence.
7. **UI rendering** — how structured responses are presented.

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
- UI authority should increase only as evidence becomes more deterministic.
- Phase 1 must remain deliberately small and readable.

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

A future phase may insert optional inference between deterministic context filtering and response policy, but any inferred result must be reconciled against authoritative application state before the UI acts on it.

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

A single valid candidate may be offered as a user-accepted preconfiguration. Multiple valid candidates must not be guessed among.

## 8. Hosting, Repository Scope, and Project Representation

- Repository: `orielsy/orielsy.com`
- Authoritative source branch: `main`
- Phase 1 remains inside the Orielsy.com codebase under `src/components/adaptive-ui-lab/`.
- Do not create a separate repository for the Lab at this stage.
- The implementation remains embedded in the related Research publication.
- The Projects catalog contains an unpublished `Adaptive Enterprise UI Lab` Project-in-Progress entry pointing to the actual in-repository source path rather than inventing a separate repository.
- The Project entry remains publication-gated and must not present future Phase 2 or Phase 3 work as implemented.
- Do not add a top-level Labs navigation section.

If the Lab later becomes a separately packaged artifact, moving it to its own repository would require a separate explicit decision. The current Project representation does not imply that such a repository exists.

## 9. Static-First Constraint

Phase 1 must remain fully compatible with the site's static Astro/GitHub Pages architecture.

Do not add:

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

All Phase 1 behavior should run from local TypeScript/data and client-side state where interactivity is required.

## 10. Research Integration

The first slice belongs with the existing Research entry:

`src/content/research/documentation-driven-adaptive-ux.mdx`

The Research article is not itself the architecture boundary of the application. It is the first publication surface that embeds the shared reference application.

The opening problem section may include a purpose-built explanatory visual contrasting the conventional documentation detour with an in-product adaptive path. That visual is article communication, not application state or resolver logic.

Publication remains separately gated by existing content-publication rules. The current Research publication state must be taken from its source frontmatter rather than inferred from the existence of the Lab.

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
- no AI, backend, or production deployment is introduced

## 13. Future-Phase Compatibility

Phase 1 must avoid premature abstractions, but its public boundaries should make later extension possible at these seams:

- natural-language intent → concept/relevance matching
- semantic ranking → product-knowledge selection
- explanation adaptation → response composition/depth
- inference capability → optional resolver input
- runtime selection → capability execution below the resolver

Future AI should improve ambiguity resolution and relevance selection. It must not replace deterministic application truth.
