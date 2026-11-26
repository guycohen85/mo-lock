# M.O Locksmith Services – website

Hebrew-only marketing site for a locksmith (M.O שירותי מנעולנות). Goal: phone calls, WhatsApp messages, contact form leads.

**Source of truth for decisions, stage and open questions: `decisions.md`.** Site structure and data flow: `docs/architecture.md`. Design tokens and rules: `DESIGN.md`. Client answers: `docs/client/brief/`.

## Status
Stage 7 (build, by milestones). Plan approved 2026-11-26. Client changes from here on are edited in the site itself and logged in `decisions.md` as change requests.

## Stack (approved)
- Astro 7.4, Tailwind CSS 4.3 via `@tailwindcss/vite`, `@astrojs/sitemap` 3.7. TypeScript. Node 26.
- Static output. Hosting: Cloudflare (static assets). Form: Web3Forms → client inbox.
- Font: Heebo only, self-hosted through the Astro Fonts API. Icons: inline SVG in `src/components/Icon.astro` (Lucide style). Images: Astro `<Image>` (sharp).
- Visual level 1: CSS transitions/hover only, no animation library.
- **No new libraries or services without the user's approval.**

## Structure
```
src/
  layouts/BaseLayout.astro   # html lang=he dir=rtl, SEO meta, JSON-LD, header, footer, mobile call bar
  components/                # Header, Footer, MobileCallBar, CtaButtons, ContactForm, SectionHead, Icon, Logo, Missing
  data/site.ts               # phone, WhatsApp, areas, services, lock types, FAQ (single source)
  pages/                     # index, thanks, 404, robots.txt.ts (more in milestones 2–3)
  styles/global.css          # Tailwind + @theme tokens
  assets/images/, assets/logo/
scripts/prepare-images.mjs   # crop/resize raw client photos into src/assets/images
scripts/check-links.mjs      # post-build internal link + anchor check
assets/from-client/          # raw client files, local only (git-ignored, repo is public)
docs/                        # plan, client docs, mockups, architecture (not deployed)
```

## Conventions
- Follow `DESIGN.md`: no colors, fonts or spacing outside the tokens; no gradient text.
- RTL first: logical properties only (`ms-`/`me-`, `ps-`/`pe-`, `start`/`end`, `border-s`). No `left`/`right`.
- Phone numbers and LTR snippets wrapped with `dir="ltr"`.
- Images: real client photos only (no stock, no AI). Never show key bitting or key-duplication material. Missing content: `<Missing what="..." />` (`[חסר: ...]`), never invented facts.
- Do NOT claim 24/7, arrival times, address or hours. Do not list key duplication. Warranty wording: one year on the installation.
- Accessibility: IS 5568 / WCAG 2.x AA – real compliance (contrast, focus, labels, alt, skip link, reduced motion). No overlay widgets.
- Copy in plain Hebrew; code, comments and commits in English.

## Commands
- `npm run dev` – dev server
- `npm run build` – build + link check; must pass before each milestone commit
- `npm run preview` – serve the build (port 4321 may be taken by another local project; use `--port 4391`)
- `node scripts/prepare-images.mjs` – re-generate processed images from `assets/from-client/`
- Deploy: Cloudflare, connected to the GitHub repo (later). Build env: `SITE_URL`, `PUBLIC_WEB3FORMS_KEY`.
