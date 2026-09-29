# ADR 006: Shared Research Diagram Publication System

- **Status:** Accepted
- **Date:** 2026-09-28

## Context

Research diagrams across `orielsy.com` evolved independently. The information architecture was often sound, but repeated one-off styling produced inconsistent scale: some figure titles were disproportionately large while technical labels and explanatory copy were unusually small, and several figures accumulated more padding and framing than their content required.

A comparison with the Lovable editorial prototype made the underlying issue clearer. The stronger result was not simply smaller or tighter. It used a consistent diagram typographic scale and shell while allowing each diagram to keep its own internal information structure.

Orielsy approved promoting that lesson across Research rather than limiting it to one article.

## Decision

Research diagrams use a shared publication system.

### Shared shell

`src/components/research/ResearchFigureFrame.astro` is the preferred shell for new and materially refactored research diagrams.

It owns the reusable publication concerns:

- figure border and radius
- title and optional subtitle
- optional technical eyebrow/status
- outer spacing
- caption treatment
- baseline responsive typography

Individual diagrams continue to own their internal grid, flow, comparison, lifecycle, pipeline, or other content-specific geometry.

### Shared scale

The baseline diagram scale is intentionally compact and internally consistent:

- figure title: approximately 16-18px
- subtitle: approximately 12-13px
- primary node/value: approximately 14px
- technical/category labels: **10px minimum**
- explanatory copy: approximately 11-12px
- caption: approximately 11-12px
- ordinary card padding: approximately 14-16px unless the information structure requires otherwise

The goal is not to make every element small. It is to avoid mixing oversized presentation headlines with undersized microcopy inside the same technical figure. Research-diagram metadata and category labels must not drop below 10px merely to preserve density.

### Shared Research baseline

`src/styles/research-graphics.css` provides the compatible baseline for existing `figure.not-prose` research visuals so legacy figures inherit the same title, internal-heading, explanatory-copy, caption, radius, and header-spacing system without requiring identical markup.

Source-code excerpts are excluded because they are a different publication component.

### Width behavior

Research figures remain in the normal reading column by default.

`ResearchBreakout.astro` is reserved for figures whose information architecture genuinely requires more horizontal room. A diagram does not become wide merely because it is a diagram.

### Visual independence

Uniformity applies to typography, spacing rhythm, framing, and publication behavior, not to information architecture.

A pipeline should still read like a pipeline. A comparison should still read like a comparison. A lifecycle or evidence matrix may use a different composition when its content requires it.

## Consequences

- Research diagrams should feel like parts of one publication rather than unrelated mini-apps.
- Shared scale changes can be tuned centrally instead of repeated across many components.
- Existing diagrams can migrate incrementally to `ResearchFigureFrame` while receiving the shared baseline immediately.
- New diagram work should begin with the shared frame unless a documented content-specific reason requires a different shell.
- Technical labels and diagram metadata should remain legible at a 10px minimum rather than collapsing into decorative microtype.
- No React, client framework, animation library, or new component dependency is introduced.

## Non-goals

This decision does not require:

- identical diagram layouts
- one fixed width for every figure
- removing content-specific semantics
- converting static Astro diagrams into interactive components
- replacing semantic site tokens with a separate diagram theme
