# Architectural Decision Record (ADR) 005: GitHub Pages SEO and URL Policy

- **Status:** Accepted
- **Date:** 2026-08-26

## Decision

`https://orielsy.com` is the canonical public identity for the site. Astro's `site` configuration, canonical tags, sitemap URLs, RSS URLs, Open Graph URLs, and structured-data URLs must resolve to this apex HTTPS origin. `www.orielsy.com` is an alternate hostname that may be configured for GitHub Pages redirects to the apex; it is not a canonical URL. The default GitHub Pages `*.github.io` hostname is only an infrastructure/DNS target and must not appear in internal links or page metadata.

The site remains a static Astro publication published manually to GitHub Pages from the `gh-pages` branch. The generated sitemap index (`sitemap-index.xml`) is the supported sitemap entry point. Unpublished Research and Project entries can retain direct status pages for the publication-gating experience, but those pages are noindex, are not internally linked as content, and are excluded from the sitemap.

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

Global navigation connects Research, Projects, and About. The homepage links only published Research and Project entries through their cards; collection pages may also show unpublished entries as disabled status cards without content links. Published Research pages provide sequential Research navigation, and genuine relationships are expressed directly where they exist: the speechBubbles Research article links to its Project case study, and that Project links back to the associated Research. About remains a biographical surface with global navigation rather than an automatically generated list of unrelated work; curated About links can be added when a deliberate selection exists.

## Static HTML and interactive demos

Research explanations, headings, summaries, metadata, and essential links are rendered as normal static HTML. Browser-side WebGPU, WebLLM, WebMIDI, browser-local Whisper, and similar experiments enhance the article but cannot be the only explanation of it. Demo scripts are page-local or isolated Astro islands; large workers, WebAssembly modules, and model assets load only on the pages that use them and, where practical, only after the visitor chooses to run the experiment. Model weights are not bundled into the global site payload.

The `public/.nojekyll` marker is part of the generated deployment because Astro stores bundled assets under `_astro/`; branch-based GitHub Pages must not apply Jekyll processing to that directory.

## SEO and GitHub Pages constraints

- Reusable SEO metadata supports title, description, canonical URL, Open Graph/Twitter fields, content type, publication date, and modified date.
- Published Research pages emit `TechArticle` structured data with the supported author identity and dates. The homepage emits `WebSite`, About emits `Person`, and other pages emit `WebPage`; schema is not added for claims the site cannot support.
- The sitemap contains canonical production URLs for published static and content pages only. Draft/status routes and the 404 page are excluded. `robots.txt` allows crawling and points to the sitemap index.
- Intentional existing project or research imagery may be used as a social image. Missing images are omitted rather than replaced with a fabricated generic card.
- GitHub Pages provides static hosting and limited redirect/server-header control. It cannot safely host secrets, databases, authenticated server processes, or server-side inference. Features needing custom response headers, such as some cross-origin-isolated browser runtimes, belong on a separate appropriately configured service.

This decision complements ADR 003 (manual GitHub Pages publishing), ADR 004 (publication gating), and the content taxonomy in ADR 002.
