# Samatva Yoga Site

## Overview
Website for Shri Siddhartha Krishna — a spiritual/yoga teacher and scholar of Sanskrit, Vedas, Upanishads, and the Bhagavad Gita. "Samatva Yoga" means the yoga of balance and equanimity (from Bhagavad Gita 2.48: "samatvam yoga uchyate").

## Stack
- **Framework**: Next.js 15.5 (App Router) + React 19
- **Styling**: Tailwind CSS 4 (custom theme with Saffron, Sage, Cream, Warm palette)
- **Icons**: Lucide React 0.469
- **Fonts**: Lora (headings/serif), Inter (body/sans) via Google Fonts
- **Deployment**: Vercel (static export to `/out`)
- **Package Manager**: npm
- **GitHub**: https://github.com/harayanan/samatvayoga-site

## Commands
```bash
npm run dev       # Dev server (localhost:3000)
npm run build     # Static export to /out
npm run lint      # ESLint
```

## Architecture

### Static Export
`next.config.ts` has `output: "export"` — the entire site is pre-rendered to static HTML. No server-side rendering, no API routes. Images are unoptimized (Vercel handles CDN).

### Content Editing
All dynamic content lives in TypeScript data files in `src/data/`:
- **`about.ts`** — Biography (`bio`), teaching philosophy (`teachings`), social links (`socialLinks`)
- **`online-classes.ts`** — Current class schedule (`onlineClasses`), registration info
- **`talks.ts`** — Past videos/lectures archive (`talkCategories`), YouTube channel URL
- **`travels.ts`** — Travel events (`travelEvents`), home base info (`homeBase`)

To update content, edit the relevant data file. No CMS or database needed.

### Pages
| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `page.tsx` | Homepage — hero, Gita quote, teacher preview, philosophy, teachings grid, subjects, CTA |
| `/about` | `about/page.tsx` | Full biography, teaching philosophy, subjects, lineage & tradition (4 cards) |
| `/teachings/online-classes` | `teachings/online-classes/page.tsx` | 5 ongoing courses with schedule, registration CTA |
| `/teachings/talks` | `teachings/talks/page.tsx` | YouTube channel link, 4 talk categories, articles/publications |
| `/teachings/travels` | `teachings/travels/page.tsx` | Home base (Patanjala Yoga Kendra), upcoming/past events, guest invitation CTA |
| `/contact` | `contact/page.tsx` | Email, WhatsApp, YouTube, location cards + quick links |

### Components
| Component | Description |
|-----------|-------------|
| `Header.tsx` | Fixed navbar with logo, "WIP" badge, desktop/mobile nav (6 links). Client component. |
| `Footer.tsx` | Dark footer with brand, explore links, contact info, Gita quote |
| `WipBanner.tsx` | Modal overlay on first visit — "site under construction" disclaimer. SessionStorage dismiss. Client component. |
| `SectionHeading.tsx` | Reusable section heading with title, subtitle, divider. Supports `light` (dark bg) and `centered` props. |

### Color Palette (defined in `globals.css` @theme)
- **Saffron** (50–900) — Primary accent (spiritual warmth, CTAs)
- **Sage** (50–900) — Secondary accent (natural calm, green tones)
- **Cream** (50–400) — Backgrounds and light surfaces
- **Warm** (800–900) — Text colors (dark warm brown/black)

### Images
8 photos in `public/images/` sourced from iyengaryoga.in:
- `siddhartha-hero.jpg` — Portrait of Shri Siddhartha Krishna
- `online-course.jpg`, `offline-course.jpg`, `class-scene.jpg` — Teaching scenes
- `yoga-studio.jpg` — Patanjala Yoga Kendra studio
- `light-room.jpg`, `teacher-1.jpg` — Tradition/lineage images
- `logo.png` — Small logo (569 bytes)

### Favicon
`src/app/icon.svg` — Om symbol, auto-detected by Next.js.

## Design Decisions
- **Minimal, spiritual aesthetic**: Warm earth tones, generous whitespace, serif headings
- **WIP banner**: Shows once per session via sessionStorage; header also has "WIP" badge
- **No JavaScript interactivity** beyond Header mobile menu toggle and WIP banner dismiss
- **Responsive**: Mobile-first with `md:` breakpoints for desktop grid layouts
- **Donation-based model**: All classes free/donation-based, contact via WhatsApp/email only
