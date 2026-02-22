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
| `/about` | Biography, teaching philosophy, subjects, compact lineage cards (5) linking to sub-pages |
| `/about/usha-devi` | **NEW** — Shrimati Usha Devi: bio, recovery story, Times of India profile, Saga Health quote |
| `/about/sage-patanjali` | Sage Patanjali: life, legends, yoga philosophy, Yoga Sutras, Yama & Niyama grid |
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
│   │   ├── page.tsx                    # About — focused on Siddhartha, compact lineage cards
│   │   ├── usha-devi/page.tsx          # Shrimati Usha Devi dedicated sub-page
│   │   └── sage-patanjali/page.tsx     # Sage Patanjali page
│   ├── contact/page.tsx
│   └── teachings/
│       ├── online-classes/page.tsx
│       ├── talks/page.tsx              # Updated — featured speech + collapsible
│       └── travels/page.tsx
├── components/
│   ├── Header.tsx                      # Fixed nav with WIP badge + mobile menu (6 links)
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

Build passes cleanly. 13 static pages generated, ~107-114 KB First Load JS per page.

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

- **Cleaned up About page** — removed full Usha Devi section (bio, recovery, Times of India, quote) and replaced 4-card Lineage grid with compact 5-card grid (3-column layout). Cards now include Usha Devi and Sage Patanjali with "Read more" links to sub-pages, plus Kailas Ashram (text-only), Patanjala Yoga Kendra (with image), Iyengar Yoga Tradition (with image).
- **Created Usha Devi sub-page** at `/about/usha-devi` — hero, photo + bio, recovery story section, Times of India "23 Surgeries" article, Saga Health Magazine closing quote. Follows same pattern as sage-patanjali page.
- **Removed "Sage Patanjali" from Header nav** — reduced from 7 to 6 links. Sub-pages are now accessible via the About page's lineage cards.
- Build passes cleanly (13 static pages).

### Previous Session
- Added Usha Devi full biography, BKS Iyengar "Be A Sadhaka" speech, Sage Patanjali page, content from old WordPress site.

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
