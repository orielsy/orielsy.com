# Project Constitution

This document contains the durable, project-wide principles governing all design, content, and code decisions for **orielsy.com**.

---

## 1. Accuracy Over Embellishment

Never fabricate, guess, or inflate:
- Biography or personal background
- Job titles (e.g. do not invent "Staff Engineer")
- Career accomplishments or leadership scope
- Technical expertise or inferred specialties
- Metrics, benchmarks, or performance statistics
- Project implementation details for unbuilt systems
- Research findings or experimental conclusions
- Professional responsibilities

If information is unknown, use an explicit placeholder or ask for clarification. Factual accuracy is strictly prioritized over making the site appear impressive.

---

## 8. Repository Links Must Be Specific

Repository links on **Project** and **Research** entries must point to the actual artifact, experiment, or companion repository for that entry — never to a general profile page.

- A **Project** entry that lacks a real, entry-specific repository does not belong on the site as a Project.
- A **Research** entry may include a `github` link only when a genuine companion repository, experiment, or reference implementation exists. When it does not, the `github` field must be omitted entirely.
- The general GitHub profile belongs only in global navigation, the footer, and About surfaces.
- Substituting a profile link for an entry-specific repository is treated the same as fabricating any other content element.

---

## 2. One Identity, Multiple Interests

**orielsy.com** represents Orielsy Diaz broadly as a person, engineer, and builder. It must never reduce his identity solely to:
- Generative AI
- Frontend development
- A static résumé
- A generic job-seeker portfolio
- A technical blog

His deepest professional foundation is **frontend engineering and UI architecture**. Applied AI and context engineering are significant newer areas of exploration and work that extend this foundation rather than replace it. The site architecture must leave space for broader technical and creative interests to emerge naturally over time.

---

## 3. Content Must Earn Its Existence

Do not manufacture content merely to make the website appear populated.
- One strong, authentic article is better than ten generic generated posts.
- One meaningful project case study is better than six toy portfolio items.
- Never create empty top-level navigation routes or sections for interests that lack substantive content.

---

## 4. Content Types Must Reflect Their Actual Purpose

Do not distort or force content into an inappropriate category simply to populate the site.
- **Research**, **Projects**, and future **Work** have distinct, non-interchangeable purposes (documented in `docs/decisions/002-content-taxonomy.md`).

---

## 5. Applied AI Without Reinvention

Do not portray Orielsy as:
- An ML researcher
- A data scientist
- A foundation-model engineer
- Someone primarily training model weights

His AI work operates at the application, product, interface, and systems layer:
- Context engineering
- Repository-specific coding-agent knowledge systems
- Model Context Protocol (MCP) and MCP Apps
- Local model exploration (WebLLM, Ollama)
- AI-enhanced product and interface concepts
- Hardware-aware client/browser inference

---

## 6. Static-First Web Architecture

The website architecture must prioritize:
- Semantic HTML and strict accessibility
- Fast performance with zero or minimal client-side JavaScript by default
- Stable, durable URLs
- Clean responsive behavior
- Maintainability via Git-based workflows and Content Collections

Interactive JavaScript is introduced only when an isolated component genuinely demands interactivity.

---

## 7. Personal, Precise Voice

The editorial tone must feel:
- Technically thoughtful and grounded
- Personal, curious, mature, and understated
- Exact and architectural

Strictly avoid:
- Generic startup clichés and sales copy
- Fake thought-leadership posturing
- Excessive AI buzzwords and hyperbolic claims
- "Passionate developer" boilerplate
- Corporate biography tropes
