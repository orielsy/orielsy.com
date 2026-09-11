# Specification: Explicit Content Publication Gating

- **Status:** Implemented
- **Owner:** Orielsy Diaz
- **Feature Directory:** `specs/003-content-publication-gating/`

## 1. Goal

Keep authored Research and Project content visible in the appropriate catalogs without exposing unfinished body content as public work. Support public concept drafts separately from entries that remain status-only. New entries must fail closed until they are deliberately reviewed and published. Provide an explicit local-only preview path so unpublished bodies can be reviewed without editing publication frontmatter.

## 2. Requirements

### 2.1 Publication flag

- Research and Project collections must expose a boolean `published` field.
- The default value must be `false`.
- Research and Project collections must expose a boolean `draft` field.
- The default value must be `false`.
- Lifecycle fields such as Research `status` and Project `status` must not replace the publication gate.
- `published: false` must take precedence over `draft: true`.

### 2.2 Catalog behavior

- The home listing must include published entries only.
- Research and Projects collection listings must place published entries in the primary results section and may show unpublished entries in a separate in-progress section beneath it.
- Published entries must render active links to their detail routes.
- Published entries with `draft: true` must render a `Concept Draft` badge and public-ideation explanation.
- Unpublished Research and Project entries must render status-interactive summary cards in the separate in-progress section, without presenting them as published work. Activating a card may reveal an inline not-yet-published message, but must not navigate to unfinished body content.

### 2.3 Detail-route behavior

- Published routes must render their normal metadata, body content, and navigation.
- Unpublished routes must remain stable and directly addressable as status pages.
- Unpublished routes must show progress status without rendering unfinished body content or promotional links.
- Unpublished routes must emit `noindex, nofollow` metadata.
- Omitting the publication prop at the layout boundary must not make content public.

### 2.4 Distribution behavior

- RSS must contain Research entries with `published: true`, including public concept drafts.
- Publication status must not remove entries from the source collection or direct status routes.

### 2.5 Local unpublished-content preview

- The repository must provide an explicit local development command for reviewing unpublished Research and Project bodies without changing `published: false` frontmatter.
- The preview path must be active only when both Astro development mode and the dedicated content-preview mode are active.
- A production build, including `npm run build` and `npm run live`, must not render unpublished bodies through the preview mechanism.
- In local content-preview mode, unpublished cards in Research and Projects in-progress sections may link to their detail routes.
- Previewed unpublished detail pages must show a prominent local-preview notice stating that the content is not published and that production publication state is unchanged.
- Normal `npm run dev` must continue to exercise the real publication-gated behavior so the production experience remains testable locally.

## 3. Non-goals

- This feature does not delete or archive unfinished source entries.
- This feature does not introduce authentication or private remote preview access.
- This feature does not change the Research/Projects taxonomy.
- Local preview mode does not change source publication state and is not a deployment mechanism.

## 4. Acceptance criteria

- New entries default to unpublished.
- The home page shows only published entries.
- Collection pages show published entries with the correct enabled or concept-draft presentation.
- Activating an unpublished collection card in normal mode reveals an inline status message without navigating or exposing unfinished body content.
- Published concept-draft detail routes render their body with the public-ideation explanation.
- Published detail routes retain full content.
- Unpublished detail routes contain status messaging only and are not indexable in normal mode.
- RSS excludes unpublished Research.
- `npm run dev:content` allows local navigation from unpublished catalog cards to full unpublished Research and Project bodies.
- Local preview pages visibly identify themselves as unpublished previews.
- `npm run dev` preserves normal gating, and production build/publishing commands cannot activate the local preview path.
