# Implementation Plan: Explicit Content Publication Gating

- **Status:** Implemented
- **Feature Directory:** `specs/003-content-publication-gating/`

## 1. Technical strategy

Add a fail-closed `published` field to both content collection schemas. Keep all entries in catalog queries, and pass publication state into the card and detail-layout components so the presentation can distinguish disabled status from missing content.

Published detail routes render the existing layouts normally. Unpublished routes reuse those layouts with status-only content, suppressed metadata and links, and `noindex, nofollow` output. RSS applies the same publication predicate used by the route and catalog behavior.

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
