# deKorvai Website Build Playbook (Skeleton)

**Purpose.** Sibling document to the BCS Website Build Playbook, restructured for this project's actual stack. This is a **skeleton only** — section headers and known facts are filled in; rules, voice decisions, and locked feedback are TODO until we work through them together.

**Brand scope.** [TODO: confirm] — brand name is **deKorvai** ("dekorvai-website" in package.json), tagline "One Platform. Every Data Stage." Positioned as a unified data quality / ETL / data-scrambling platform, SAP S/4HANA migration angle, "Agentic AI" feature highlight. Note: a legacy/internal codename "DQView" still appears in the repo (folder name `dqview-website-main`, component `WhyDQView.tsx`) — confirm whether this is intentional or a rename left unfinished.

**Stack (confirmed, differs materially from the BCS playbook — do not assume Python/static-HTML patterns apply here):**
- Next.js 16 App Router + React 19 + TypeScript
- Tailwind v4 (CSS-first config, no `tailwind.config.js` — tokens live in `src/app/globals.css` `@theme inline` block)
- `next-intl` for i18n: locales `en` / `nl` / `de`, routed via `[locale]` segment, strings in `messages/{locale}.json`
- Blog content as Markdown in `content/blog/{locale}/*.md`, parsed via `gray-matter` + `remark`/`remark-html` (`src/lib/content.ts`)
- Events as JSON in `content/events/*.json`
- Framer Motion (animation), Lucide (icons)
- Decap CMS at `public/admin/` (`config.yml`), pointed at GitHub repo `prakashpalanibcs/dqview-website`
- Netlify deployment via `@netlify/plugin-nextjs`, config in `netlify.toml`
- No `build.py` / `generate_pages.py` / `templates.py` / section-assembly HTML pattern — component composition replaces it

**How to read this file.** Same shape as the BCS playbook: §0 quick start, §1 build sequence, §2–§5 discipline layers, §6 locked feedback rules, §7–§10 operational layer, §11 checklist.

---

## 0. Quick Start

### 0.1 Docs/skills to import
- [TODO: do we want dedicated skills (`.claude/skills/`) for this project the way BCS has `landing-page-design` / `website-copywriting` / `website-seo`, or does this playbook alone suffice?]
- [TODO: memory directory — same `feedback_*.md` + `MEMORY.md` pattern, or skip for this project?]

### 0.2 The disciplines, in one line each
- **Design** = [TODO — shared tokens/components layer, Tailwind v4 tokens + component library in `src/components/`]
- **Copy** = [TODO — page/section-specific, i18n across en/nl/de]
- **SEO** = [TODO — Next.js Metadata API + JSON-LD approach, confirm conventions]
- **Content/Blog archetype** = [TODO — Markdown + Decap CMS authoring flow]

