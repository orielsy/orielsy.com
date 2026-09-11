# Architectural Decision Record (ADR) 003: Manual GitHub Pages Production Publishing

- **Status:** Accepted
- **Date:** 2026-08-26

## Decision

Production publishing is explicitly manual, may only originate from the `main` source branch, and targets GitHub Pages. The developer must intentionally run:

```text
npm run live
```

Before building or publishing, the command verifies that the current Git branch is `main`. If any other branch is checked out, publishing stops with an error.

The command then:

1. verifies the current source branch is `main`
2. builds the Astro production site
3. stops if the branch check or build fails
4. publishes the generated static output to the `gh-pages` branch

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
= explicitly publish the current `main` site to production
```

## Constraints

- Production output must originate from `main`; feature, experiment, or other source branches must not be published directly.
- No repository-authored GitHub Actions workflow is required for this publishing model.
- The source branch is `main`; the `gh-pages` branch contains generated output.
- `dist/` remains generated output and is not committed to `main`.
- The `public/CNAME` file must be included in generated output for `orielsy.com`.
- The apex domain DNS and GitHub Pages custom-domain setting are configured outside this repository.

## Reasoning

- Orielsy wants deliberate control over when production changes.
- Merging reviewed work into `main` should precede production publication.
- Preventing non-`main` publication reduces the chance that an unmerged feature branch is accidentally deployed to the live site.
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
