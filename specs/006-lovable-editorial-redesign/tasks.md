# Tasks: Lovable-Inspired Editorial Redesign

- **Status:** In Progress
- **Feature Directory:** `specs/006-lovable-editorial-redesign/`
- **Working Branch:** `redesign/lovable-editorial`

## Stage 0 — Specification and Guardrails

- [x] Create durable redesign feature specification.
- [x] Define content-authority hierarchy.
- [x] Define Lovable as visual reference only.
- [x] Define framework/dependency prohibitions.
- [x] Define refactor-in-place requirement.
- [x] Define responsive and theme requirements.
- [x] Define staged implementation sequence.
- [x] Define Stage 1 and full-feature acceptance criteria.
- [x] Create implementation plan.
- [x] Create task ledger.

## Stage 1 — Foundation + Homepage

Existing implementation predates this feature spec and must now be audited against it.

- [x] Create `redesign/lovable-editorial` from latest `main`.
- [x] Review latest Lovable AI Showcase visual reference.
- [x] Review repository Constitution, Site Foundation spec/plan/tasks, publication gating, taxonomy ADR, and manual-publishing ADR.
- [x] Implement initial wider editorial layout system.
- [x] Implement initial semantic light/dark palette refinements.
- [x] Refine header/navigation without promoting Graphics Lab.
- [x] Refine footer to match editorial system.
- [x] Redesign homepage composition using authoritative repository content.
- [x] Audit existing Stage 1 homepage source against `spec.md`.
- [x] Confirm no Lovable prototype copy replaced authoritative homepage wording unintentionally.
- [x] Confirm featured Research selection uses authoritative collection metadata/content.
- [x] Confirm featured Project selection uses authoritative collection metadata/content.
- [x] Verify Current Inquiries uses repository-authored wording.
- [ ] Verify both light and dark themes visually.
- [ ] Verify mobile layout intentionally preserves hierarchy.
- [ ] Verify no horizontal overflow at supported viewport ranges.
- [ ] Verify focus states and keyboard navigation.
- [ ] Verify reduced-motion behavior where motion exists.
- [x] Verify no prohibited dependency/framework additions in the redesign diff to date.
- [ ] Run `npm run build` when execution environment permits.
- [ ] Review Stage 1 branch diff against `main` for unrelated changes.
- [ ] Obtain explicit Stage 1 design approval before finalizing Stage 1.

## Stage 2 — Indexes

Orielsy explicitly authorized proceeding with the indexes before the detail-page exemplar.

- [x] Redesign Research index using the approved editorial system.
- [x] Preserve published/unpublished and local-preview behavior in source.
- [x] Redesign Projects index using the approved editorial system.
- [x] Preserve Projects taxonomy and metadata behavior in source.
- [x] Redesign About presentation without rewriting factual/professional content; remove inactive BODYCTRL promotion per current redesign policy.
- [ ] Verify responsive behavior across all three routes.
- [ ] Verify light/dark theme consistency.
- [ ] Run build and diff verification.
- [x] Obtain explicit Stage 2 approval before Stage 3.

## Stage 3 — Detail Layouts

Stage 2 was explicitly approved by Orielsy. Begin with the published `documentation-driven-adaptive-ux` research paper as the reference implementation for the Research detail system.

- [x] Redesign Research detail layout in source.
- [x] Preserve article publication/noindex/local-preview behavior in the shared route/layout architecture.
- [x] Preserve long-form prose readability with a centered reading measure and wider editorial shell.
- [x] Preserve and integrate existing wide diagram/demo breakouts within the centered reading system.
- [x] Use `documentation-driven-adaptive-ux` as the first Research-detail visual exemplar without rewriting its factual/editorial MDX content.
- [x] Restyle the paper's documentation/adaptive comparison visual to the approved editorial linework system.
- [x] Restyle research callouts and table of contents to the approved editorial system.
- [x] Use `specification-driven-ai-development` as a second Research-detail exemplar to test which publication patterns should be shared and which should remain paper-specific.
- [x] Document the Research-detail pattern-promotion rule; promote reusable breakout rhythm into the shared publication layer while keeping paper-specific section numbering and figure choreography scoped.
- [x] Use `real-time-speech-audio-pipeline-desktop-ui` as a third Research-detail exemplar focused on evidence-heavy systems writing and responsive HTML/CSS architecture diagrams.
- [x] Replace the speech paper's static pipeline/table treatments with source-grounded Astro/HTML/CSS figures while retaining code excerpts as implementation evidence.
- [x] Redesign Project detail layout.
- [x] Preserve project metadata, routes, and artifact links.
- [ ] Verify existing callouts, tables, code, media, and diagrams in both themes.
- [ ] Verify responsive article/project reading layouts.
- [ ] Run build and diff verification.

## Final Verification

- [ ] Confirm no React, TanStack Router, shadcn/ui, Radix, Lucide React, or new UI framework/library was added.
- [ ] Confirm Astro Content Collections remain the content source of truth.
- [ ] Confirm Research / Projects / About remain the primary public IA.
- [ ] Confirm routes and slugs remain stable.
- [ ] Confirm publication gating remains intact.
- [ ] Confirm RSS/sitemap/SEO behavior remains intact.
- [ ] Confirm theme persistence and OS-preference behavior remain intact.
- [ ] Confirm all factual/professional claims remain repository-grounded or separately approved.
- [ ] Confirm branch contains no unrelated changes.
- [ ] Obtain explicit approval before merge.
- [ ] Do not publish production until after explicit approval and merge to `main`.
