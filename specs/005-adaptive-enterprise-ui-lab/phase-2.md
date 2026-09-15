# Specification: Adaptive Enterprise UI Lab — Phase 2 Intent Mapping

- **Status:** Specified / Implementation Deferred
- **Owner:** Orielsy Diaz
- **Feature Directory:** `specs/005-adaptive-enterprise-ui-lab/`
- **Depends on:** Phase 1 deterministic resolver and authored product-knowledge architecture

## 1. Goal

Phase 2 introduces the Lab's first selective non-chat inference capability without replacing the deterministic architecture established in Phase 1.

The first capability is **natural-language intent / question mapping** for the existing Data Connection scenario.

Example user question:

> Why can't this workflow connect anymore?

The inference layer may interpret that question as referring to the Data Connection / connectivity / configuration concept. That interpretation is only a candidate semantic mapping. It is not permission to invent product facts, choose a configuration value, override validation, or bypass application state.

## 2. Why Inference Is Needed

Phase 1 already handles known application truth deterministically: configuration state, product version, compatible connections, validation, authored knowledge applicability, and response authority.

Natural language introduces ambiguity that those rules do not resolve by themselves. Different phrasings can refer to the same product concept without containing the exact field or documentation terminology. Phase 2 uses inference only to reduce that ambiguity and identify candidate product concepts.

A deterministic keyword table may be useful as a test fixture or fallback, but it must not be presented as the Phase 2 AI capability.

## 3. Architectural Pipeline

```text
user question
      ↓
intent / concept interpretation          ← optional inference
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

Application truth remains authoritative before and after inference.

## 4. What Remains Deterministic

Inference must not replace or redefine:

- configuration state
- required-field validation
- permissions
- compatibility rules
- product/version truth
- available Data Connections
- known business rules
- authored knowledge applicability constraints
- response-authority policy
- the rule that multiple valid candidates must not be guessed among

The existing Phase 1 resolver boundaries remain the source of truth for these concerns.

## 5. Authoritative Data Sources

Phase 2 may reason only over structured input derived from the current Lab architecture:

- the user's natural-language question
- the set of known product concepts available for interpretation
- current product version
- current Data Connection selection
- compatible Data Connections
- deterministic validation output
- approved authored product-knowledge records and their provenance/applicability metadata

The model must not generate new release-note facts, product rules, connection compatibility, version behavior, or configuration values.

## 6. Model / Input Boundary

The inference boundary should be deliberately narrow. It should receive enough information to map the user's words to known product concepts, but it should not receive authority to compose final product behavior.

Conceptual input:

```ts
interface IntentMappingInput {
  question: string;
  candidateConcepts: Array<{
    id: string;
    label: string;
    shortDescription: string;
  }>;
}
```

Runtime selection, model loading, remote API selection, WebLLM, and fallback execution are not part of this Phase 2 specification. Those belong to Phase 3 unless a later explicit decision establishes a minimal execution mechanism.

## 7. Expected Structured Output

Inference output must be structured rather than freeform product advice.

Conceptual output:

```ts
interface IntentMappingResult {
  candidateConceptIds: string[];
  confidence: 'low' | 'medium' | 'high';
  unresolved: boolean;
}
```

The model does not return final UI copy, configuration changes, validation results, or executable actions as authoritative output.

## 8. Evidence Reconciliation

Candidate concepts returned by inference must pass back through deterministic application logic.

For each candidate concept, the application should:

1. resolve authored knowledge records associated with that concept;
2. apply version, audience, and state applicability rules;
3. reconcile against deterministic validation and current configuration;
4. discard guidance contradicted by current application truth;
5. pass the surviving evidence into response policy;
6. render only the response authority supported by that evidence.

An inferred concept with no applicable authored evidence must not cause the system to fabricate an explanation.

## 9. Response-Policy Interaction

Inference may improve relevance selection, but it does not increase response authority by itself.

Response authority continues to come from deterministic evidence. Inference can help identify *which* known concept the user is asking about; validation, state, compatibility, and authored product knowledge determine *what the interface may safely say or do*.

## 10. Failure and Fallback Behavior

The interface must fail safely when intent mapping is unavailable or uncertain.

- If inference is unavailable, Phase 1 deterministic behavior remains fully functional.
- If the result is unresolved or low-confidence, the interface should avoid asserting a product explanation as though the intent were known.
- If multiple concepts remain plausible, the interface may ask for a narrower selection or expose deterministic help rather than guess.
- If inferred concepts conflict with application truth, application truth wins and the inferred result is discarded.
- A model/runtime failure must not break configuration, validation, or the standard Phase 1 adaptive behavior.

## 11. Model Decisions Explicitly Forbidden

The inference layer must not decide:

- whether a Data Connection is required
- whether a connection is compatible
- which connection should be selected when multiple valid options exist
- which product version is active
- whether validation passes
- user permissions
- destructive or state-changing actions
- product policy
- release-note truth
- whether a runtime tier should be browser-local, machine-local, server, edge, or cloud

## 12. Demo Acceptance Shape

A future working Phase 2 slice should prove value inside the existing enterprise interface, not in a chatbot or chat drawer.

Minimum demonstration:

1. The Data Connection scenario remains visible and functional exactly as Phase 1 requires.
2. A compact natural-language question input is available in the adaptive experience.
3. A question such as “Why can't this workflow connect anymore?” can produce a structured candidate mapping to the known Data Connection concept through genuine inference.
4. The inferred candidate is visibly reconciled against current version, validation, options, and authored knowledge.
5. The final explanation changes appropriately when deterministic scenario state changes.
6. The decision trace distinguishes inferred interpretation from deterministic evidence.
7. Disabling or failing the inference capability leaves Phase 1 behavior intact.

## 13. What Is Deferred to Phase 3

Phase 2 does not solve where inference executes.

Deferred runtime questions include:

- WebLLM and browser-local model execution
- machine-local inference
- server / edge / cloud inference
- capability detection
- runtime selection
- model download/caching
- performance and memory measurement
- fallback between execution tiers
- runtime instrumentation

Those questions belong to **Adaptive AI Runtime for Enterprise UI** and Lab Phase 3.

## 14. Current Implementation Decision

The repository currently contains the deterministic Astro/TypeScript Phase 1 implementation but no genuine inference runtime integration. Implementing intent inference now would require choosing and introducing an execution mechanism, which would prematurely couple Phase 2 capability design to the Phase 3 runtime problem.

Therefore this task stops at the Phase 2 contract. No fake AI implementation, keyword matcher presented as AI, remote API, WebLLM runtime, or generic chatbot is introduced.

`AI as a UI Capability, Not Just a Chatbot` should gain its next substantive evidence from a real implementation of this Phase 2 contract before that Research article is expanded significantly.
