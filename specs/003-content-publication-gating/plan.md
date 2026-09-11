# Implementation Plan: Explicit Content Publication Gating

- **Status:** Implemented
- **Feature Directory:** `specs/003-content-publication-gating/`

## 1. Technical strategy

Add fail-closed `published` and independent `draft` fields to both content collection schemas. Home-page and primary collection-page queries select published entries only, while Research and Projects collection pages separately surface unpublished summaries beneath those results. Pass publication and draft state into the card and detail-layout components so the presentation can distinguish public concept drafts from direct status routes for unpublished entries.

Published detail routes render the existing layouts normally, with a concept-draft notice when `draft: true`. Unpublished routes reuse those layouts with status-only content, suppressed metadata and links, and `noindex, nofollow` output. RSS applies the `published: true` predicate; the sitemap applies the same publication predicate.

For author review, provide `npm run dev:content`, which starts Astro development mode with `--mode content-preview`. Preview behavior is enabled only when `import.meta.env.DEV` is true and the mode is `content-preview`. In that mode, unpublished catalog cards become local review links and detail routes render the unpublished body with a visible preview notice. Normal `npm run dev` retains production-style gating. Static build and production publishing commands do not activate the preview path.

## 2. Implementation references

- Collection schema: `src/content.config.ts`
- Catalog cards: `src/components/ArticleCard.astro`, `src/components/ProjectCard.astro`
- Status presentation: `src/components/ContentStatus.astro`
- Local preview notice: `src/components/ContentPreviewNotice.astro`
- Detail layouts: `src/layouts/ArticleLayout.astro`, `src/layouts/ProjectLayout.astro`
- Detail routes: `src/pages/research/[...slug].astro`, `src/pages/projects/[...slug].astro`
- Collection routes: `src/pages/research/index.astro`, `src/pages/projects/index.astro`
- Local preview command: `package.json` → `npm run dev:content`
- RSS filtering: `src/pages/rss.xml.ts`
- Durable decision: `docs/decisions/004-content-publication-gating.md`

## 3. Verification

The publication implementation is verified by a successful static build, generated catalog counts that include published and unpublished cards, published and unpublished route inspection, and an RSS check confirming only published Research entries are emitted.

The local preview extension should additionally be verified by confirming that `npm run dev:content` links and renders unpublished bodies with the preview notice, normal `npm run dev` continues to show status-only behavior, and `npm run build` does not expose unpublished bodies.
