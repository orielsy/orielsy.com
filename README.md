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

## One-time GitHub Pages setup

In the GitHub repository, open:

`Settings` → `Pages` → `Build and deployment`

After the first successful `npm run live` creates the deployment branch, configure:

- **Source:** Deploy from a branch
- **Branch:** `gh-pages`
- **Folder:** `/ (root)`

Save the setting. No GitHub Actions workflow is required for this publishing model.

The production URL is [https://orielsy.com](https://orielsy.com). Astro's production site URL is configured in `astro.config.mjs`, and `public/CNAME` keeps `orielsy.com` in every generated deployment. DNS remains managed outside this repository.
