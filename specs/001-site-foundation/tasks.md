# Tasks: Site Foundation & Information Architecture

- **Status:** Completed
- **Feature Directory:** `specs/001-site-foundation/`

---

## Task Checklist

- [x] Repair dead `max-w-none` override on `.prose` containers
  - Added `.prose.max-w-none { max-width: none; }` to `src/styles/global.css` so the two-class selector wins on specificity over the unlayered `.prose { max-width: 68ch }` base rule. The `.max-w-none` utility alone does not override `.prose`; the two-class combination is the supported escape hatch.
  - Policy captured in `spec.md` § 4 (Prose Width Policy).
- [x] Verify build still succeeds and `prose max-w-none` usages (`about.astro`, `ProjectLayout.astro`, `ArticleLayout.astro`) render with the intended parent-width column.
- [x] Implement interactive image zoom / lightbox and wide media breakout for architecture diagrams (§ 5)
  - Created `DiagramFigure.astro` component with modal zoom, keyboard escape, click-outside dismissal, and full-res raw PNG link.
  - Added `.media-breakout` utilities in `src/styles/global.css` allowing figures and video players to expand cleanly on wide viewports.
  - Applied to speechBubbles architecture and streaming-pipeline diagrams; verified build and responsiveness.
- [x] Harden diagram zoom accessibility after the September 2026 accessibility audit
  - Replaced the clickable diagram `<div>` with a native button trigger.
  - Scoped each lightbox to its own figure instead of repeating document IDs.
  - Added an accessible dialog name, focus-on-open behavior, native Escape dismissal, and focus restoration.
- [x] Consolidate theme preference behavior and add a shared motion preference
  - Moved theme interaction ownership into the shared layout preference controller and removed the competing component script.
  - Preserve OS-derived theme/motion defaults when no manual preference exists.
  - Persist explicit motion pause/resume choice without suppressing the default full-motion presentation.
  - Added a visible pause/resume control to the speechBubbles archive preview and a meaningful static reduced-motion state.
- [x] Add an explicit on-accent foreground token so dark-mode accent surfaces do not rely on white text when contrast is insufficient.

## EMR Records (Engineering Decisions With Reasoning)

### 2026-08-26: Replacing raw `<a class="...">` inside `<Callout>` slots with markdown link syntax

**Decision**: Use Markdown `[text](/url)` syntax inside component slots (such as `<Callout>`) rather than nesting raw HTML `<a>` tags with explicit class attributes.

**Reasoning**: Astro's MDX compiler expects either fully-formed JSX expressions or pure markdown content within a component slot. Mixing raw HTML anchor tags with class attributes inside a slot can introduce ambiguous AST parsing paths and surface as `UnknownContentCollectionError` at `content/runtime.js:436:33`. Markdown links render through the same prose pipeline regardless of nesting depth, so the runtime constraint becomes simpler. The visual styling for the link is preserved (or amplified) through the surrounding `.prose a` rules in `src/styles/global.css`.
