# Decision: Explicit Content Publication Gating

- **Status:** Accepted
- **Date:** 2026-08-26
- **Specification:** `specs/003-content-publication-gating/`

## Decision

Full Research and Project entry content is public only when its frontmatter explicitly sets `published: true`. The schema defaults this field to `false`, so new content remains disabled until it has been reviewed and deliberately enabled. A separate `draft` field identifies content that is intentionally public while still being ideated.

## Public behavior

Published entries, including public concept drafts with `draft: true`, appear as active cards on the home page and Research and Projects listings, in the Research RSS feed, and on their normal detail routes. Public concept drafts add a `Concept Draft` badge and an explanation that the idea was quickly jotted down and is being developed in public.

Unpublished entries are omitted from the home page and RSS. Research and Projects listings show them as non-clickable cards in separate in-progress sections beneath the published entries, without presenting them as finished work. Their stable direct routes remain available as noindex status pages that show the same progress state without rendering unfinished body content, metadata, or promotional links.

The `status` field remains a lifecycle label for the work. It is not a substitute for the publication gate or the public-draft maturity label. `published: false` always takes precedence over `draft: true`; such entries render status-only pages.

## Current classification

The AI-as-UI essay is a public concept draft. The real-time speech architecture article and speechBubbles project are published without the draft label. The context-engineering note and specification-driven note, along with the Adaptive AI Runtime, Documentation-Driven Adaptive UX, and Repository Context Engine entries, remain unpublished because their content is not yet polished enough to present as public work or identifies them as conceptual placeholders or active-development case studies. They may appear as non-clickable summaries in the collection pages' in-progress sections.

## Reasoning

- Visitors should see authored work rather than placeholder or generated filler.
- New entries should fail closed instead of becoming public accidentally.
- Authors can share early ideas transparently without misrepresenting them as finished work.
- Direct links can communicate that work is in progress without exposing unfinished material.
- Search engines should not index unpublished status pages.

## Future

When an entry is ready for public ideation, set `published: true` and `draft: true`. Remove `draft: true` when the entry is mature enough to present without the concept-draft notice. Keep `published: false` for ideas that should remain status-only. If the publication model changes, update this decision and the collection schemas together.
