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

6 pages, 4 components, 4 data files. Full static site with responsive design and mobile nav.

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, Gita quote, teacher preview, philosophy, teachings grid, subjects, CTA |
| `/about` | Full biography, teaching philosophy, subjects, lineage & tradition (4 cards) |
| `/teachings/online-classes` | 5 online courses with schedule details, registration CTA |
| `/teachings/talks` | YouTube channel link, 4 talk categories, articles/publications |
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
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   └── teachings/
│       ├── online-classes/page.tsx
│       ├── talks/page.tsx
│       └── travels/page.tsx
├── components/
│   ├── Header.tsx                      # Fixed nav with WIP badge + mobile menu
│   ├── Footer.tsx                      # Dark footer with Gita quote
│   ├── WipBanner.tsx                   # Modal disclaimer (sessionStorage dismiss)
│   └── SectionHeading.tsx              # Reusable section title component
└── data/
    ├── about.ts                        # bio, teachings, socialLinks
    ├── online-classes.ts               # onlineClasses (5), registrationInfo
    ├── talks.ts                        # talkCategories (4), youtubeChannelUrl
    └── travels.ts                      # travelEvents (2), homeBase
```

## Content Summary

- **5 online classes**: Bhagavad Gita, Taittiriya Upanishad, Vishnu Sahasranama, Yoga Sutras, Sanskrit Grammar
- **4 talk categories**: Gita Lectures (3), Upanishad Lectures (2), Yoga Philosophy (1), Articles (2)
- **2 upcoming events**: Rishikesh Intensive (Mar 2026), Europe Workshop Tour (Summer 2026)
- **Home base**: Patanjala Yoga Kendra, Rishikesh
- **Contact**: info@iyengaryoga.in, WhatsApp +91 730 0654 448, YouTube @SiddarthaKrishna

## Build Status

Build passes cleanly. 10 static pages generated, ~107 KB First Load JS per page.

## Environment Variables

**None required.** Fully static site.

## Git History (6 commits)

1. Initial commit
2. Add real images from iyengaryoga.in
3. Replace Cormorant Garamond with Lora
4. Add WIP disclaimer badge and popup
5. Update favicon to Om symbol
6. Add icon.svg for Next.js auto-detection

## What Was Done This Session

- Reviewed entire codebase (all pages, components, data files, config)
- Verified build passes cleanly (Next.js 15.5.12)
- Updated CLAUDE.md with comprehensive project documentation
- Updated HANDOVER.md with current state

## Next Steps

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
