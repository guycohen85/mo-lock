# DESIGN.md – M.O Locksmith Services

Source: mockup A (`docs/mockup/index.html`), chosen by the client on 2026-11-26. Tokens live in the `@theme` block of `src/styles/global.css`. Use only these tokens: no colors, fonts, radii or shadows outside them (`--color-*` defaults are reset, so Tailwind's palette is not available).

## Tokens
| Token | Value | Use |
|---|---|---|
| `bg` | oklch(15% 0.002 286) | page background |
| `bg-2` | oklch(19.2% 0.004 286) | alternating sections, trust strip |
| `card` | oklch(21% 0.006 286) | cards, form panel, FAQ items |
| `line` | oklch(28.7% 0.007 286) | decorative borders and dividers |
| `field` / `field-line` | oklch(16.9%…) / oklch(52%…) | form inputs; border ≥ 3:1 against the field (WCAG 1.4.11) |
| `text` / `muted` | oklch(96.1%…) / oklch(72.7%…) | body text / secondary text (7:1 on `card`) |
| `silver` | oklch(84.5% 0.009 265) | first line of large headings |
| `gold` / `gold-light` / `gold-dark` | oklch(75.3% 0.127 85) / … | brand gold (see rule below) |
| `ink` | oklch(17.8% 0 0) | text on gold buttons |
| `wa` / `wa-ink` | WhatsApp green / dark text on it | WhatsApp buttons only |
| `missing` / `missing-bg` | amber | `[חסר: ...]` placeholders only |
| font | Heebo 400–900 (variable), self-hosted via Astro Fonts API | headings 900, labels 700, body 400 |
| `text-display` / `text-section` / `text-phone` | clamp() sizes | h1 / h2 / big phone number |
| `rounded-field` / `rounded-card` / `rounded-photo` | 10 / 16 / 24px | inputs / cards / photos |
| `shadow-cta` / `shadow-photo` | | gold buttons / hero photo only |

## Color rules
- Gold is the brand color (flyer and logo) and the call button color. Use it for: call and form buttons, h2 headings, the second line of h1, icons and small accents. Never for large filled areas other than buttons.
- WhatsApp green is used only on WhatsApp buttons.
- No gradient text. Headings use solid `silver` and `gold`. (The mockup used gradient text; it was removed in the build.)

## Components
- Buttons: pill shape (`.btn`), `.btn-gold` for calls and forms, `.btn-wa` for WhatsApp. Calls and WhatsApp are always shown together (`CtaButtons`). No motion on these buttons apart from the 2px hover lift.
- Cards: `card` background, `line` border, `rounded-card`, no shadow. On mobile, service cards are horizontal (icon beside the text).
- Sections: alternate `bg` / `bg-2`; heading with `SectionHead` (gold h2, optional muted subtitle, short gold divider).
- Photos: real client photos only, through Astro `<Image>` (WebP, responsive widths). Prepared from raw files with `scripts/prepare-images.mjs`.
- Placeholders: `<Missing what="..." />`, never invented content.

## RTL and accessibility
- `<html lang="he" dir="rtl">`. Logical utilities only (`ms-/me-/ps-/pe-/start-/end-/border-s`), never `left/right/ml/mr`.
- Phone numbers and LTR inputs use `dir="ltr"`.
- Visible focus ring (gold-light, 3px), skip link, labels on every field, alt text on every photo, `prefers-reduced-motion` disables transitions.
- Visual level 1: CSS transitions and hover only. No animation library.

## Banned patterns
- purple-to-blue or cyan gradients; gradient text, especially on numbers
- glassmorphism combined with neon glow
- a centered hero with a single button followed by a row of three identical cards
- the same radius and shadow on every element; boxes inside boxes
- vague headlines: say what the business does, for whom and where
- a default font with no clear hierarchy between headings and body text
- decorative use of the action colors beyond the gold rule above
