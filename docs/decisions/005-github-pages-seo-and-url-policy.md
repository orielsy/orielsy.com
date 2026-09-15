# Architectural Decision Record (ADR) 005: GitHub Pages SEO and URL Policy

- **Status:** Accepted
- **Date:** 2026-08-26

## Decision

`https://orielsy.com` is the canonical public identity for the site. Astro's `site` configuration, canonical tags, sitemap URLs, RSS URLs, Open Graph URLs, and structured-data URLs must resolve to this apex HTTPS origin. `www.orielsy.com` is an alternate hostname that may be configured for GitHub Pages redirects to the apex; it is not a canonical URL. The default GitHub Pages `*.github.io` hostname is only an infrastructure/DNS target and must not appear in internal links or page metadata.

The site remains a static Astro publication published manually to GitHub Pages from the `gh-pages` branch. The generated sitemap index (`sitemap-index.xml`) is the supported sitemap entry point. Unpublished Research and Project entries can retain direct status pages for the publication-gating experience, but those pages are noindex and excluded from the sitemap. Collection pages may surface these entries as separate status-interactive in-progress cards that reveal an inline notice without treating them as published content.

## DNS and HTTPS

The repository does not assert the current DNS provider configuration. When connecting the domain, configure the GitHub Pages custom domain as `orielsy.com`, then configure:

- Apex A records for `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`.
- Optional apex AAAA records for `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, and `2606:50c0:8003::153`.
- A `www` CNAME pointing directly to the account's default GitHub Pages hostname, without a repository path.

GitHub Pages can automatically redirect between the apex and `www` variants when both DNS configurations are correct and the apex is the selected custom domain. After propagation and certificate issuance, enable GitHub Pages **Enforce HTTPS**. Domain verification and avoiding wildcard DNS records are part of the operational setup, not application code.

## Stable URLs and redirects

Published URLs use lowercase, human-readable, hyphenated slugs under their content taxonomy:

- `/research/<stable-slug>/`
- `/projects/<stable-slug>/`
- `/about/`

Existing published slugs are preserved even when a title changes. New slugs must not include dates, numeric IDs, source-directory names, or implementation-specific paths. A published URL should change only when there is a strong reason.

If a URL genuinely must move, keep the old path as a static compatibility/redirect page or add an Astro redirect mapping that produces a static redirect artifact for GitHub Pages. Never silently delete a published URL with backlinks or search history. No generalized redirect system is needed until a real move exists.

## Internal linking

Global navigation connects Research, Projects, and About. The homepage and the primary collection sections link only published Research and Project entries through their cards; separate in-progress sections may show unpublished summaries with non-navigating status triggers that reveal inline notices. Published Research pages provide sequential Research navigation, and genuine relationships are expressed directly where they exist: the speechBubbles Research article links to its Project case study, and that Project links back to the associated Research. About remains a biographical surface with global navigation rather than an automatically generated list of unrelated work; curated About links can be added when a deliberate selection exists.

## Static HTML and interactive demos

Research explanations, headings, summaries, metadata, and essential links are rendered as normal static HTML. Browser-side WebGPU, WebLLM, WebMIDI, browser-local Whisper, and similar experiments enhance the article but cannot be the only explanation of it. Demo scripts are page-local or isolated Astro islands; large workers, WebAssembly modules, and model assets load only on the pages that use them and, where practical, only after the visitor chooses to run the experiment. Model weights are not bundled into the global site payload.

The `public/.nojekyll` marker is part of the generated deployment because Astro stores bundled assets under `_astro/`; branch-based GitHub Pages must not apply Jekyll processing to that directory.

## Production social-sharing cards

Lovable was used as the visual design and refinement environment for the social-card system. The production implementation belongs to `orielsy.com`; Lovable is not a runtime dependency and its React implementation is not copied into the production application.

The production visual source of truth is the Astro-native `src/components/social/SocialShareCard.astro` component. The same component used for local preview is browser-rendered at exactly `1200 × 630` and captured as PNG. Do not maintain a separate SVG, canvas template, or image-only implementation that can visually drift from the previewed component unless a future technical constraint makes that unavoidable.

The card system is primarily driven by existing Research and Project frontmatter. A small optional `socialCard` override may set only presentation-specific values such as light/dark variant, curated topic, metadata density, or a shorter card description. Overrides must remain minimal; all tags or technologies must never be dumped automatically into the card merely to fill space.

The approved composition has two metadata-density modes:

- **Rich:** approximately 30% metadata rail / 70% title field. Supporting metadata is anchored toward the bottom of the rail.
- **Sparse:** approximately 24% metadata rail / 76% title field. Existing metadata is vertically centered so negative space reads as deliberate rather than missing content.

Title scale adapts to title length, metadata density, and available title width. At reduced preview sizes, hierarchy remains title first, Orielsy Diaz second, content type third, `orielsy.com` fourth, with optional supporting metadata after that. Around medium preview size, description and topic should remain legible rather than being unnecessarily reduced into texture; at very small preview size, title and identity take priority. No decorative publication numbers, fake identifiers, or arbitrary card numbering are part of this system.

Production PNGs are **generated build artifacts**, not committed binary source. `npm run social:generate` enumerates the current source and creates:

- `/social/default.png`
- `/social/research/<published-slug>.png`
- `/social/projects/<published-slug>.png`

`npm run build` runs social-card generation before the Astro production build so metadata never points at a card that a clean production build did not create. Generation captures the real Astro component in an installed Chromium-family browser; it does not require a second rendering library or a separately maintained visual template. The generator accepts `SOCIAL_CARD_BROWSER` when the browser executable cannot be discovered automatically.

The generator clears `public/social/` before each run and generates content-specific cards only for entries whose source frontmatter explicitly contains `published: true`. Unpublished Research and Projects therefore do not receive production PNGs. Their `noindex` status pages also do not emit content-specific social image metadata.

A development-only `/social-preview/cards/` gallery and `/social-preview/render/.../` capture routes provide visual QA of the production component. These routes are not linked from public navigation and return no static paths during a production build.

## SEO and GitHub Pages constraints

- Reusable SEO metadata supports title, description, canonical URL, Open Graph/Twitter fields, content type, publication date, modified date, and generated social images.
- Published Research detail pages use `/social/research/<slug>.png`; published Project detail pages use `/social/projects/<slug>.png`; the homepage and generic public pages use `/social/default.png` unless a deliberate page-specific image is supplied.
- Social image metadata emits the canonical absolute image URL plus `1200 × 630` Open Graph dimensions. Twitter uses the same generated image with `summary_large_image`.
- Published Research pages emit `TechArticle` structured data with the supported author identity and dates. The homepage emits `WebSite`, About emits `Person`, and other pages emit `WebPage`; schema is not added for claims the site cannot support.
- The sitemap contains canonical production URLs for published static and content pages only. Draft/status routes and the 404 page are excluded. `robots.txt` allows crawling and points to the sitemap index.
- Generated social cards must not create a second source of editorial truth. Card metadata comes from approved content frontmatter plus narrowly scoped visual overrides.
- GitHub Pages provides static hosting and limited redirect/server-header control. It cannot safely host secrets, databases, authenticated server processes, or server-side inference. Features needing custom response headers, such as some cross-origin-isolated browser runtimes, belong on a separate appropriately configured service.

The social-card generation step does not change the deployment decision in ADR 003: `npm run build` remains a local production build and `npm run live` remains the only explicit production publication action from `main` to `gh-pages`.

This decision complements ADR 003 (manual GitHub Pages publishing), ADR 004 (publication gating), and the content taxonomy in ADR 002.
