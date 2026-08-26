# Specification: Site Foundation & Information Architecture

- **Status:** Approved / Active
- **Owner:** Orielsy Diaz
- **Feature Directory:** `specs/001-site-foundation/`

---

## 1. Overview & Positioning

**orielsy.com** is the canonical personal web property for Orielsy Diaz—a Senior Frontend Engineer and UI Architect with 15+ years of experience. The site communicates the intersection of frontend architecture, interaction systems, and applied AI at the edge of the interface.

---

## 2. Navigation & Information Architecture

The current top-level navigation consists strictly of:
1. `/research` — Technical writing, architecture explorations, and system investigations.
2. `/projects` — Selected implementations, prototypes, and developer tools.
3. `/about` — Biography, engineering perspective, service history, and creative inquiries.

### Navigation Invariant:
- Do **NOT** replace `Projects` with `Work`.
- Do **NOT** expose a `Work` section in top-level navigation until sufficient real career case studies are authored.

---

## 3. Content Taxonomy Definitions

### 3.1 Research (Reasoning-First)
- **Purpose:** Long-form technical reasoning, architecture explorations, investigations, essays, and field notes.
- **Payload:** Structured arguments, system diagrams, code listings, and optional embedded proofs-of-concept.
- **Distinction:** A Research piece can contain an interactive demo without necessitating a separate Project entry. It does not imply academic or peer-reviewed publication.

### 3.2 Projects (Artifact-First)
- **Purpose:** Demonstration of concrete software artifacts, tools, desktop clients, and reference prototypes.
- **Payload:** Problem statement, architectural overview, technology stack, and direct repository/demo links.
- **Distinction:** Explains what was built and how it operates. A Project can link to an associated Research exploration when deep conceptual background exists.

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
2. **Interactive Zoom / Lightbox**: High-resolution architecture images must support click-to-expand / lightbox viewing with keyboard escape handling, click-outside dismissal, and a direct full-resolution link.
3. **Structured Captioning & Metadata**: Every diagram figure must include a semantic `<figcaption>` or caption bar with high-contrast metadata describing the system flow.
4. **Zero Layout Shift & Accessibility**: Video elements must specify aspect ratios (`aspect-video`) and poster thumbnails; images must provide descriptive `alt` text and `loading="lazy"`.
