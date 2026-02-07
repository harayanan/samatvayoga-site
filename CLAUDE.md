# Samatva Yoga Site

## Overview
Website for Shri Siddhartha Krishna — a spiritual/yoga teacher and scholar of Sanskrit, Vedas, Upanishads, and the Bhagavad Gita. "Samatva Yoga" means the yoga of balance and equanimity.

## Stack
- **Framework**: Next.js 15 (App Router) + React 19
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Fonts**: Cormorant Garamond (headings), Inter (body) via Google Fonts
- **Deployment**: Vercel (static export)
- **Package Manager**: npm

## Architecture

### Content Editing
All dynamic content lives in TypeScript data files in `src/data/`:
- **`about.ts`** — Biography, teaching philosophy, social links
- **`online-classes.ts`** — Current class schedule (Gita, Upanishads, etc.)
- **`talks.ts`** — Past videos/lectures archive, publications
- **`travels.ts`** — Travel events, workshops, home base info

To update content, edit the relevant data file. No CMS or database needed.

### Pages
- `/` — Homepage with hero, about preview, teachings grid, CTA
- `/about` — Full biography, teaching philosophy, lineage
- `/teachings/online-classes` — Current online class schedule
- `/teachings/talks` — Past lectures, archive, YouTube channel
- `/teachings/travels` — Workshops, retreats, travel schedule
- `/contact` — Contact methods, location, quick links

### Color Palette
Custom theme colors defined in `globals.css`:
- **Saffron** — Primary accent (spiritual warmth)
- **Sage** — Secondary accent (natural calm)
- **Cream** — Background tones
- **Warm** — Text colors (dark warm brown/black)

## Commands
```bash
npm run dev       # Dev server (localhost:3000)
npm run build     # Static export to /out
npm run lint      # ESLint
```
