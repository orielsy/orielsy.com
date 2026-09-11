# Tasks: Spec-Driven Project Memory Research Article

- **Status:** Implementation Complete / Build Verification Pending
- **Feature Directory:** `specs/004-spec-driven-project-memory/`

## Task Checklist

- [x] Inspect current branch and repository SDD rules.
- [x] Audit the existing unpublished specification-driven article.
- [x] Inspect the repository artifacts used as evidence.
- [x] Create feature specification and implementation plan.
- [x] Rewrite `src/content/research/specification-driven-ai-development.mdx` around `orielsy.com` as the case study.
- [x] Confirm the design-systems failure case is factual and understated.
- [x] Confirm the article distinguishes current behavior from future context-engine exploration.
- [x] Confirm `published: false` remains in place and publication gating is unchanged.
- [x] Add reusable local unpublished-content preview workflow.
- [x] Review Lovable's two architecture diagrams and port them into native Astro components.
- [x] Integrate the Project Memory Stack and Context Selection diagrams into the article.
- [ ] Run `npm run build`.
- [x] Review the branch diff against `main` for unrelated changes.

## Verification Notes

- The article frontmatter remains `published: false`.
- Local review is available through `npm run dev:content`; normal development and production behavior remain publication-gated.
- The two diagrams were copied from the completed Lovable prototype and adapted from React/Tailwind components into static Astro components so they do not add a React runtime to the site.
- The diagram copy preserves the prototype's factual guardrails: the knowledge layers are not presented as a fixed pipeline, routing is human-authored, and no automated relevance engine is implied.
- The branch now intentionally contains the article, its `004` feature artifacts, the local content-preview infrastructure, and the two article diagram components.
- The assistant execution environment cannot currently resolve `github.com` for a local clone, so `npm run build` could not be executed here. This remains an explicit pending verification item and must not be treated as a successful build.
