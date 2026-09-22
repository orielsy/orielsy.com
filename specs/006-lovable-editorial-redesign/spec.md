# Specification: Lovable-Inspired Editorial Redesign

- **Status:** In Progress
- **Owner:** Orielsy Diaz
- **Feature Directory:** `specs/006-lovable-editorial-redesign/`
- **Working Branch:** `redesign/lovable-editorial`

## 1. Goal

Redesign `orielsy.com` using the visual direction explored in the Lovable **AI Showcase** project while preserving the existing Astro/static-first architecture, content model, information architecture, publication workflow, theme behavior, SEO behavior, and factual/editorial source of truth.

The Lovable project is a **design prototype**, not an implementation dependency and not an authoritative content source.

The redesign should make the existing site feel more like a restrained technical publication and less like a generic developer portfolio, without rewriting Orielsy's factual story or replacing the repository's content architecture.

## 2. Source-of-Truth Hierarchy

For this redesign, authority is ordered as follows:

1. `.specify/memory/constitution.md`
2. this feature specification
3. applicable feature specs and ADRs
4. current `orielsy.com` source and content collections
5. Lovable AI Showcase, for visual reference only

When sources conflict, higher-authority sources win.

### Content authority rule

**If Lovable changes how something looks, the design may be ported freely.**

**If Lovable changes what something says, the wording must be verified against the repository before use.**

Lovable-authored prose must be treated as prototype copy only.

The redesign must not introduce new claims, professional positioning, biography language, project descriptions, metrics, dates, technologies, roles, architecture statements, outcomes, testimonials, or maturity claims merely because they appear in Lovable.

Existing factual guardrails remain binding, including the distinction between grounded terms such as:

- reusable UI components
- component architecture
- frontend patterns
- frontend systems
- UI architecture
- engineering standards

and unsupported claims such as formal design-system ownership unless separately established.

### Homepage editorial restraint

The homepage must remain **evidence-oriented rather than manifesto-oriented**.

- Do not elevate Lovable-authored perspective copy, manifesto-style statements, or broad professional philosophy into oversized homepage sections.
- In particular, do not use the large "Engineering Perspective" quote treatment from the Lovable prototype on the homepage.
- If the underlying idea already exists in authoritative About/background content, preserve it there; do not promote it into a dominant homepage statement without explicit approval.
- Homepage emphasis should remain on current research, implemented work, and grounded supporting context.

## 3. Visual Direction

The redesign should move toward an **editorial technical publication** aesthetic with architectural restraint.

Primary visual goals:

- wider editorial canvas
- large editorial hero typography
- strong hierarchy with substantial negative space
- compact monospace metadata
- thin borders and linework
- asymmetrical grid layouts
- high information density without clutter
- restrained graphite/dark technical aesthetic
- restrained blue/violet accent
- list-oriented research presentation where appropriate
- one strongly featured research item on the homepage
- one strongly featured implementation/project on the homepage
- compressed research-agenda / Current Inquiries treatment
- minimal decorative chrome
- deliberate section rhythm rather than repeated generic cards

The redesign should avoid:

- generic SaaS-card layouts
- excessive rounded containers
- gradients
- glowing AI-startup aesthetics
- repeated card grids when an editorial list or composition is stronger
- unnecessary animation
- decorative iconography without a clear functional or informational role
- oversized manifesto-style quote treatments on the homepage

Motion must remain subtle and must respect `prefers-reduced-motion`.

## 4. Typography

Typography should become a more deliberate part of the visual system while remaining maintainable and performant.

The redesign may adopt a more editorial sans/mono pairing inspired by the Lovable study, but must not introduce a frontend framework or component library to achieve it.

Typography decisions must preserve:

- readable long-form content
- semantic heading hierarchy
- accessible sizing and contrast
- fast/static-first behavior
- graceful system fallbacks

A font change may be scoped to the redesigned system if needed, but any new font asset or remote font dependency must be explicitly justified before introduction.

### Approved redesign font system

The redesign uses the same core typographic roles validated in the Lovable visual study, reduced to three families so the site does not carry an unnecessary fourth sans family:

- **Sora 500/600** for display headlines and editorial headings.
- **Manrope 400/500/600** for body text and long-form reading.
- **JetBrains Mono 400/500** for metadata, code, source labels, diagram labels, and other technical UI.

These families are loaded from Google Fonts in the shared base layout with `display=swap`, preconnects to the Google Fonts stylesheet/font hosts, and system fallbacks preserved in semantic CSS tokens. Orielsy explicitly approved this remote font dependency as part of the redesign because typography is a primary visual-system element rather than decorative page-specific styling.

Do not add Inter solely to mirror Lovable's secondary diagram-sans token; Manrope remains the general sans family unless a later demonstrated need justifies another font.

Because the font change can alter text geometry, final visual verification must explicitly review hero line wrapping, long-form readability, card/row heights, technical metadata density, and mobile overflow across the redesigned routes.

## 5. Theme Requirements

The existing light/dark theme system must be preserved.