### 0.3 The non-negotiables
[TODO — port from BCS playbook the ones that still apply (no em dashes, no second-person, no fabricated stats, etc.), drop/adapt the ones tied to the static-HTML build (e.g. "grep generate_pages.py" doesn't apply here)]

---

## 1. The Master Build Sequence

[TODO — define the equivalent sequence for a Next.js component page/section instead of the HTML-assembly sequence. Likely candidates to confirm:]
1. Decide page/route + component composition
2. Research rounds (reuse §3.2 structure?)
3. Strategic connector / positioning angle
4. Content brief + approval gate
5. Build/modify components in `src/components/`
6. Wire i18n strings into `messages/{locale}.json` (all 3 locales, or en first?)
7. SEO layer (Metadata API, JSON-LD)
8. Local verify (`next dev`, visual + Lighthouse/whatever)
9. Pre-publish checklist
10. Commit / push per Git policy (§9)

---

## 2. Design System (Shared Across Every Page)

### 2.1 Page types and routes
[TODO — map current routes under `src/app/[locale]/` (home, blog list/detail, others?) to a table like the BCS one]

### 2.2 Design tokens (from `src/app/globals.css` `@theme inline`)
[TODO — full token dump. Known so far: `--color-primary` #059669 (green), `--color-accent` #D97706 (amber), dark background #0a0a0a. Confirm full palette, fonts, spacing scale, whether dark-mode-only like BCS or has a light variant.]

### 2.3 Fixed color assignments
[TODO]

### 2.4 Component/section conventions
[TODO — homepage is currently: Navbar, Hero, TrustBar, ProblemSolution, Features, HowItWorks, WhyDQView, UseCases, UseCaseShowcase, FuzzyDuplicateShowcase, Testimonials, Insights, CTA, GlobalPresence, Footer. Decide: is this composition order locked/canonical for future pages, or specific to the homepage only?]

### 2.5 Animation rules (Framer Motion)
[TODO — equivalent of the BCS AOS delay table]

### 2.6 Icon/SVG conventions
[TODO — Lucide icon usage rules + any custom inline SVG rules (arrow markers etc., if applicable to this design)]

### 2.7 Pre-publish visual checklist
[TODO]

---

## 3. Copywriting (Never Templated — Always Page-Specific)

### 3.1 The buyer reality
[TODO — reuse/adapt the BCS stat table for the data-quality/ETL/SAP-migration buyer, or replace with deKorvai-specific research]

### 3.2 Research process
[TODO]

### 3.3 Persona
[TODO — likely: data governance lead, SAP migration programme manager, CDO/data quality lead. Confirm.]

### 3.4 Voice rules
[TODO — confirm which BCS voice rules (no em dash, no second-person, no buzzwords, no fabricated stats) carry over as-is vs need deKorvai-specific adjustment]

### 3.5 Heading standards
[TODO]

### 3.6 Word counts
[TODO]

### 3.7 FAQ rules
[TODO]

### 3.8 Section-by-section content rules
[TODO — needs its own archetype since deKorvai pages aren't the BCS 8/12/10-section templates]

### 3.9 i18n / translation rules
[TODO — this is new vs. BCS. Rules needed: translation-key naming in `messages/{locale}.json`, whether en is source-of-truth and nl/de are derived, tone consistency across locales, what happens when a string changes in one locale only, blog content translation workflow in `content/blog/{locale}/*.md`]

---

## 4. SEO (Technical + Schema + AI-Citation)

### 4.1 Audit framework
[TODO — adapt the BCS three-tier audit to Next.js Metadata API instead of raw `<head>` tags]

### 4.2 JSON-LD approach
[TODO — confirm how/where JSON-LD is emitted in the Next.js app (layout.tsx? per-page metadata? a shared component?)]

### 4.3 hreflang / locale SEO
[TODO — next-intl should handle alternate-locale links; confirm and document the actual mechanism]

### 4.4 Sitemap / robots
[TODO — confirm if `next-sitemap` or a custom `sitemap.ts`/`robots.ts` route exists]

---

## 5. Content / Blog Archetype

[TODO — this replaces the BCS "Solutions-v2" section. Needs its own definition: what does a deKorvai landing/product page's section archetype look like? Is there a repeatable pattern across Features/UseCases/HowItWorks etc., or is each page bespoke? Also cover: blog post frontmatter schema (from `content/blog/{locale}/*.md`), Decap CMS authoring flow, events JSON schema (`content/events/*.json`).]

---

## 6. The Locked Feedback Rules (Every Prior Mistake, Codified)

[Empty — populate as corrections happen, same as the BCS playbook's §6. Nothing to port automatically since these are per-project and earned through actual correction cycles on this project.]

---

## 7. Build Mechanics

[TODO — no Python generators here. Document instead: `next dev` / `next build` commands, any custom scripts in `package.json`, how Decap CMS commits land (does it commit directly to the content/blog markdown via GitHub, same "CMS commits locally only" caveat as BCS?), ISR/SSG behavior for blog pages if any.]

---

## 8. Deployment Rules (Netlify)

[TODO — `netlify.toml` uses `@netlify/plugin-nextjs`; confirm redirect/rewrite rules present (e.g. `/admin`), cache-control headers, and whether the BCS "no force=true" / shadow-file hazards have any Next.js-specific equivalent (likely not, since routing is framework-managed, not flat-file) — confirm nothing analogous is needed before declaring N/A.]

---

## 9. Git Policy

[TODO — confirm same two-halves rule as BCS: push only on explicit instruction, or different for this repo/team? Confirm the GitHub repo `prakashpalanibcs/dqview-website` branch conventions.]

---

## 10. Image / Asset Conventions

[TODO — confirm where images live (`public/`? per-component co-located?), naming conventions, any CMS-managed asset folder via Decap config.]

---

## 11. Master Pre-Publish Checklist

[TODO — assemble once §2–§10 are filled in]

---

## Appendix — File map of what travels with this playbook

[TODO — once skills/memory exist for this project, list them here the way the BCS appendix does]
