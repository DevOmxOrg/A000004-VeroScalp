## Vero Scalp — SMP Studio Website

Single-page marketing site for a Scalp Micro Pigmentation studio, built in the chosen Luxe clinical minimalist direction (Instrument Serif headings, Inter body, slate palette, generous whitespace).

### Sections
1. **Sticky nav** — logo, anchor links (Process, Gallery, About, FAQ), Book Consult CTA
2. **Hero** — oversized serif headline "Confidence, Redefined.", portrait image, floating testimonial card, social-proof stat
3. **Before / After gallery** — paired macro shots with session labels under "Undetectable Artistry"
4. **Process** — three numbered steps: Consultation, Pigmentation, Final Refinement
5. **About the studio** — short story + stat grid (procedures, years, reviews, sessions)
6. **FAQ** — native `<details>` accordion with four common questions
7. **Dark CTA band** — "Ready to restore your natural edge?" with email CTA
8. **Footer** — logo, copyright, social/legal links

### Design system (src/styles.css)
- Fonts: Instrument Serif (display, italic accents) + Inter (body) loaded via Google Fonts
- Tokens in oklch: `--brand-dark` (slate-900), `--brand-muted` (slate-500), `--brand-accent` (slate-400), `--brand-bg` (slate-50)
- Map to existing shadcn tokens so the rest of the system stays consistent

### Imagery
Three AI-generated images already created in `src/assets/`:
- `hero-portrait.jpg` — side profile with SMP hairline
- `before-smp.jpg` — thinning scalp
- `after-smp.jpg` — dense follicle dots

User can swap these later with their own photos.

### Files touched
- `src/styles.css` — add fonts + brand tokens
- `src/routes/index.tsx` — replace placeholder with full landing page
- `src/routes/__root.tsx` — update default meta tags (title, description, OG)

### Not included (can add later)
- Booking form wired to backend (currently a `mailto:` link)
- CMS-backed gallery
- Multi-page routing (services, blog, contact)
