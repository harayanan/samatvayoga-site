# PROMPT LOG — samatvayoga-site

> A running log of all user prompts/inputs for this project, maintained across sessions.

---

## 2026-02-22

1. **"start work on samatyayoga-site"**
   - Reviewed entire codebase (all pages, components, data files, config)
   - Verified build passes (Next.js 15.5.12, 10 static pages)

2. **"update all the usual docs and be ready"**
   - Rewrote CLAUDE.md with comprehensive project documentation
   - Updated HANDOVER.md with current state, build status, next steps
   - Added samatvayoga-site entry to global MEMORY.md

3. **"are you storing all my prompts / inputs anywhere? if not please create another doc for the same and keep it updated and committed. please do the same for all projects and update in your core memory too"**
   - Created this PROMPT-LOG.md file
   - Created PROMPT-LOG.md across all 30 projects
   - Updated core memory with new preference

4. **"delete karmayoga project folder and the html"**
   - Deleted `/root/claudecode/karma-yoga-deploy/` and `/root/claudecode/karma-yoga.html`

5. **"https://lightslategrey-finch-566548.hostingersite.com/ this is an old site, create a new subfolder in the current project and copy all these pages into it. i am going to delete this old site once you are done. also see if you want to repurpose any of the content for our site pages."**
   - Scraped all 15 pages from old WordPress site (Patanjala Yoga Kendra)
   - Created `old-site-archive/` subfolder with 13 clean markdown files
   - Created `REPURPOSE-NOTES.md` with content analysis and recommendations
   - Key repurposable content: Usha Devi's story, BKS Iyengar speech, correct address/contact, course pricing, Sage Patanjali content

6. **"Implement plan: Add Repurposed Content from Old Site"**
   - Added Usha Devi full biography to About page (intro, teaching style, recovery story, Times of India profile, Saga quote)
   - Added BKS Iyengar "Be A Sadhaka" speech to Talks page (featured collapsible section with key teachings grid)
   - Created new Sage Patanjali page at `/about/sage-patanjali` (life, yoga philosophy, Yoga Sutras, Yama & Niyama)
   - Updated Header navigation with Sage Patanjali link
   - New data file: `src/data/sage-patanjali.ts`
   - Modified: `about.ts`, `talks.ts`, `about/page.tsx`, `talks/page.tsx`, `Header.tsx`
   - Build passes cleanly (11 static pages)
