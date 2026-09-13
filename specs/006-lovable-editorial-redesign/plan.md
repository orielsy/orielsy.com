# Implementation Plan: Lovable-Inspired Editorial Redesign

- **Status:** In Progress
- **Feature Directory:** `specs/006-lovable-editorial-redesign/`
- **Working Branch:** `redesign/lovable-editorial`

## 1. Approach

1. Treat `spec.md` as the redesign source of truth.
2. Preserve Astro, Content Collections, publication gating, SEO, manual publishing, and the existing theme mechanism.
3. Treat Lovable AI Showcase as a visual/compositional reference only.
4. Preserve repository-authored content unless a copy change is separately reviewed and approved.
5. Refactor existing shared layout/styles/components in place instead of creating a parallel frontend.
6. Implement the redesign incrementally: homepage foundation first, then indexes, then detail layouts.
7. Keep the implementation static-first and dependency-neutral.
8. Verify responsive behavior and both themes at each stage before moving on.
9. Do not merge or publish without explicit approval.

## 2. Stage 1 — Foundation + Homepage

Primary implementation surfaces:

```text
src/styles/global.css
src/layouts/BaseLayout.astro
src/components/Header.astro
src/components/Footer.astro
src/components/ThemeToggle.astro
src/pages/index.astro
```

Stage 1 should establish:

- wider editorial page-width primitives
- typography hierarchy
- semantic light/dark palette tokens
- spacing rhythm
- restrained borders/linework
- revised header/navigation treatment
- responsive homepage hero
- compressed Current Inquiries strip
- featured Research treatment
- editorial recent-Research list
- featured Project treatment
- restrained About/Perspective entry

The current Stage 1 implementation predates the feature spec. Before additional design work, compare that diff against the specification and correct any conflict.

## 3. Stage 2 — Public Indexes

Only after Stage 1 approval:

```text
src/pages/research/index.astro
src/pages/projects/index.astro
src/pages/about.astro
```

Related shared presentation components may be refactored if needed, but content architecture must remain unchanged.

Stage 2 should extend the approved editorial system rather than invent a new per-page design language.

## 4. Stage 3 — Detail Layouts

Only after Stage 2 review:

```text
src/layouts/ArticleLayout.astro
src/layouts/ProjectLayout.astro
```

and only the supporting components/styles necessary to integrate existing article/project media, diagrams, callouts, and metadata into the approved visual system.

Do not rewrite article/project bodies as part of layout work.

## 5. Content Handling

For every ported Lovable section:

1. identify the visual pattern
2. identify the Lovable copy occupying that pattern
3. locate the corresponding authoritative repository content
4. populate the pattern with repository content
5. if no authoritative counterpart exists, omit the copy or flag it for review

Do not silently translate attractive prototype prose into production claims.

## 6. Theme Implementation

Continue using the existing class-based dark mode and persisted preference mechanism.

Use semantic variables for the redesigned visual system. Shared page markup should reference semantic tokens rather than embed mode-specific color values.

Light and dark variants should be reviewed independently.

## 7. Responsive Implementation

Design mobile and desktop as related compositions rather than relying only on automatic stacking.

Check at minimum:

- narrow mobile
- wide mobile / small tablet
- desktop
- wide desktop

Verify hierarchy, wrapping, overflow, touch targets, navigation, metadata density, and featured-content ordering.

## 8. Dependency Guardrail

Do not add dependencies as part of this redesign unless explicitly approved.

Specifically prohibited without a separate approved architectural change:

- React
- TanStack Router
- shadcn/ui
- Radix
- Lucide React
- new UI/component frameworks

Use Astro, HTML, CSS/Tailwind, and minimal existing-style client TypeScript.

## 9. Verification

At each stage:

- compare branch against `main`
- verify only intended files changed
- run `npm run build` where execution access permits
- record environment blockers instead of claiming unexecuted verification
- verify no new dependency/framework additions
- verify publication/content/SEO architecture is unchanged
- verify both themes
- verify mobile behavior
- confirm no merge or production publish occurred

## 10. Completion Sequence

```text
specification
    ↓
plan
    ↓
tasks
    ↓
Stage 1 implementation + review
    ↓
Stage 2 implementation + review
    ↓
Stage 3 implementation + review
    ↓
full diff/build/accessibility/content verification
    ↓
explicit merge approval
    ↓
explicit production publication from main
```
