# Decision: Explicit Content Publication Gating

- **Status:** Accepted
- **Date:** 2026-08-26
- **Specification:** `specs/003-content-publication-gating/`

## Decision

Full Research and Project entry content is public only when its frontmatter explicitly sets `published: true`. The schema defaults this field to `false`, so new content remains disabled until it has been reviewed and deliberately enabled.

## Public behavior

Published entries appear as active cards on the home page and Research and Projects listings, in the Research RSS feed, and on their normal detail routes.

Unpublished entries remain visible in the home page and Research and Projects listings as disabled cards labeled “Research in Progress” or “Project in Progress”; they are excluded from RSS. Their stable direct routes remain available as noindex status pages that show the same progress state without rendering unfinished body content, metadata, or promotional links.

The `status` field remains a lifecycle label for the work. It is not a substitute for the publication gate.

## Current classification

The authored AI-as-UI essay, context-engineering note, specification-driven note, real-time speech architecture article, and speechBubbles project are published. The Adaptive AI Runtime, Documentation-Driven Adaptive UX, and Repository Context Engine entries remain unpublished because their content identifies them as conceptual placeholders or active-development case studies.

## Reasoning

- Visitors should see authored work rather than placeholder or generated filler.
- New entries should fail closed instead of becoming public accidentally.
- Direct links can communicate that work is in progress without exposing unfinished material.
- Search engines should not index unpublished status pages.

## Future

When an entry is ready, set `published: true` only after its content and claims have been reviewed. If the publication model changes, update this decision and the collection schemas together.
