# The Island Skipper — CLAUDE.md

## Project Overview
**theislandskipper.com** is a sailing lifestyle affiliate site built with Next.js, deployed on Vercel, targeting sailors in the UK and Channel Islands. It earns revenue through Amazon Associates UK affiliate links and specialist marine affiliate programmes.

**Owner:** Matthew (playhousegames / MylesArt)
**Location:** Jersey, Channel Islands (49°N)
**Deployed:** Vercel — auto-deploys on every push to `main`
**Repository:** github.com/playhousegames/theislandskipper
**Analytics:** Google Analytics 4 — G-ZTT5MPJKPM
**Search Console:** Verified, sitemap submitted (14 pages indexed Apr 18 2026)

---

## Tech Stack
- **Framework:** Next.js (latest) with App Router
- **Styling:** Single global CSS file (`src/app/globals.css`) — no Tailwind, no CSS modules
- **Images:** Stored in `public/images/`, served statically
- **Content:** All articles in `src/lib/articles.js` as a JS array
- **Affiliate links:** Centralised in `src/lib/affiliateLinks.js`
- **Deployment:** Vercel (connected to GitHub main branch)
- **Domain:** theislandskipper.com (DNS via Hostinger, pointing to Vercel)

---

## Project Structure
```
src/
  app/
    page.js                    ← Homepage
    layout.js                  ← Nav, footer, GA4, metadata (shared)
    globals.css                ← All styles — single file
    sitemap.js                 ← Auto-generates sitemap.xml
    about/page.js              ← About page
    galley/page.js             ← The Galley category page
    cabin/page.js              ← The Cabin category page
    deck/page.js               ← Deck & Dock category page
    articles/
      [slug]/page.js           ← Dynamic article pages (async params — Next.js 15)
  lib/
    articles.js                ← All article content + metadata
    affiliateLinks.js          ← ALL Amazon affiliate URLs (edit here only)
  components/
    ArticleBody.js             ← Renders article body blocks
    CategoryPage.js            ← Shared category page template
    GoogleAnalytics.js         ← GA4 script injection
public/
  images/                      ← Photography assets (7 images)
    espresso.jpg
    dehumidifier.jpg
    led-deck-lights.jpg
    deck-shoes.jpg
    sailing-jacket.jpg
    pots-and-pans.jpg
    unbreakable-glasses.jpg
```

---

## Content Architecture

### Three Silos
| Silo | URL | Theme |
|---|---|---|
| The Galley | /galley | Cooking, provisioning, galley gear |
| The Cabin | /cabin | Comfort, dehumidifiers, lighting, liveaboard |
| Deck & Dock | /deck | Apparel, footwear, après-sail lifestyle |

### Four Starter Kits (homepage)
1. **No-Soggy-Bed Kit** → links to dehumidifier article
2. **Perfect Morning at Anchor Kit** → links to espresso article
3. **Sundowner Kit** → links to wine glasses article
4. **Dried-Out Kit** → links to Jersey sailing guide

### The Jersey Angle
Every article should reference Jersey, Channel Islands where relevant:
- 12m tidal range (second largest in the world)
- Specific locations: St. Aubin's Bay, Grève de Lecq, Gorey Harbour, Mont Orgueil, Elizabeth Castle, St. Catherine's Bay
- Passages: St. Helier → Cherbourg, St. Helier → Sark, Race of Alderney
- Local community: Royal Channel Islands Yacht Club (RCIYC)
- "Drying out" — boats sitting on the bottom at low tide, unique to high tidal range sailing

---

## Adding a New Article

1. Open `src/lib/articles.js`
2. Add a new object to the `articles` array:

```js
{
  id: 'url-slug-here',              // becomes /articles/url-slug-here
  title: 'Full Article Title',
  subtitle: 'Supporting subtitle',
  silo: 'galley',                   // 'galley' | 'cabin' | 'deck'
  siloLabel: 'The Galley',
  image: '/images/your-image.jpg',
  excerpt: 'Short description for cards and meta tags.',
  readTime: '8 min read',
  date: 'Month Year',
  body: [
    { type: 'p', text: 'Paragraph text.' },
    { type: 'h2', text: 'Section heading' },
    { type: 'h3', text: 'Sub heading' },
    { type: 'callout', title: 'Callout title', text: 'Callout body text.' },
    { type: 'product', name: 'Product Name', verdict: 'Review text.', price: 'Around £XX', link: link('affiliate-key') },
    { type: 'list', items: ['Item one', 'Item two', 'Item three'] },
  ]
}
```

3. Add any new affiliate links to `src/lib/affiliateLinks.js`
4. Add any new images to `public/images/`
5. Commit and push — Vercel auto-deploys

---

## Adding Affiliate Links

**Only ever edit `src/lib/affiliateLinks.js`** — never hardcode URLs in articles.

