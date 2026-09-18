# AGENTS.md

Welcome to the **orielsy.com** repository.

This project follows a lightweight **Spec-Driven Development** workflow to ensure architectural consistency, factual accuracy, and durable product decisions across sessions.

## Mandatory Agent Workflow

1. **Read the Constitution First:**
   Before making substantive changes, read `.specify/memory/constitution.md` to understand the immutable product and editorial constraints.
2. **Consult Feature Specifications:**
   Locate and read the relevant specification under `specs/` (e.g., `specs/001-site-foundation/`, `specs/002-about-page/`). Treat specs as the authoritative source of product requirements.
3. **Review Implementation Plans & Tasks:**
   Check `plan.md` and `tasks.md` in the feature directory before altering code architecture.
4. **Consult Architectural Decision Records (ADRs):**
   Review recorded decisions under `docs/decisions/` before proposing structural or taxonomy changes.
5. **Never Fabricate Content:**
   Do not invent or inflate biography, job titles, career accomplishments, technical specialties, metrics, project details, or research findings. If a fact is unknown, use an explicit placeholder or ask for clarification.
6. **Update Specs on Conflict:**
   If user requirements change or conflict with an existing specification, update the durable spec and decision records rather than silently working around them.
7. **Preserve Established Decisions:**
   Honor previous architectural, brand, and design decisions unless explicitly instructed otherwise.

## Production Deployment

Production source lives on `main`. Generated production output is published to `gh-pages`.

There are three supported deployment paths:

- Local/manual: run `npm run live` from `main`.
- GitHub UI: **Actions → Deploy Production → Run workflow**.
- Remote/agent trigger: update `.deploy/trigger` on the long-lived `production-deploy-trigger` branch.

When the user says **"deploy production"**, use the remote/agent trigger unless they explicitly request another method.

The `production-deploy-trigger` branch is a signal channel only:

- Never merge it into `main`.
- Never treat it as application source.
- Do not make product/code changes there.
- Only create or update `.deploy/trigger` to emit the push event.
- The deployment workflow itself checks out the latest `main` before building and publishing.

The workflow is defined at `.github/workflows/deploy-production.yml`.
