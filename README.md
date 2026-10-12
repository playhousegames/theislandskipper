# The Island Skipper
**theislandskipper.com** — Sailing gear reviews from Jersey, Channel Islands.

## Deploy to Vercel in 3 steps

### Option A: Vercel CLI (fastest)
```bash
npm install -g vercel
cd islandskipper-vercel
npm install
vercel
```
Follow the prompts. Add your custom domain in the Vercel dashboard.

### Option B: GitHub + Vercel (recommended for ongoing updates)
1. Create a new GitHub repo (e.g. `theislandskipper`)
2. Push this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial launch"
   git remote add origin https://github.com/YOUR_USERNAME/theislandskipper.git
   git push -u origin main
   ```
3. Go to vercel.com → New Project → Import from GitHub
4. Select the repo — Vercel auto-detects Next.js. Hit Deploy.
5. Add `theislandskipper.com` as a custom domain in Project Settings → Domains
6. Point your domain's DNS to Vercel's nameservers (shown in dashboard)

## Project Structure
```
src/
  app/
    page.js          ← Homepage
    layout.js        ← Nav + footer (shared)
    globals.css      ← All styles
    galley/page.js   ← The Galley category
    cabin/page.js    ← The Cabin category
    deck/page.js     ← Deck & Dock category
    about/page.js    ← About page
    articles/
      [slug]/page.js ← Dynamic article pages
  lib/
    articles.js      ← All articles + data
    affiliateLinks.js ← All affiliate URLs
    site.js          ← Site URL + constants
  components/
    ArticleBody.js   ← Article renderer
    CategoryPage.js  ← Category page template
public/
  images/            ← Your 7 photography assets
```

## Adding New Articles
1. Open `src/lib/articles.js`
2. Add a new object to the `articles` array following the existing pattern
3. Add any new images to `public/images/`
4. Commit and push — Vercel auto-deploys

## Adding Real Amazon Affiliate Links
Edit `src/lib/affiliateLinks.js` only. Products whose link is still `'#'` render without a buy button. See CLAUDE.md for details.

## Local Development
```bash
npm install
npm run dev
```
Visit http://localhost:3000

## Tech Stack
- Next.js 16 (App Router, statically generated)
- Deployed on Vercel
- No database — all content in `articles.js`
- Images served from `public/images/`
