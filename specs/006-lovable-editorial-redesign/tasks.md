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
- [ ] Audit all existing Stage 1 changes against `spec.md`.
- [ ] Confirm no Lovable prototype copy replaced authoritative repository wording unintentionally.
- [ ] Confirm featured Research selection uses authoritative collection metadata/content.
- [ ] Confirm featured Project selection uses authoritative collection metadata/content.
- [ ] Verify Current Inquiries uses repository-authored wording.
- [ ] Verify both light and dark themes visually.
- [ ] Verify mobile layout intentionally preserves hierarchy.
- [ ] Verify no horizontal overflow at supported viewport ranges.
- [ ] Verify focus states and keyboard navigation.
- [ ] Verify reduced-motion behavior where motion exists.
- [ ] Verify no prohibited dependency/framework additions.
- [ ] Run `npm run build` when execution environment permits.
- [ ] Review Stage 1 branch diff against `main` for unrelated changes.
- [ ] Obtain explicit Stage 1 design approval before Stage 2.

## Stage 2 — Indexes

Do not begin until Stage 1 is approved.

- [ ] Redesign Research index using the approved editorial system.
- [ ] Preserve published/unpublished and local-preview behaviors.
- [ ] Redesign Projects index using the approved editorial system.
- [ ] Preserve Projects taxonomy and metadata behavior.
- [ ] Redesign About presentation without rewriting factual/professional content.
- [ ] Verify responsive behavior across all three routes.
- [ ] Verify light/dark theme consistency.
- [ ] Run build and diff verification.
- [ ] Obtain explicit Stage 2 approval before Stage 3.

## Stage 3 — Detail Layouts

Do not begin until Stage 2 is approved.

- [ ] Redesign Research detail layout.
- [ ] Preserve article publication/noindex/local-preview behavior.
- [ ] Preserve long-form prose readability and width policy.
- [ ] Integrate existing wide diagrams/media without reducing legibility.
- [ ] Redesign Project detail layout.
- [ ] Preserve project metadata, routes, and artifact links.
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
