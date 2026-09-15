# Architectural Decision Record (ADR) 002: Content Taxonomy (Research, Projects, Work)

- **Status:** Accepted
- **Date:** 2026-08-26
- **Context:** Establishing clear boundaries between technical reasoning, software artifacts, and professional career history.

---

## Decision

1. **Research = Reasoning-First:**
   - Houses architecture explorations, technical investigations, essays, and notes.
   - May contain an embedded proof-of-concept or demo without becoming a separate Project page.
2. **Projects = Artifact-First:**
   - Houses substantial personal implementations, tools, prototypes, and desktop applications.
   - Explains what was built and how it functions. May relate to zero, one, or multiple Research pieces when genuine conceptual depth exists.
   - Project `associatedResearch` is a collection of Research route references. Adding a relationship requires current source, implementation, or publication state to justify it; schema capacity must not be treated as evidence that a planned relationship already exists.
3. **Work = Professional / Career Case Studies (Future):**
   - Reserved for major historical enterprise platform case studies (e.g., ExxonMobil global web platform).
   - Will not be added to top-level navigation until sufficient real content is authored.
   - **Constraint:** Historical enterprise client work must never be forced into personal Projects or Research simply to populate the site.
