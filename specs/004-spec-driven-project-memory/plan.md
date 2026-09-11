# Implementation Plan: Spec-Driven Project Memory Research Article

- **Status:** In Progress
- **Feature Directory:** `specs/004-spec-driven-project-memory/`

## 1. Approach

1. Preserve the existing Research content path and publication state.
2. Replace the generic SDD framing with a repository-grounded case study.
3. Use real `orielsy.com` artifacts as evidence of the project-memory layers.
4. Use the design-systems wording regression as the central concrete failure case.
5. Explain `AGENTS.md` as a thin routing layer into more specific durable artifacts.
6. Keep future MCP/context-engine retrieval explicitly exploratory.
7. Validate that the article remains unpublished under the existing publication-gating rules.
8. Run `npm run build` when execution environment access permits.

## 2. Article Shape

The article should follow this progression:

1. The Problem Isn't Just Prompt Quality
2. Conversation Context Is Not Project Memory
3. Externalizing Intent
4. The Agent Entry Point
5. A Real Failure: When an Old Decision Came Back
6. Updating the Source of Truth Before the Code
7. Context Selection, Not Context Accumulation
8. What This Does Not Solve
9. Where This Could Go Next

## 3. Repository Evidence Strategy

Use short excerpts or concrete examples rather than large document dumps.

Primary evidence:

- `AGENTS.md` mandatory workflow
- constitution evidence/claim-state rules
- site-foundation spec's content taxonomy and design-system constraint
- publication-gating spec/ADR
- manual-production-publishing ADR
- SEO/canonical URL ADR

The article should show that these artifacts encode different scopes of project knowledge rather than presenting them as interchangeable documentation.

## 4. Content Safety

- No invented benchmarks or outcomes.
- No claims that SDD guarantees correctness.
- No “deterministic compiler” framing.
- No “zero version control” claim.
- No implication that the Repository Context Engine exists beyond its documented concept/prototype direction.
- Preserve Orielsy's frontend/UI architecture foundation while connecting the pattern to applied AI and coding-agent systems.

## 5. Verification

- Confirm `published: false` remains in frontmatter.
- Confirm no Research/Projects taxonomy or navigation changes.
- Review diff against `main` for unrelated changes.
- Run production build if the repository can be executed locally; otherwise record the environmental blocker explicitly.
