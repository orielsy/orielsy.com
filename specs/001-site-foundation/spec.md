# Specification: Site Foundation & Information Architecture

- **Status:** Approved / Active
- **Owner:** Orielsy Diaz
- **Feature Directory:** `specs/001-site-foundation/`

---

## 1. Overview & Positioning

**orielsy.com** is the canonical personal web property for Orielsy Diaz—a Senior Frontend Engineer and UI Architect with 15+ years of experience. The site communicates the intersection of frontend architecture, interaction systems, and applied AI at the edge of the interface. Professional positioning should use established terms such as component architecture, reusable frontend patterns, frontend systems, and UI architecture; it must not describe formal design-system ownership unless Orielsy explicitly establishes that experience.

---

## 2. Navigation & Information Architecture

The current top-level navigation consists strictly of:
1. `/research` — Technical writing, architecture explorations, and system investigations.
2. `/projects` — Selected implementations, prototypes, and developer tools.
3. `/about` — Biography, engineering perspective, service history, and creative inquiries.

### Navigation Invariant:
- Do **NOT** replace `Projects` with `Work`.
- Do **NOT** expose a `Work` section in top-level navigation until sufficient real career case studies are authored.

### Homepage Focus Taxonomy

The homepage `Focus & Inquiries` strip communicates four distinct current areas and must keep their descriptions visibly readable rather than relying on hover/title or screen-reader-only copy:

1. **Context Engineering for Coding Agents** — durable repository knowledge, task-aware context selection, architectural constraints, specifications, ADRs, component contracts, and eventual targeted context delivery.
2. **Product Knowledge & Adaptive UX** — application state, authored product knowledge, deterministic validation, progressive explanation, version-aware guidance, and evidence-aware interface behavior.
3. **AI as an Interface Capability** — non-chat intelligent behavior embedded into existing interface primitives, including intent interpretation, semantic retrieval, structured extraction, contextual transformation, and adaptive guidance.
4. **Adaptive AI Runtimes** — how intelligent interface capabilities may execute across browser-local, machine-local, server, edge, or cloud tiers under capability, privacy, latency, availability, cost, and governance constraints.

`Hardware-Aware Client Interfaces` is not a separate top-level focus area; it belongs under Adaptive AI Runtimes. Product Knowledge / Documentation-Driven UX and AI-as-UI must remain separate because they represent different architectural layers.

---

## 3. Content Taxonomy Definitions

### 3.1 Research (Reasoning-First)
- **Purpose:** Long-form technical reasoning, architecture explorations, investigations, essays, and field notes.
- **Payload:** Structured arguments, system diagrams, code listings, and optional embedded proofs-of-concept.
- **Distinction:** A Research piece can contain an interactive demo without necessitating a separate Project entry. It does not imply academic or peer-reviewed publication.

### 3.2 Projects (Artifact-First)
- **Purpose:** Demonstration of concrete software artifacts, tools, desktop clients, and reference prototypes.
- **Payload:** Problem statement, architectural overview, technology stack, and direct repository/demo links.
- **Distinction:** Explains what was built and how it operates. A Project can relate to zero, one, or multiple Research explorations when genuine conceptual relationships exist.
- **Research relationships:** Project frontmatter uses `associatedResearch` as a canonical array of `/research/<stable-slug>` routes. Schema capability does not imply that relationships exist; add each relationship only when current source, implementation, or publication state justifies it. Public Project pages must not turn an unpublished Research relationship into normal public navigation.
- **Lifecycle:** A Project may be publicly navigable while its lifecycle status remains `In Progress`; publication and completion are separate concepts.

### 3.3 Work (Future Career Case Studies)
- **Status:** Deferred / Future.
- **Purpose:** Selected historical enterprise career case studies (e.g. ExxonMobil global web platform).
- **Rule:** Never force historical client work into personal Projects or Research simply because Work is not yet active.

### 3.4 About
- **Purpose:** Contextual narrative explaining career progression, UI architecture background, applied AI positioning, military service, and creative pursuits.
- **Rule:** Not a duplicate of the linear résumé.

---

## 4. Prose Width Policy

