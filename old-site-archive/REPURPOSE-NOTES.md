# Content Repurpose Notes

Analysis of old site content (Patanjala Yoga Kendra WordPress site) that can enhance the new samatvayoga-site.

## High-Value Content to Repurpose

### 1. Usha Devi's Story (teacher-usha-devi.md)
**Priority: HIGH** — This is extraordinary content not on our site at all.
- Swiss-born, living in India since late 1970s
- 23 surgeries after two devastating car accidents (1998, 2003)
- Recovery through Iyengar Yoga under Guruji's personal guidance
- Times of India profile (Jan 6, 2008)
- **Use:** Expand the "Lineage & Tradition" section on `/about` — add Usha Devi's full story as her card content. She's Siddhartha Krishna's mother and first teacher.

### 2. B.K.S. Iyengar's "Be A Sadhaka" Speech (bks-iyengar-guruji.md)
**Priority: HIGH** — A speech delivered *at Patanjala Yoga Kendra* on Jan 3, 2011.
- Guruji visited the centre personally
- Deep teachings on shodhana/shoshana/shobhana/shamana kriya
- Explains bahiranga/antaranga/antaratma sadhana
- Seven koshas (not five)
- **Use:** Add to `/teachings/talks` as a featured archived talk. This is a primary source document directly connected to the centre.

### 3. Correct Address & Contact Details (contact-us.md, homepage.md)
**Priority: HIGH** — Our site has an incomplete address.
- **Full address:** Near Ram Jhula Taxi Stand, Muni-ki-reti, P.O. Shivananda Nagar, Via Rishikesh, District Tehri Garhwal, Uttarakhand, India, 249192
- **Our current address:** Swami Swatantranand Ashram, Rishikesh, Uttarakhand 249137, India
- **Location detail:** Omkarananda Ganga Sadan, right at the bank of the holy river Ganga
- **Additional phones:** +91 135 2430 763, +91 135 2431 473, +91 941 0724 498
- **Additional email:** manager@iyengaryoga.in (inquiries and room bookings)
- **Social:** Facebook (facebook.com/iyengaryoga.in), Instagram (instagram.com/iyengaryoga.in)
- **Use:** Update `src/data/travels.ts` (homeBase address) and `src/data/about.ts` (socialLinks) with correct details.

### 4. Siddhartha Krishna Bio Details (teacher-siddhartha-krishna.md)
**Priority: MEDIUM** — Some details differ or complement our existing bio.
- Old site names the specific Swamis connected to Kailas Ashram: Vivekananda, Ramatirtha, Tapovan, Sivananda — with their mission names (Ramakrishna Mission, Ramatirtha Mission, Chinmaya Mission, Divine Life Society)
- Mentions he "edited their publications on Vedanta"
- Mentions "two columns in Australian Yoga Life and one column in Yoga Journal China"
- **Use:** Our bio already has most of this. Could enrich `src/data/about.ts` with the specific mission names in the Kailas Ashram description.

### 5. Course Pricing (courses.md)
**Priority: MEDIUM** — Provides real pricing for in-person classes.
- Yoga Philosophy by Siddhartha Krishna: Rs 800
- Beginners' Yoga: Rs 500-1,500
- General Yoga: Rs 1,000-2,000
- Intensive with Usha Devi: Rs 8,850
- Regular with Ekta Ghale: Rs 2,100-7,200
- **Use:** Could add an in-person classes section to `/teachings/travels` with pricing.

### 6. Sage Patanjali Content (sage-patanjali.md)
**Priority: MEDIUM** — Rich philosophical content about the namesake of the centre.
- Detailed legends of Patanjali's birth (Gonika story, Adishesha)
- Yoga Sutras explanation
- Yama and Niyama breakdown
- **Use:** Could become a new page `/about/tradition` or enrich the About page's Yoga Sutras subject card.

### 7. Ekta Ghale Bio (teacher-ekta-ghale.md)
**Priority: LOW-MEDIUM** — Third teacher at the centre.
- Training since 2011, teaching beginners since 2015
- Teaches children, college students, and online classes
- **Use:** Could add to the lineage/teachers section on `/about`.

### 8. Testimonial (homepage.md)
**Priority: LOW** — One testimonial from "Cristina"
- Praises "Sam" (likely Usha Devi) for body movement knowledge, attention to detail
- **Use:** Could add a testimonials section to homepage or contact page.

### 9. Charity Work / Seva (charity-work-seva.md)
**Priority: LOW** — Brief mention of prison programs.
- Children of women in prison (Uttaranchal)
- "Weaving Behind Bars" at Tihar Jail
- **Use:** Could add a small "Seva" section to about page, but content is thin.

## Data Corrections for Our Site

| Field | Our Current Data | Old Site Data | Action |
|-------|-----------------|---------------|--------|
| Address | Swami Swatantranand Ashram, Rishikesh, Uttarakhand 249137 | Near Ram Jhula Taxi Stand, Muni-ki-reti, P.O. Shivananda Nagar, Via Rishikesh, Dist Tehri Garhwal, Uttarakhand 249192 | Verify which is correct |
| Location | (not specified) | Omkarananda Ganga Sadan | Add to homeBase |
| Facebook | (missing) | facebook.com/iyengaryoga.in | Add to socialLinks |
| Instagram | (missing) | instagram.com/iyengaryoga.in | Add to socialLinks |
| Extra email | (missing) | manager@iyengaryoga.in | Add for room bookings |
| Extra phones | (missing) | +91 135 2430 763, +91 135 2431 473, +91 941 0724 498 | Add to contact page |
| Usha Devi origin | (not mentioned) | Born in Switzerland | Update about data |
