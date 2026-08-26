# Architectural Decision Record (ADR) 003: Manual GitHub Pages Production Publishing

- **Status:** Accepted
- **Date:** 2026-08-26

## Decision

Production publishing is explicitly manual and targets GitHub Pages. The developer must intentionally run:

```text
npm run live
```

The command:

1. builds the Astro production site
2. stops if the build fails
3. publishes the generated static output to the `gh-pages` branch

GitHub Pages serves the `gh-pages` branch at the configured custom domain.

## Command Meaning

```text
npm run dev
= local development

git push
= update source repository only

npm run build
= build production output locally without publishing

npm run live
= explicitly publish the current site to production
```

## Constraints

- No repository-authored GitHub Actions workflow is required for this publishing model.
- The source branch is `main`; the `gh-pages` branch contains generated output.
- `dist/` remains generated output and is not committed to `main`.
- The `public/CNAME` file must be included in generated output for `orielsy.com`.
- The apex domain DNS and GitHub Pages custom-domain setting are configured outside this repository.

## Reasoning

- Orielsy wants deliberate control over when production changes.
- Every development commit should not automatically become public.
- A static Astro build maps directly to GitHub Pages.
- Source, MDX content, specifications, ADRs, and generated publication output remain in one Git ecosystem.
- Local publishing avoids unnecessary server administration and deployment infrastructure.

## Future

This decision may later be revisited if the project grows enough to justify:

- CI
- pull-request validation
- preview deployments
- scheduled publishing
- automated production deployment
