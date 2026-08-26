# orielsy.com

Astro static site for `orielsy.com`.

## Development

This repository uses `pnpm` and keeps generated output out of the source branch.

```text
pnpm install
npm run dev
```

- `npm run dev` starts the local Astro development server.
- `npm run build` creates the production site in `dist/` without publishing it.
- `git push` updates the source repository only. It does not build, validate, or deploy the production site.

## Manual production publishing

Production publishing is intentionally local and explicit:

```text
npm run live
```

`npm run live` runs the production build first. Only when that build succeeds does `gh-pages` publish `dist/` to the `gh-pages` branch. A failed build stops the command before any deployment begins.

The source branch is `main`; `gh-pages` contains generated production output. Do not commit `dist/` to `main`.

The `public/.nojekyll` marker is included in every build because Astro emits assets under `_astro/`, and branch-based GitHub Pages otherwise applies Jekyll processing that can suppress those assets.

## One-time GitHub Pages setup

In the GitHub repository, open:

`Settings` → `Pages` → `Build and deployment`

After the first successful `npm run live` creates the deployment branch, configure:

- **Source:** Deploy from a branch
- **Branch:** `gh-pages`
- **Folder:** `/ (root)`

Save the setting. No GitHub Actions workflow is required for this publishing model.

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

- Published entries appear as active cards on the home page and collection listings, in RSS, and on their full detail routes.
- Unpublished entries remain visible in the home page and collection listings as disabled “Research in Progress” or “Project in Progress” cards, but are omitted from RSS.
- A direct link to an unpublished entry shows a small in-progress notice instead of the unfinished body, and is marked `noindex, nofollow`.

Lifecycle fields such as `status` describe the work itself; `published` controls whether the authored content is public.
