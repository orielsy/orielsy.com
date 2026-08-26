# Implementation Plan: Explicit Content Publication Gating

- **Status:** Implemented
- **Feature Directory:** `specs/003-content-publication-gating/`

## 1. Technical strategy

Add fail-closed `published` and independent `draft` fields to both content collection schemas. Home-page queries select published entries only, while collection-page queries retain all entries. Pass publication and draft state into the card and detail-layout components so the presentation can distinguish public concept drafts from disabled status entries.

Published detail routes render the existing layouts normally, with a concept-draft notice when `draft: true`. Unpublished routes reuse those layouts with status-only content, suppressed metadata and links, and `noindex, nofollow` output. RSS applies the `published: true` predicate; the sitemap applies the same publication predicate.

## 2. Implementation references

- Collection schema: `src/content.config.ts`
- Catalog cards: `src/components/ArticleCard.astro`, `src/components/ProjectCard.astro`
- Status presentation: `src/components/ContentStatus.astro`
- Detail layouts: `src/layouts/ArticleLayout.astro`, `src/layouts/ProjectLayout.astro`
- Detail routes: `src/pages/research/[...slug].astro`, `src/pages/projects/[...slug].astro`
- RSS filtering: `src/pages/rss.xml.ts`
- Durable decision: `docs/decisions/004-content-publication-gating.md`

## 3. Verification

The implementation is verified by a successful static build, generated catalog counts that include published and unpublished cards, published and unpublished route inspection, and an RSS check confirming only published Research entries are emitted.