```js
// In affiliateLinks.js
'product-key': 'https://amzn.to/XXXXXXX',

// In articles.js body
{ type: 'product', ..., link: link('product-key') }
```

### How to get a link (Amazon Associates UK)
1. Log into **associates.amazon.co.uk**
2. Browse to the product on **amazon.co.uk**
3. SiteStripe bar at top → click **Text** → copy the `amzn.to` short link
4. Paste into `affiliateLinks.js`

### Amazon Associates account
- Programme: **Amazon Associates UK** (associates.amazon.co.uk)
- Important: Must make 3 sales within 180 days of approval or account closes
- Commission rates: Sports/Outdoors ~3%, Clothing ~4-5%, Kitchen ~4%

### Other affiliate programmes to join
| Programme | Commission | Cookie | Best for |
|---|---|---|---|
| West Marine | 5% | 30 days | Marine hardware |
| Waveinn/Tradeinn | 6% | 30 days | Gill, Musto, Helly Hansen clothing |
| Boatbookings | 20%+ | 30 days | Yacht charters (high ticket) |

---

## Design System

### Colour Palette (CSS variables)
```css
--navy: #1a2744       /* Primary dark — nav, cards, banners */
--deep: #0d1b2a       /* Darker navy — hero, footer */
--rope: #c8a96e       /* Gold/rope accent */
--rope-light: #e8d5a3 /* Light gold — headings on dark */
--sail: #f5f0e4       /* Cream — page background */
--sea: #2d6a8f        /* Ocean blue — product box borders */
--sea-light: #5b9ab5  /* Lighter blue — cabin category tag */
--mist: #8a9bb0       /* Muted text on dark backgrounds */
--red: #c0392b        /* Deck & Dock category tag */
```

### Typography
- **Display/headings:** Playfair Display (serif) — imported from Google Fonts
- **Body/articles:** Libre Baskerville (serif)
- **UI/navigation:** Source Sans 3 (sans-serif)

### Category Colour Coding
```css
.tag-galley { background: #f0c040; color: #5a3e00; }  /* Amber */
.tag-cabin  { background: #5b9ab5; color: white; }    /* Blue */
.tag-deck   { background: #c0392b; color: white; }    /* Red */
```

### Rope Line
The decorative rope stripe at the top of every page is a CSS `repeating-linear-gradient` in `.rope-line` — do not remove it, it's a key brand element.

---

## Deployment Workflow

```bash
# Local development
cd /Users/saturnv/Documents/islandskipper-vercel
npm run dev
# Visit http://localhost:3000

# Deploy to production
git add .
git commit -m "Description of changes"
git push
# Vercel auto-deploys in ~60 seconds
```

### Important git notes
- Square bracket folder `[slug]` requires quotes: `git add "src/app/articles/[slug]/page.js"`
- Never commit `node_modules/` — it's in `.gitignore`
- `.env.local` exists but only contains a dummy variable — safe to ignore

---

## Known Issues & Fixes Applied

### Next.js 15 async params
Dynamic route pages (`[slug]`) must use async params:
```js
// CORRECT for Next.js 15
export default async function ArticlePage({ params }) {
  const { slug } = await params
```

### Article routing
- `revalidate = 0` is set on the article page to prevent Vercel ISR cache serving stale 404s
- `trailingSlash` was removed from `next.config.js` to fix article routing on Vercel

---

## SEO Notes
- Sitemap auto-generates at `/sitemap.xml` via `src/app/sitemap.js`
- Google Search Console verified April 18 2026, 14 pages indexed
- Each article has `generateMetadata` for title and description
- Jersey-specific content is the main SEO differentiator — no competitor can replicate local knowledge
- Target keywords: "best boat dehumidifier", "12v espresso maker boats", "musto vs gill jacket", "boat shoes sailing", "sailing around Jersey"

---

## Content Guidelines

### Voice & Tone
- First person ("I tested this aboard...", "In my experience...")
- Jersey-specific references wherever natural
- Honest — acknowledge when something hasn't been personally tested
- Never review safety gear (lifejackets, harnesses, EPIRBs, flares) — editorial policy

### Article Structure
Every article should include:
1. Opening personal anecdote or scene-setting
2. Jersey/Channel Islands callout box (`type: 'callout'`)
3. 2–3 product recommendations with affiliate links
4. Honest verdict
5. Cross-reference to related starter kit

### Affiliate Disclosure
Already in footer on every page — do not remove:
*"This site contains affiliate links. As an Amazon Associate I earn from qualifying purchases."*

---

## Analytics & Tracking
- **GA4 Measurement ID:** G-ZTT5MPJKPM
- Tracking script in `src/components/GoogleAnalytics.js`, injected via `layout.js`
- Tracks all page views automatically across all routes
