# Servogo Marketing Site

Static marketing site for Servogo. Plain HTML/CSS/JS — no build step.

## Local preview

```bash
# Any static server works. Pick one:
npx serve .            # http://localhost:3000
python3 -m http.server # http://localhost:8000
```

## Deploy

This is a static site. Deploy options, easiest first:

### Vercel (recommended)
```bash
npx vercel --prod
```
Set the project root to this directory. No framework preset, no build command, output directory `.`.

### Cloudflare Pages
- Connect this repo to Cloudflare Pages
- Build command: leave blank
- Output directory: `/`

### Railway (if you want everything in one place)
- Add a new service, "Empty Service"
- Set the start command to `npx serve -s . -l 8080`
- Or use the static-site template

## Domain

- Marketing site: `servogo.co.uk` (root)
- App: `app.servogo.co.uk` (already deployed)

All "Start free" CTAs link to `https://app.servogo.co.uk/signup`.

## Editing

- `index.html` — single-page landing site (everything is here, including styles)
- `assets/screen-*.png` — product screenshots used as feature shots
- `assets/servogo*.svg` — logo + wordmark

To re-capture product screenshots: see `../servogo/capture_screenshots.mjs` in the main repo. The four files needed are `02-day-view.png`, `03-schedule.png`, `06-invoices-outstanding.png`, `04-clients.png` — saved to this directory as `screen-day-view.png`, `screen-schedule.png`, `screen-invoices.png`, `screen-clients.png`.

## Placeholder links

These currently point to `#` and need real destinations or pages:

- Top nav: Changelog, Docs
- Deep-dive sections: "More on scheduling/routing/invoicing" → future feature pages
- Pricing footer: "See full pricing" → future `/pricing` page
- Footer columns: Changelog, Integrations, Docs, Guides, Migrate from Jobber, Status, About, Customers, Contact, Careers, Privacy, Terms, DPA

When ready to add real pages, consider migrating to Astro for shared components and MDX (blog/changelog).
