# Architecture

Static marketing site (type 1). Astro 7.4 builds plain HTML; no server, no database.

## Sitemap
Hybrid: the home page carries every section (main conversion page); separate pages only where they add search reach.

| Route | Content |
|---|---|
| `/` | hero (6 services above the fold), trust strip, 12 service cards (8 link to pages), lock types, elock, work photos, areas, reviews (placeholders), FAQ, contact + form |
| `/services/<id>/` | 8 pages from `src/content/services/*.md`: door-opening, car-opening, cylinders, locks-mechanisms, smart-locks, handles, peepholes, keypads-electromagnetic-locks. Hero, text, photos, optional video, FAQ, sticky call box, other services |
| `/accessibility/`, `/privacy/` | legal pages (placeholders for owner details) |
| `/thanks/` | after form submit (noindex) |
| `/404` | not found |
| `/sitemap-index.xml`, `/robots.txt` | generated |

Not separate pages (sections on `/` instead): FAQ, about, contact, gallery. Electric locks, panic hardware and safes are cards only.

## Data flow
- Calls: `tel:` links. WhatsApp: `wa.me` link with a prefilled message.
- Contact form: plain HTML POST to Web3Forms (`https://api.web3forms.com/submit`), which emails the client's inbox and redirects to `/thanks/`. Works without JavaScript. Spam: Web3Forms honeypot (`botcheck`). Nothing is stored on our side.
- Business details, services, areas and FAQ: `src/data/site.ts` (single source).
- Structured data: `Locksmith` JSON-LD in `BaseLayout` (no address or hours, by client request); `Service` JSON-LD on each service page.
- Service pages: content collection `services` (`src/content.config.ts`); `cards` in frontmatter maps home cards to the page.
- Video: `public/videos/` (served as-is, `preload="none"`, poster from the matching photo).

## External services
| Service | Purpose | Notes |
|---|---|---|
| Cloudflare (static assets) | hosting | not set up yet |
| Web3Forms | form → email | not set up yet; key is created with the client's email |
| Google Fonts | Heebo, downloaded at build time | served from our own domain, no request to Google at runtime |

## Environment variables (build time)
- `SITE_URL`: final site URL (canonical links, sitemap, form redirect). Defaults to localhost.
- `PUBLIC_WEB3FORMS_KEY`: Web3Forms access key (public by design). Without it the form shows a visible placeholder.

## Assets
- Raw client files: `assets/from-client/` (local only, git-ignored; the repo is public).
- Processed images: `src/assets/images/` via `scripts/prepare-images.mjs` (crops out phone UI, the key-duplication card and key bitting).
- Logo: `src/assets/logo/mo-mark.svg`, redrawn from a screenshot.