Required behavior:

- OS preference determines the initial theme when no manual preference exists
- a manual user override remains available
- the manual preference remains persisted
- mobile and desktop theme controls remain functional
- no flash of an incorrect theme should be introduced

The Lovable study is strongest in dark mode, but production must intentionally support both themes.

The palette must be implemented through semantic theme tokens rather than hard-coding graphite colors throughout page markup.

Dark mode may be more dramatic. Light mode must still feel designed rather than mechanically inverted.

## 6. Information Architecture Preservation

The public top-level navigation remains:

- Research
- Projects
- About

The redesign must not:

- replace Projects with Work
- introduce Work into top-level navigation
- elevate Graphics Lab into first-class primary navigation without explicit approval
- change route semantics merely for visual reasons

Supporting or experimental areas may remain available without being promoted into the primary information architecture.

### Experimentation visibility

For the current phase, **orielsy.com is the only public experimentation surface**.

- Do not promote or link `bodyctrl.com` as an active lab, experimentation destination, or creative surface.
- Do not use footer copy, navigation, badges, or supporting text that implies BODYCTRL is currently active.
- BODYCTRL may remain documented as a future/distinct identity in ADR 001, but visible cross-linking is deferred until Orielsy explicitly reactivates it.
- Experimental work that is public now should be framed and surfaced within `orielsy.com` under the existing Research / Projects / supporting-experiment structure.

## 7. Content Architecture Preservation

The redesign must preserve the existing Astro content collections and current repository content as the source of truth.

Do not recreate Lovable's centralized content model.

Preserve:

- Research taxonomy
- Projects taxonomy
- published/unpublished state
- local content-preview behavior
- current routes and slugs
- content metadata
- RSS behavior
- sitemap behavior
- SEO metadata and canonical behavior
- stable detail routes

The redesign changes presentation, not content architecture.

## 8. Framework and Dependency Restrictions

This is a **visual and structural port only**.

Do not introduce:

- React
- TanStack Router
- shadcn/ui
- Radix
- Lucide React
- a new client-side UI framework
- a new component library
- framework integrations added solely to imitate Lovable

Do not convert Astro components to React.

Recreate the design using the existing stack:

- Astro components
- semantic HTML
- Tailwind/CSS
- existing minimal client-side TypeScript where interaction genuinely requires it

New dependencies must not be added unless they are strictly necessary and explicitly approved first.

The Lovable project is a visual reference, not an implementation dependency.

## 9. Refactor-in-Place Requirement

The redesign must refactor the existing site in place rather than building a parallel frontend.

Requirements:

- preserve existing routes
- reuse existing layouts/components where practical
- evolve shared tokens and layout primitives instead of duplicating page-specific style systems
- keep content collection reads in Astro
- preserve current publication and SEO boundaries
- avoid maintaining separate legacy and redesign implementations of the same public route

Visual changes may justify restructuring markup, but should not create unnecessary architectural duplication.

## 10. Responsive Requirements

The redesign must be intentionally responsive rather than simply collapsing desktop layouts.

At minimum:

- hero typography and measure must scale without clipping or awkward wraps
- wide editorial compositions must collapse into coherent single-column reading order
- navigation must remain usable on narrow screens
- theme controls must remain accessible on mobile and desktop
- Current Inquiries must remain legible without horizontal overflow
- featured Research and Project compositions must preserve hierarchy when stacked
- research lists must retain metadata/title/description scanning order
- touch targets must remain usable
- linework and section borders must not create cramped mobile layouts
- no horizontal page overflow is permitted

Responsive behavior should preserve the editorial hierarchy even when the grid changes.

## 11. Accessibility Requirements

The redesign must preserve or improve:

- semantic landmarks
- heading hierarchy
- keyboard navigation
- visible focus states
- sufficient contrast in both themes
- meaningful link text
- reduced-motion behavior
- accessible theme controls
- semantic lists for list-oriented content

Decorative visual treatments must not become required for understanding content.

## 12. Stage Plan

### Stage 1 — Foundation + Homepage

Scope:

- global width/layout system
- typography
- spacing
- semantic theme tokens
- header/navigation
- footer where needed for system consistency
- homepage redesign

The homepage should establish the visual system first.

Use the Lovable homepage composition as the primary visual reference while populating it from authoritative `orielsy.com` content.

The homepage should preserve the strengths of the Lovable composition:

- large editorial hero
- substantial negative space
- supporting copy offset from the main headline
- compact Current Inquiries strip
- featured research
- recent research
- selected implementation/project

Do not automatically adopt Lovable wording for:

- hero headline
- supporting hero copy
- section names such as "Implementation as evidence"
- manifesto-style quotes
- professional identity framing

The homepage must **not** include the large bottom "Engineering Perspective" quote treatment from the Lovable prototype.

### Stage 2 — Indexes

After Stage 1 review:

- Research index
- Projects index
- About

### Stage 3 — Detail Layouts

After the broader system is approved:

- Research article layout
- Project detail layout
- integration/refinement of existing diagrams and media

