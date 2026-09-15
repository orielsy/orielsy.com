# Decision: Explicit Content Publication Gating

- **Status:** Accepted
- **Date:** 2026-08-26
- **Specification:** `specs/003-content-publication-gating/`

## Decision

Full Research and Project entry content is public only when its frontmatter explicitly sets `published: true`. The schema defaults this field to `false`, so new content remains disabled until it has been reviewed and deliberately enabled. A separate `draft` field identifies content that is intentionally public while still being ideated.

## Public behavior

Published entries, including public concept drafts with `draft: true`, appear as active cards on the home page and Research and Projects listings, in the Research RSS feed, and on their normal detail routes. Public concept drafts add a `Concept Draft` badge and an explanation that the idea was quickly jotted down and is being developed in public.

Unpublished entries are omitted from the home page and RSS. Research and Projects listings show them as status-interactive cards in separate in-progress sections beneath the published entries, without presenting them as finished work. Activating a card reveals an inline message explaining that the entry is not published yet, without navigating to unfinished body content. Their stable direct routes remain available as noindex status pages that show the same progress state without rendering unfinished body content, metadata, or promotional links.

The `status` field remains a lifecycle label for the work. It is not a substitute for the publication gate or the public-draft maturity label. A Project may therefore be both `published: true` and `status: "In Progress"`: public means its current artifact/case-study state is intentionally navigable, not that the project is complete. `published: false` always takes precedence over `draft: true`; such entries render status-only pages.

## Local author preview

Unpublished source content must be reviewable locally without temporarily changing `published: false` to `true`.

The repository therefore provides `npm run dev:content`, which starts Astro in a dedicated `content-preview` development mode. Only when both development mode and this explicit preview mode are active may unpublished Research and Project cards link to their detail routes and render their full body content.

Previewed unpublished pages display a prominent `Local Preview · Not Published` notice. This mode does not alter frontmatter, RSS, sitemap inclusion, production publication state, or the normal `npm run dev` experience.

The preview path must remain impossible to activate through ordinary production commands. `npm run build` and `npm run live` continue to use normal publication gating.

## Current classification

As of the site-focus / Adaptive Lab update:

- **Published Research:** `From Prompts to Project Memory: Spec-Driven Development for Coding Agents`; `Documentation-Driven Adaptive UX`; `Architecture Notes: Audio Chunking, Transcription Filtering, and Real-Time Speech UI Systems`; and the public Concept Draft `AI as a UI Capability, Not Just a Chatbot`.
- **Published Projects:** `speechBubbles: Real-Time AI Broadcast Overlay & Captioning Engine`; and `Adaptive Enterprise UI Lab`, which remains explicitly `In Progress` while exposing its implemented Phase 1 and clearly separating planned Phase 2/3 work.
- **Unpublished Research / Research in Progress:** `Context Engineering for Software Development`; `Adaptive AI Runtime for Enterprise UI`; `AI Across the Interface Lifecycle: From Development-Time Generation to Runtime Adaptation`; and `Browser-Local Inference as a UI Runtime Capability`.
- **Unpublished Projects / Projects in Progress:** `Repository Context Engine for Coding Agents`.

These classifications are descriptive of current source state, not a substitute for frontmatter. Frontmatter remains authoritative for publication behavior.

## Reasoning

- Visitors should see authored work rather than placeholder or generated filler.
- New entries should fail closed instead of becoming public accidentally.
- Authors can share early ideas transparently without misrepresenting them as finished work.
- Inline card notices and direct links can communicate that work is in progress without exposing unfinished material.
- Search engines should not index unpublished status pages.
- Local author review should not require mutating publication state, because temporary frontmatter changes are easy to commit accidentally and make production state harder to reason about.
- Publication state and project lifecycle are separate concerns: a real, inspectable project can be publicly navigable while remaining actively in development.

## Future

When an entry is ready for public ideation, set `published: true` and `draft: true`. Remove `draft: true` when the entry is mature enough to present without the concept-draft notice. Keep `published: false` for ideas that should remain status-only. If the publication model changes, update this decision and the collection schemas together.
