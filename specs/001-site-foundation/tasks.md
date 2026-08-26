# Tasks: Site Foundation & Information Architecture

- **Status:** In Progress
- **Feature Directory:** `specs/001-site-foundation/`

---

## Task Checklist

- [x] Repair dead `max-w-none` override on `.prose` containers
  - Added `.prose.max-w-none { max-width: none; }` to `src/styles/global.css` so the two-class selector wins on specificity over the unlayered `.prose { max-width: 68ch }` base rule. The `.max-w-none` utility alone does not override `.prose`; the two-class combination is the supported escape hatch.
  - Policy captured in `spec.md` § 4 (Prose Width Policy).
- [x] Verify build still succeeds and `prose max-w-none` usages (`about.astro`, `ProjectLayout.astro`, `ArticleLayout.astro`) render with the intended parent-width column.
