# Specification: About Page Revision

- **Status:** Approved
- **Owner:** Orielsy Diaz
- **Feature Directory:** `specs/002-about-page/`

---

## 1. Goal

Provide visitors with an accurate, grounded, and engaging understanding of Orielsy Diaz: his foundational background in frontend engineering and UI architecture, how his recent AI work integrates with that foundation, his core mental models, his military service, and his broader creative interests—without inflating claims, inventing job titles, or turning the page into a linear résumé.

---

## 2. Section Requirements & Content Constraints

### 2.1 Header
- **Eyebrow:** `Biography & Perspective`
- **Heading:** `Orielsy Diaz`
- **Introductory Concept:** Keep: *"Senior Frontend Engineer and UI Architect with 15+ years of experience building scalable web applications, enterprise platforms, and high-profile digital experiences."*

### 2.2 Core Background & Positioning
- **Remove:** Any description of Orielsy's professional background, experience, or capabilities as formal design-system ownership unless he explicitly establishes that experience later. Do not narrow this rule to only claims about building design systems from zero to enterprise scale.
- **Include:** Supported areas: frontend engineering, UI architecture, enterprise applications, reusable component architecture, frontend platform patterns, engineering standards, platform modernization, low-code/no-code interfaces, turning complex automation/backend systems into usable interfaces, and UI technical leadership.
- **Applied AI Framing:** Public copy must describe the application, product, interface, and systems layer positively rather than defining Orielsy by what he is not. Connect context engineering to AI agents, coding-agent systems, and agentic development workflows where relevant, alongside MCP, WebLLM, Ollama, and local/browser inference. The internal constitution guardrail against misrepresenting him as an ML researcher, data scientist, or foundation-model engineer remains authoritative but must not be copied into public prose.
- **Core Stance:** Use positive wording such as *"I'm particularly interested in the application layer of AI: how agents, context, tools, and interfaces come together to create useful products and developer experiences."*
- **Built vs. Exploration:** The recent-AI paragraph must accurately distinguish actual artifacts built from work that was evaluated or explored. Specifically:
  - **Built:** Repository-specific coding-agent knowledge systems were designed and built.
  - **Built (MVP):** An MCP Apps MVP was independently conceptualized and prototyped.
  - **Explored:** WebLLM and Ollama (and adjacent emerging capabilities) were evaluated for local-model use cases.
  - Do not collapse the three categories under a single verb such as *"exploring"*. Do not inflate exploratory work into production implementation.
- Quantitative claims require actual source, documentation, recorded measurements, or explicit user-provided evidence. Qualify or remove unsupported absolute claims.

### 2.3 How I Think (Engineering Philosophy)
- **Heading:** `How I Think` (replace `Engineering Philosophy`).
- **Remove:** *"Interfaces as State Machines & Control Systems"* as a defining personal philosophy.
- **Principles to Include:**
  1. **The Right Context at the Right Time:** Filtering and surfacing relevant context when needed (applies to coding agents, documentation-driven UX, and onboarding).
  2. **AI as a Capability, Not Just a Chatbot:** Embedding intelligence natively into interface architecture (extraction, semantic filtering, adaptive guidance, transformations).
  3. **Abstraction Should Remove Complexity, Not Relocate It:** Finding ergonomic interaction models for intricate backend and automation workflows.
- **Visual Separation:** The three principles must read as three distinct ideas. Use restrained editorial spacing and linework rather than cards, icons, or decorative chrome.

### 2.4 Local & Tiered AI Runtimes
- **Wording Constraint:** Avoid absolute guarantees (e.g. "guarantees privacy" or "eliminates operational cost"). Use precise qualifying language ("can improve privacy by keeping suitable workloads on-device", "can reduce or avoid cloud token costs for appropriate tasks").

### 2.5 Career & Service
- **Remove:** Manufactured titles like "Staff Engineer" and inflated people-management claims.
- **Accurate Leadership:** Led frontend/UI technical direction, led the UI team, established standards, collaborated cross-functionally, remained technically hands-on.
- **Navy Service & Education:**
  - Served four years in the U.S. Navy (2002–2006) as Petty Officer (SH3).
  - Independently developed the ship's website outside assigned duties; awarded Navy Commendation Medal.
  - Studied Computer Science at William Paterson University while working part-time as a web developer before moving full-time into frontend engineering.

### 2.6 Creative & Adjacent Inquiries
- **Remove:** Unsupported expertise claims (real-time rendering expertise, embedded computing specialization, input latency optimization).
- **Frame as Interests/Inquiries:** Modular synthesis, gaming, MIDI and control surfaces, physical/digital interfaces, and interactive systems.

### 2.7 Domain Visibility
- `orielsy.com` is the canonical personal home and the only public experimentation surface for the current phase.
- `bodyctrl.com` remains a distinct future identity documented in ADR 001, but while it is inactive it must not be promoted or linked from the About page or other public site surfaces.
- Do not present BODYCTRL as a current lab, experimentation destination, or active channel until Orielsy explicitly reactivates it.

### 2.8 Links & Canonical Handles
- **LinkedIn:** `https://www.linkedin.com/in/orielsy`
- **GitHub:** `https://github.com/orielsy`
- **RSS:** `/rss.xml`
- **BODYCTRL:** intentionally omitted from public About links while inactive.

### 2.9 Direct Contact
- Direct email belongs in the existing About → Connect experience; do not create a Contact page, Contact nav item, contact form, CAPTCHA, modal, or reveal puzzle for the current contact model.
- Prefer a dedicated public-facing email address or alias rather than exposing an important private inbox.
- The complete public email address should not appear in the initial rendered HTML. Assemble the address from separately stored components with the smallest reasonable amount of client-side JavaScript when the Email control is activated, then open a `mailto:` URL.
- The Email control must be a semantic, keyboard-accessible interactive element with a clear accessible name and visible focus state.
- This JavaScript assembly is lightweight spam reduction, not a security boundary. A scraper that executes JavaScript may recover the address; mail-provider filtering and replaceability of the public alias remain the primary operational controls.
- Do not add encoding tricks, base64 obfuscation, timers, hidden forms, server calls, or other anti-bot complexity.
- If no clearly established public-facing address exists in source, implementation must stop before inserting an address and wait for Orielsy to provide the intended public address or alias.
