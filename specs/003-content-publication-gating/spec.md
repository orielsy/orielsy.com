# Specification: Explicit Content Publication Gating

- **Status:** Implemented
- **Owner:** Orielsy Diaz
- **Feature Directory:** `specs/003-content-publication-gating/`

## 1. Goal

Keep authored Research and Project content visible in the catalog without exposing unfinished body content as public work. New entries must fail closed until they are deliberately reviewed and published.

## 2. Requirements

### 2.1 Publication flag

- Research and Project collections must expose a boolean `published` field.
- The default value must be `false`.
- Lifecycle fields such as Research `status` and Project `status` must not replace the publication gate.

### 2.2 Catalog behavior

- Home, Research, and Projects listings must include both published and unpublished entries.
- Published entries must render active links to their detail routes.
- Unpublished Research entries must render a disabled card labeled `Research in Progress`.
- Unpublished Project entries must render a disabled card labeled `Project in Progress`.
- Unpublished cards must not expose detail, repository, or demo links.

### 2.3 Detail-route behavior

- Published routes must render their normal metadata, body content, and navigation.
- Unpublished routes must remain stable and directly addressable as status pages.
- Unpublished routes must show progress status without rendering unfinished body content or promotional links.
- Unpublished routes must emit `noindex, nofollow` metadata.
- Omitting the publication prop at the layout boundary must not make content public.

### 2.4 Distribution behavior

- RSS must contain published Research entries only.
- Publication status must not remove entries from the source collection or catalog counts.

## 3. Non-goals

- This feature does not delete or archive unfinished source entries.
- This feature does not introduce authentication or private preview access.
- This feature does not change the Research/Projects taxonomy.

## 4. Acceptance criteria

- New entries default to unpublished.
- Catalog pages show all entries with the correct enabled or disabled presentation.
- Published detail routes retain full content.
- Unpublished detail routes contain status messaging only and are not indexable.
- RSS excludes unpublished Research.
