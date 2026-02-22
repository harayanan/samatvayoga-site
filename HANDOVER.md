# HANDOVER — samatvayoga-site

> Website for Shri Siddhartha Krishna — yoga teacher, Sanskrit scholar, Rishikesh

## Status: PRODUCTION-READY (with WIP Banner)

**Started:** January 2026

## Tech Stack

- **Framework:** Next.js 15.5.12 (App Router, `src/` directory, static export)
- **UI:** React 19 + Tailwind CSS 4 + Lucide icons 0.469
- **Type:** Static content-driven site (no database, no API routes)
- **Deployment:** Vercel (static export)
- **GitHub:** https://github.com/harayanan/samatvayoga-site

## What's Built

7 pages, 4 components, 5 data files. Full static site with responsive design and mobile nav.

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, Gita quote, teacher preview, philosophy, teachings grid, subjects, CTA |
| `/about` | Full biography, teaching philosophy, subjects, lineage & tradition, **Usha Devi full bio with recovery story** |
| `/about/sage-patanjali` | **NEW** — Sage Patanjali: life, legends, yoga philosophy, Yoga Sutras, Yama & Niyama grid |
| `/teachings/online-classes` | 5 online courses with schedule details, registration CTA |
| `/teachings/talks` | **Featured BKS Iyengar "Be A Sadhaka" speech (collapsible)**, YouTube link, 4 talk categories |
| `/teachings/travels` | Home base info, upcoming events (2), guest invitation CTA |
| `/contact` | Email, WhatsApp, YouTube, location + quick links |

## Source Structure

```
src/
├── app/
│   ├── page.tsx                        # Homepage
│   ├── layout.tsx                      # Root layout (Lora + Inter fonts, metadata)
│   ├── globals.css                     # Tailwind 4 @theme (Saffron, Sage, Cream, Warm)
│   ├── icon.svg                        # Om symbol favicon
│   ├── about/
│   │   ├── page.tsx                    # About — expanded with Usha Devi section
│   │   └── sage-patanjali/page.tsx     # NEW — Sage Patanjali page
│   ├── contact/page.tsx
│   └── teachings/
│       ├── online-classes/page.tsx
│       ├── talks/page.tsx              # Updated — featured speech + collapsible
│       └── travels/page.tsx
├── components/
│   ├── Header.tsx                      # Fixed nav with WIP badge + mobile menu (7 links now)
│   ├── Footer.tsx                      # Dark footer with Gita quote
│   ├── WipBanner.tsx                   # Modal disclaimer (sessionStorage dismiss)
│   └── SectionHeading.tsx              # Reusable section title component
└── data/
    ├── about.ts                        # bio, teachings, ushaDeviBio, socialLinks
    ├── online-classes.ts               # onlineClasses (5), registrationInfo
    ├── sage-patanjali.ts               # NEW — sagePatanjali (life, yoga, sutras, yama/niyama)
    ├── talks.ts                        # talkCategories (4), featuredSpeech, youtubeChannelUrl
    └── travels.ts                      # travelEvents (2), homeBase
```

## Content Summary

- **5 online classes**: Bhagavad Gita, Taittiriya Upanishad, Vishnu Sahasranama, Yoga Sutras, Sanskrit Grammar
- **4 talk categories**: Gita Lectures (3), Upanishad Lectures (2), Yoga Philosophy (1), Articles (2)
- **1 featured speech**: BKS Iyengar "Be A Sadhaka" (Jan 3, 2011 at Patanjala Yoga Kendra)
- **Usha Devi bio**: Full biography, 23-surgery recovery, Times of India profile, Saga Health quote
- **Sage Patanjali**: Life & legends, yoga philosophy, Yoga Sutras explanation, 5 Yamas + 5 Niyamas
- **2 upcoming events**: Rishikesh Intensive (Mar 2026), Europe Workshop Tour (Summer 2026)
- **Home base**: Patanjala Yoga Kendra, Rishikesh
- **Contact**: info@iyengaryoga.in, WhatsApp +91 730 0654 448, YouTube @SiddarthaKrishna

## Build Status

Build passes cleanly. 11 static pages generated (was 10), ~107-114 KB First Load JS per page.

## Environment Variables

**None required.** Fully static site.

## Git History

1. Initial commit
2. Add real images from iyengaryoga.in
3. Replace Cormorant Garamond with Lora
4. Add WIP disclaimer badge and popup
5. Update favicon to Om symbol
6. Add icon.svg for Next.js auto-detection
7. *Pending:* Add repurposed content from old site (Usha Devi, BKS Iyengar speech, Sage Patanjali)

## What Was Done This Session

- **Added Usha Devi full biography** to About page — intro, teaching style, two accident recovery stories, Times of India "23 Surgeries" profile, Saga Health Magazine quote. Data in `ushaDeviBio` export in `about.ts`.
- **Added BKS Iyengar "Be A Sadhaka" speech** to Talks page — featured section with 4 key teachings grid, collapsible full speech text, closing quote. Talks page converted to client component for expand/collapse. Data in `featuredSpeech` export in `talks.ts`.
- **Created Sage Patanjali page** at `/about/sage-patanjali` — hero, introduction, life/legends, yoga philosophy (dark section), Yoga Sutras explanation, Yama & Niyama grid (5+5). New data file `sage-patanjali.ts`.
- **Updated Header navigation** — added "Sage Patanjali" link between About and Online Classes (7 nav links now).
- **Replaced Usha Devi card** in Lineage section with Sage Patanjali card (with link), moved Usha Devi to her own full-width section below.
- All content sourced from `old-site-archive/` (scraped from old WordPress site).
- Build passes cleanly (11 static pages).

## Next Steps

- [ ] Commit and push to GitHub (triggers Vercel deploy)
- [ ] Get content approval from Shri Siddhartha Krishna / site owner
- [ ] Replace placeholder event dates with confirmed dates
- [ ] Add more talks/lectures to the archive as content grows
- [ ] Consider removing WIP banner once content is finalized
- [ ] Add SEO: sitemap.xml, robots.txt, structured data (JSON-LD for Person/Event)
- [ ] Add Google Analytics or similar if tracking is desired
- [ ] Optimize images (currently uncompressed, 4.6 MB total in public/images)

## Blockers

None. Site is fully functional and deployed.

---
*Last reviewed: 2026-02-22*