The site's typography system uses a custom `.prose` class defined in `src/styles/global.css`. Two facts govern how it interacts with Tailwind utilities:

1. **Default Cap:** `.prose` carries `max-width: 68ch` for long-form reading. This rule is unlayered and emitted after Tailwind utilities in the compiled cascade.
2. **Override Pattern:** A prose block that should fill its parent column width uses the two-class combination `prose max-w-none`. The companion rule `.prose.max-w-none { max-width: none }` resolves the override via higher specificity (0,2,0 vs 0,1,0) — the `.max-w-none` utility *alone* does not override `.prose`.

Use `prose max-w-none` on prose containers nested inside an explicit width-bounded parent (e.g. `<div class="max-w-3xl">`). Omit it when the implicit 68ch cap is desired.

---

## 5. Media & Diagram Presentation Policy

Technical architecture diagrams, workflow maps, and video demonstrations require high visual legibility. To prevent micro-details from being crushed inside narrow text columns, the site enforces the following presentation standards:

1. **Wide Breakout Containers**: Media figures (diagrams, complex tables, video players) may break out of the standard reading column width up to `max-w-5xl` to provide sufficient canvas for multi-tier system diagrams.
2. **Interactive Zoom / Lightbox**: High-resolution architecture images must use a native keyboard-operable trigger, a uniquely scoped and accessibly named modal dialog, native Escape handling, click-outside dismissal, focus restoration to the trigger after close, and a direct full-resolution link.
3. **Structured Captioning & Metadata**: Every diagram figure must include a semantic `<figcaption>` or caption bar with high-contrast metadata describing the system flow.
4. **Zero Layout Shift & Accessibility**: Video elements must specify aspect ratios (`aspect-video`) and poster thumbnails; images must provide descriptive `alt` text and `loading="lazy"`.

---

## 6. Applied-AI Research & Project Publication Family

The site should grow as a coherent publication family rather than creating a new article every time terminology changes. Research pieces own distinct questions; Projects are artifact counterparts where a substantial implementation exists.

### 6.1 Development-side progression

1. **From Prompts to Project Memory: Spec-Driven Development for Coding Agents** — published Research. Owns durable project memory: repository-resident context, `AGENTS.md` routing, constitution/spec/ADR persistence, and conversation context versus project memory.
2. **Context Engineering for Software Development** — unpublished Research draft. Begins *after* durable memory exists and asks which subset of architectural rules, component contracts, specifications, ADRs, and implementation context is relevant to the current coding task and how that context should be delivered.
3. **Repository Context Engine for Coding Agents** — unpublished Project in progress. Serves as the implementation counterpart for task-aware repository context delivery. It must remain explicitly proposed/in progress until source proves concrete capabilities.

Conceptual progression:

```text
Project Memory
→ make knowledge durable

Context Engineering
→ select the relevant durable knowledge

Repository Context Engine
→ implement / experiment with that selection and delivery
```

### 6.2 Interface-side progression

1. **Documentation-Driven Adaptive UX** — published Research and the intentional primary Featured Research entry on the homepage. It is the canonical home for product knowledge as interface context, knowledge-aware interfaces, context-aware product guidance, progressive explanatory depth, onboarding/version-aware guidance, deterministic adaptive UX, and evidence-aware response authority.
2. **AI as a UI Capability, Not Just a Chatbot** — published public Concept Draft. Owns the question **what intelligent behavior belongs directly inside the interface**, including semantic filtering, structured extraction, intent interpretation, contextual transformation, command routing, adaptive guidance, inline assistance, and intelligent UI primitives. Its next substantive evidence should come from Adaptive Enterprise UI Lab Phase 2 before the article is expanded significantly.
3. **Adaptive AI Runtime for Enterprise UI** — unpublished Research draft. Owns the separate question **how / where an already-requested capability executes**, including browser-local inference, machine-local runtimes, server/edge/cloud tiers, capability detection, fallback, privacy, latency, availability, device constraints, cost, and enterprise governance.

Do not collapse the AI-as-UI and Adaptive AI Runtime articles: one is about interface behavior; the other is about execution architecture.