Do not redesign all routes simultaneously.

#### Research detail pattern promotion

Research-detail exemplars may reveal presentation patterns that are useful beyond one paper. Treat those patterns as candidates rather than automatically making every article visually identical.

- Promote genuinely reusable mechanics—such as reading measure, table-of-contents behavior, breakout geometry, ordinary Markdown list treatment, semantic theme integration, and shared publication rhythm—into shared layouts, styles, or primitives when they prove useful across Research entries.
- Keep paper-specific editorial choreography—such as section numbering, special subheading rails, figure-specific semantics, content-specific diagrams, and custom labels—scoped to the entry or component that needs it.
- The shared Research system should provide durable publication primitives without forcing every Research entry into one visual template.
- Promoting a visual pattern into shared infrastructure must not change the authoritative claims or meaning of the underlying Research content.
- If a redesign-era pattern proves durable beyond this feature, carry the long-lived rule into the applicable site-foundation specification during finalization rather than creating an ADR solely for presentation choreography.

#### Project relationship epilogue

Project-detail pages should present associated Research as a dedicated page-bottom relationship epilogue rather than nesting those links inside the compact Project reference block.

- Use the same editorial relationship grammar established by the Research lineage epilogue: full-width section boundary, left-side context label, and right-side accent rule with compact linked relationships.
- Use the Project-specific heading **Research basis** to describe the research that frames or underpins the implementation, rather than relabeling Project relationships as Research lineage.
- Preserve the ordering and source-of-truth relationships from each Project's `associatedResearch` frontmatter.
- Do not invent relationship semantics beyond what the Project metadata establishes. Research type may be shown as factual metadata.
- The compact header Research badge may continue to act as a shortcut, but the durable detailed relationship presentation belongs at the bottom of the Project page.

## 13. Existing Stage 1 Work

At the time this spec was created, an initial Stage 1 implementation already existed on `redesign/lovable-editorial`.

That implementation is not the specification.

It must be reviewed against this document before further redesign work proceeds. Any conflict between the existing Stage 1 diff and this spec must be resolved in favor of the spec.

## 14. Production and Branch Safety

- Source branch: `main`
- Working branch for this feature: `redesign/lovable-editorial`
- Do not modify `main` directly
- Do not merge without explicit approval
- Do not run `npm run live` from this branch
- Do not publish production from this branch

Manual production publishing remains governed by ADR 003 and may only occur deliberately from `main`.

## 15. Non-Goals

This redesign does not authorize:

- rewriting Orielsy's biography or professional positioning
- changing the Research/Projects taxonomy
- introducing a new CMS or centralized content store
- changing publication gating
- changing deployment architecture
- introducing React or a component framework
- promoting Graphics Lab into primary navigation
- promoting BODYCTRL as an active public destination
- broad animation or motion-system work
- redesigning every route in Stage 1
- inventing new research/project content to fill the new composition
- introducing a manifesto-style homepage statement simply because it appeared in Lovable

## 16. Acceptance Criteria

### Stage 1 acceptance

Stage 1 is ready for review when:

- the homepage uses the wider editorial layout system
- hero composition clearly reflects the new editorial visual direction
- homepage content still comes from authoritative repository content
- one published Research item is given a strong featured treatment without fabricating copy
- remaining published Research is presented in a list-oriented editorial treatment
- one published Project is given a strong featured treatment without fabricating copy
- Current Inquiries is presented in a compressed, scannable format using existing authoritative wording
- no oversized manifesto/"Engineering Perspective" quote section appears on the homepage
- header preserves Research / Projects / About and does not promote Graphics Lab
- footer and other global surfaces do not promote BODYCTRL as an active destination
- public experimentation visible in the redesign is contained within `orielsy.com`
- the existing theme behavior still works in light and dark modes
- semantic theme tokens drive the redesigned palette
- desktop and mobile layouts are intentionally composed and free of horizontal overflow
- no React, TanStack Router, shadcn/ui, Radix, Lucide React, or new UI framework/library is added
- no content collection, route, slug, SEO, RSS, sitemap, or publication-gating behavior is changed
- no unsupported professional or technical claims are introduced
- existing Stage 1 implementation has been checked against this spec
- the production build succeeds before merge approval, or any environment blocker is recorded explicitly

### Full redesign acceptance

The feature is complete when:

- Stage 1 has been reviewed and approved
- Research, Projects, and About indexes use the approved visual system
- Research and Project detail layouts use the approved visual system
- existing diagrams/media remain legible and accessible
- light and dark themes are coherent across redesigned routes
- mobile layouts preserve hierarchy and usability across redesigned routes
- content architecture and publication behavior remain unchanged
- SEO and stable URL behavior remain unchanged
- all factual copy remains traceable to authoritative repository sources or separately approved edits
- no prohibited framework/dependency additions have been introduced
- BODYCTRL remains unpromoted until explicitly reactivated
- final branch diff has been reviewed for unrelated changes
- merge and production publication occur only after explicit approval
