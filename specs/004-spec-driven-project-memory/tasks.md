# Tasks: Spec-Driven Project Memory Research Article

- **Status:** Ready for Publication / Build Verification Pending
- **Feature Directory:** `specs/004-spec-driven-project-memory/`

## Task Checklist

- [x] Inspect current branch and repository SDD rules.
- [x] Audit the existing unpublished specification-driven article.
- [x] Inspect the repository artifacts used as evidence.
- [x] Create feature specification and implementation plan.
- [x] Rewrite `src/content/research/specification-driven-ai-development.mdx` around `orielsy.com` as the case study.
- [x] Confirm the design-systems failure case is factual and understated.
- [x] Confirm the article distinguishes current behavior from future context-engine exploration.
- [x] Add reusable local unpublished-content preview workflow.
- [x] Review Lovable's two architecture diagrams and port them into native Astro components.
- [x] Integrate the Project Memory Stack and Context Selection diagrams into the article.
- [x] Fix the duplicated desktop/mobile theme-toggle binding.
- [x] Set the article to `published: true`, `draft: false`, `status: published` with publication date 2026-09-11 after explicit approval to publish.
- [ ] Run `npm run build`.
- [x] Review the branch diff against `main` for unrelated changes.

## Verification Notes

- The article is now configured for publication and should appear in published Research surfaces after merge and intentional production deployment.
- Local review remains available through `npm run dev:content`; normal `npm run dev` now also renders this article as published because its frontmatter is public.
- The two diagrams were copied from the completed Lovable prototype and adapted from React/Tailwind components into static Astro components so they do not add a React runtime to the site.
- The diagram copy preserves the prototype's factual guardrails: the knowledge layers are not presented as a fixed pipeline, routing is human-authored, and no automated relevance engine is implied.
- The theme toggle now binds to all rendered toggle instances instead of relying on a duplicated DOM id.
- The branch intentionally contains the article, its `004` feature artifacts, the local content-preview infrastructure, the two article diagram components, and the theme-toggle bug fix.
- The assistant execution environment cannot currently run the repository locally, so `npm run build` remains an explicit pending verification item and must not be treated as successful until run elsewhere.