Only one published Research entry should normally carry `featured: true`; currently that entry is **Documentation-Driven Adaptive UX**. Other strong Research remains visible through the Recent Research ordering rather than competing for the primary feature slot. `From Prompts to Project Memory` should remain prominent there because its publication date is among the newest published Research entries.

### 6.3 Shared reference application

**Adaptive Enterprise UI Lab** is one evolving reference application inside `orielsy.com`, represented as a **publicly navigable Project with `status: In Progress`** while its current Phase 1 implementation remains embedded in Documentation-Driven Adaptive UX.

- **Phase 1 — Product Knowledge / Deterministic Adaptive UX:** implemented. Supports Documentation-Driven Adaptive UX. Application/domain state, deterministic validation, authored product knowledge, runtime/user context, knowledge applicability, response policy, adaptive rendering, and an inspectable decision trace are implemented in the current source.
- **Phase 2 — Selective non-chat inference:** specified / beginning, not yet implemented. The first capability is natural-language intent/question mapping into known product concepts, followed by deterministic applicability filtering, application-state reconciliation, and response policy. See `specs/005-adaptive-enterprise-ui-lab/phase-2.md`.
- **Phase 3 — Adaptive inference runtime:** planned only. May later support Adaptive AI Runtime for Enterprise UI and investigate where useful inference executes.

The Lab's Project entry is expected to accumulate multiple `associatedResearch` relationships as real phases produce implementation evidence. At present, only the implemented Phase 1 relationship to `Documentation-Driven Adaptive UX` belongs in that collection. Do not add Phase 2 or Phase 3 Research relationships merely because the schema supports them or because those directions are planned.

Future phases must never be described as implemented before source exists. The Lab remains one application across these phases rather than a series of disconnected demos.

### 6.4 Umbrella and future experiment

- **AI Across the Interface Lifecycle: From Development-Time Generation to Runtime Adaptation** — unpublished umbrella Research placeholder connecting development-time agents/project memory, preparation-time structured knowledge, runtime intelligence, and execution-layer routing without replacing the focused pieces.
- **Browser-Local Inference as a UI Runtime Capability** — unpublished future Experiment subordinate to Adaptive AI Runtime. It is the future home for measured WebGPU/WebLLM browser-local work and must not contain assumed benchmarks, compatibility conclusions, or implementation claims.

### 6.5 Consolidation rules

Do **not** create separate high-level Research entries for terminology that already has a canonical home:

- **Product Knowledge as Interface Context** → Documentation-Driven Adaptive UX.
- **Knowledge-Aware Interfaces** → Documentation-Driven Adaptive UX / Adaptive Enterprise UI Lab.
- **Context-Aware Product Guidance** → Adaptive Enterprise UI Lab Phase 1.
- **Hardware-Aware Client Interfaces**, client inference tier selection, and browser capability routing → Adaptive AI Runtime, with measured browser-specific work in the future Browser-Local Inference experiment.

Research and Project counterparts must remain distinct: Research is reasoning-first; Projects are artifact-first. New overlapping articles should not be created merely because terminology changes.

The existing speech architecture Research article and **speechBubbles** Project remain a separate established Research/Project pair and are unaffected by this roadmap.


## 7. Theme & Motion Preference Policy

Theme and motion preferences are shared site-level behaviors rather than component-local scripts.

- A single shared preference controller owns theme and motion state.
- When no manual theme choice exists, the operating-system color-scheme preference determines the initial theme. A manual Day/Night choice is persisted and overrides later OS changes until the stored choice is cleared.
- When no manual motion choice exists, `prefers-reduced-motion` determines the initial motion mode.
- Auto-moving or looping presentation that continues beyond five seconds must expose a visible pause/resume mechanism without removing the designed full-motion experience for visitors who want it.
- A manual motion choice is persisted as `full` or `reduced` and exposed through the document root so motion-heavy components can share one preference.
- Reduced/paused states must preserve the information and intended presentation hierarchy in a meaningful static state rather than merely hiding the component.
- Components must not introduce competing theme or motion preference scripts when the shared controller can own the behavior.
- Day uses a dedicated page/chrome background of `#f6f2f0` for the document body and sticky header only; existing Day cards, secondary surfaces, borders, text, and accent tokens remain unchanged.
