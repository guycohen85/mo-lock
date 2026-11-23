# M.O Locksmith Services – website

Hebrew-only marketing site for a locksmith (M.O שירותי מנעולנות). Goal: phone calls, WhatsApp messages, contact form leads.

**Source of truth for decisions, stage and open questions: `decisions.md`.** Plan: `docs/plan.md`. Client answers: `docs/client/brief/`.

## Status
Stack below is PROPOSED (stage 6, awaiting approval). Do not write site code until `decisions.md` records approval.

## Stack (proposed)
- Astro 7.4, Tailwind CSS 4.3 via `@tailwindcss/vite`, `@astrojs/sitemap` 3.7. TypeScript.
- Static output. Hosting: Cloudflare (static assets). Form: Web3Forms → benbaruch84@gmail.com.
- Font: Heebo only, self-hosted. Icons: Lucide (ISC), inline SVG. Visual level 1: CSS transitions/hover only, no animation library. Node LTS (not yet installed in WSL).
- **No new libraries or services without the user's approval.**

## Structure (planned)
```
src/
  layouts/BaseLayout.astro   # <html lang="he" dir="rtl">, header, footer, mobile call bar, SEO meta, LocalBusiness JSON-LD
  components/                # Header, Footer, ServiceCard, CtaButtons, ContactForm, Faq, Areas
  content/services/*.md      # one file per service -> /services/<slug>/
  pages/                     # index, services/index, services/[slug], smart-locks, gallery, reviews, faq, about, contact, accessibility, privacy, 404
  data/site.ts               # phone, WhatsApp, email, service areas (single source)
public/                      # images, favicon, robots.txt
docs/                        # plan, client docs, mockup (not deployed)
assets/from-client/          # raw files from the client
```

## Conventions
- RTL first: logical properties only (`ms-`/`me-`, `ps-`/`pe-`, `start`/`end`, `inset-inline`). No `left`/`right`.
- Phone numbers and LTR snippets wrapped with `dir="ltr"`.
- Visual direction: one of `docs/mockup/index.html` (A), `option-b.html` (B), `option-c.html` (C), choice pending in `decisions.md`. Reuse the chosen file's tokens.
- Images: real client photos only (no stock, no AI); missing ones are `[חסר: ...]` placeholders.
- Accessibility: IS 5568 / WCAG 2.x AA – real compliance (contrast, focus, labels, alt, skip link, reduced motion). No overlay widgets.
- Missing content: visible placeholder `[חסר: ...]`, never invented facts. Do NOT claim 24/7, arrival times, address or hours (client asked not to state these). Do not list key duplication.
- Copy in plain Hebrew; code, comments and commits in English.

## Commands (once scaffolded)
- `npm run dev` – dev server
- `npm run build` – must pass, plus a link check, before each milestone commit
- Deploy: Cloudflare, connected to the GitHub repo (later)
