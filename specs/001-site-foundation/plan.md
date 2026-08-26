# Implementation Plan: Site Foundation

- **Status:** Implemented
- **Feature Directory:** `specs/001-site-foundation/`

---

## 1. Technical Architecture Summary

- **Engine:** Astro SSG with Content Collections (`src/content.config.ts`).
- **Styling:** Tailwind CSS v4 with CSS variables for dynamic Dark/Light theming without layout shift.
- **Syntax Highlighting:** Dual-theme Shiki (`github-light` / `github-dark-default`).
- **Hosting & publishing:** GitHub Pages via explicit local `npm run live` publishing to the `gh-pages` branch, with apex domain `orielsy.com` routed through Hostinger DNS.

---

## 2. Component System

- `Header.astro`: Responsive sticky navigation with mobile two-row layout and desktop inline navigation.
- `Footer.astro`: Minimalist copyright, verified LinkedIn/GitHub links, RSS link, and subtle `bodyctrl.com` note.
- `SEOHead.astro`: OpenGraph, Twitter cards, and JSON-LD structured data.
- `ArticleCard.astro` & `ProjectCard.astro`: Reusable metadata-driven card modules.
- `Callout.astro` & `TableOfContents.astro`: Editorial reading enhancements.
