# orielsy.com

Astro static site for `orielsy.com`.

## Development

This repository uses `pnpm` and keeps generated output out of the source branch.

```text
pnpm install
npm run dev
```

- `npm run dev` clears Astro's generated `.astro/` cache and starts the local development server. This prevents stale collection metadata from hiding frontmatter changes such as public concept-draft badges.
- `npm run start` applies the same cache reset before starting Astro.
- `npm run reset:astro` manually clears only the ignored generated Astro cache when using a custom Astro command.
- `npm run build` creates the production site in `dist/` without publishing it.
- `git push` updates the source repository only. It does not build, validate, or deploy the production site.

## Analytics

Production analytics use Umami with the portfolio's website ID built in as the default. `PUBLIC_UMAMI_WEBSITE_ID` may override that ID when needed, and `PUBLIC_UMAMI_SCRIPT_URL` may override the script URL (default: `https://cloud.umami.is/script.js`). Normal local development does not load Umami. Production builds also suppress the tracker at runtime on `localhost`, `127.0.0.1`, and local IPv6, so `npm run preview` does not pollute production analytics.

For owner/testing traffic on the live site, visit any page with `?analytics=off` once to persist an opt-out in that browser profile. The tracker will remain disabled on later visits from that profile. Use `?analytics=on` to clear the opt-out and resume tracking. After either toggle is processed, the `analytics` query parameter is removed from the visible URL without reloading the page. The preference is stored in `localStorage`, so it is specific to the current browser/profile and is lost if site data is cleared.

The integration relies on Umami for normal traffic, referrer, and UTM reporting. Custom events are limited to a small set of meaningful portfolio interactions such as contact activation, profile links, project artifacts, explicit Project/Research relationships, the first speechBubbles video play, and the first meaningful Adaptive Enterprise UI Lab interaction per page lifecycle.

Do not send names, email addresses, raw input values, full outbound URLs, or other PII in event data. Session replay, heatmaps, fingerprinting, visitor identification, and advertising pixels are intentionally excluded. PostHog is not part of the current architecture. Deeper product analytics can be reconsidered if the Labs become substantially more application-like.

## Production publishing

Production can be published in three equivalent ways. All production deployments ultimately build the latest `main` branch and publish `dist/` to `gh-pages`.

### Local/manual

```text
npm run live
```

`npm run live` runs the production build first. Only when that build succeeds does `gh-pages` publish `dist/` to the `gh-pages` branch. A failed build stops the command before any deployment begins.

### GitHub Actions UI

Open **Actions → Deploy Production → Run workflow**.

The workflow is defined in `.github/workflows/deploy-production.yml` and deploys the latest `main` branch.

### Remote deployment trigger

The long-lived branch `production-deploy-trigger` exists only as a remote signal channel for production deployment. Updating `.deploy/trigger` on that branch causes the production workflow to run; the workflow then checks out and deploys the latest `main`.

**Do not merge `production-deploy-trigger` into `main`.** It is not a feature branch and does not contain the production source of truth.

For agent-driven workflows, a request such as **"deploy production"** means: create or update `.deploy/trigger` on `production-deploy-trigger`. Do not modify application code on that branch.

The source branch is `main`; `gh-pages` contains generated production output. Do not commit `dist/` to `main`.

The `public/.nojekyll` marker is included in every build because Astro emits assets under `_astro/`, and branch-based GitHub Pages otherwise applies Jekyll processing that can suppress those assets.

## GitHub Pages setup

In the GitHub repository, open:

`Settings` → `Pages` → `Build and deployment`

Configure:

- **Source:** Deploy from a branch
- **Branch:** `gh-pages`
- **Folder:** `/ (root)`

The production URL is [https://orielsy.com](https://orielsy.com). Astro's production site URL is configured in `astro.config.mjs`, and `public/CNAME` keeps `orielsy.com` in every generated deployment. DNS remains managed outside this repository.

## Canonical domain and DNS

`https://orielsy.com` is the canonical public hostname. `www.orielsy.com` is an alternate hostname that should redirect to the apex domain through GitHub Pages; neither the `www` hostname nor the account's default `*.github.io` hostname is used in site metadata or internal links.

After configuring the custom domain in the repository's **Settings → Pages** screen, configure the following records at the DNS provider. These are required values, not a statement about the domain's current DNS state:

- Apex (`@`): A records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`.
- Apex (`@`): optional AAAA records to `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, and `2606:50c0:8003::153`.
- `www`: CNAME to the account's default GitHub Pages hostname (for example, `orielsy.github.io`, without the repository path).

Configure the apex domain as the GitHub Pages custom domain so GitHub Pages redirects the configured `www` variant to `orielsy.com`. Verify the domain before or while connecting it, wait for DNS/HTTPS propagation, then enable **Enforce HTTPS** in GitHub Pages. Do not use wildcard DNS records. On Windows, `Resolve-DnsName orielsy.com` and `Resolve-DnsName www.orielsy.com` can be used to inspect propagation.

Astro's sitemap integration emits `sitemap-index.xml` and its numbered sitemap files. The index is the production sitemap referenced by `public/robots.txt` and submitted to search tools when the site is live.

## Content publication

Research and Project entries use an explicit `published` flag. It defaults to `false`, so new entries remain disabled until they are reviewed and deliberately enabled.
- A published entry may also set `draft: true` to identify a public concept draft. Public concept drafts appear on the home page and collection listings, in RSS, and on their full detail routes with a `Concept Draft` badge and an explanation that the work is being developed in public.
- Published entries without `draft: true` appear as regular active cards on the home page and collection listings, in RSS, and on their full detail routes.
- Unpublished entries are omitted from the home page and RSS, but appear as status-interactive cards in a separate in-progress section beneath the published entries on the Research and Projects collection listings. Activating a card reveals an inline notice without navigating to unfinished content.
- An existing direct link to an unpublished entry shows a small in-progress notice instead of the unfinished body, and is marked `noindex, nofollow`.
Lifecycle fields such as `status` describe the work itself. `published` controls whether authored content is public, while `draft` describes the maturity of content that is already public. `published: false` takes precedence over `draft`.
