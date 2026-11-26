# Architecture

Static marketing site (type 1). Astro 7.4 builds plain HTML; no server, no database.

## Sitemap
| Route | Status | Content |
|---|---|---|
| `/` | milestone 1 | hero (6 services above the fold), trust strip, services, lock types, elock, work photos, areas, reviews (placeholders), FAQ, contact + form |
| `/thanks/` | milestone 1 | after form submit (noindex) |
| `/404` | milestone 1 | not found |
| `/services/` and `/services/<slug>/` | milestone 2 | one page per service; slugs in `src/data/site.ts` |
| `/smart-locks/`, `/faq/`, `/about/`, `/contact/` | milestone 2 | |
| `/gallery/`, `/reviews/`, `/accessibility/`, `/privacy/` | milestone 3 | |
| `/sitemap-index.xml`, `/robots.txt` | generated | |

## Data flow
- Calls: `tel:` links. WhatsApp: `wa.me` link with a prefilled message.
- Contact form: plain HTML POST to Web3Forms (`https://api.web3forms.com/submit`), which emails the client's inbox and redirects to `/thanks/`. Works without JavaScript. Spam: Web3Forms honeypot (`botcheck`). Nothing is stored on our side.
- Business details, services, areas and FAQ: `src/data/site.ts` (single source).
- Structured data: `Locksmith` JSON-LD in `BaseLayout` (no address or hours, by client request).

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
