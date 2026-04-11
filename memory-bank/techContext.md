# Tech Context — Vote For Better Money

## Tech Stack
- **Framework:** Next.js 16.2.3 (App Router, no Pages Router)
- **React:** 19.2.4
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4 with `@tailwindcss/postcss`
- **Font:** Myriad Pro via Adobe Fonts / Typekit (`use.typekit.net/ghu2hdm.css`)
- **Analytics:** Google Analytics (`G-ZBZ0609EK2`)

## External APIs
| API | Purpose | Auth |
|-----|---------|------|
| **FRED** (St. Louis Fed) | M1 money supply, national debt, CPI inflation | `DEMO_KEY` (keyless, 120 req/min) |
| **TwelveData** | Bitcoin price + 4-year % change | `TWELVEDATA_API_KEY` env var (required) |
| **Mempool.space** | Bitcoin block height → supply calculation | No auth needed |

## Environment Variables
```
TWELVEDATA_API_KEY=...          # Required for BTC price data
NEXT_PUBLIC_SITE_URL=https://voteforbetter.money  # Used for API calls during build
```

## Development Setup
```bash
npm install
npm run dev     # Start dev server (Turbopack)
npm run build   # Production build
npm run start   # Start production server
npm run lint    # ESLint
```

## Hosting & Deployment
- Domain: `voteforbetter.money`
- Likely deployed on Vercel (Next.js, `.vercel` in `.gitignore`)
- ISR revalidation: 15 minutes for stats data
- Security headers configured in `next.config.ts` (X-Frame-Options, X-Content-Type-Options, etc.)

## Key Technical Decisions
- **Dark theme only** — no light mode toggle; all colors via CSS custom properties in `globals.css`
- **Minimal dependencies** — only Next.js, React, and Tailwind; no UI library, no state management
- **Server components by default** — only `TickerBar`, `ScrollProgress`, and `LinksClient` are client components
- **Fallback stats** — if any API is down, hardcoded fallback values are used so the site never breaks
- **Turbopack** — enabled with `root: __dirname` in `next.config.ts`

## SEO & Discoverability
- `sitemap.ts` — dynamic sitemap generation
- `robots.txt` — in `/public`
- `llms.txt` + `llms-full.txt` — LLM-friendly content summaries
- JSON-LD schemas: Organization, WebSite, FAQPage on homepage
- Open Graph + Twitter Card meta on all pages

## File Structure
```
app/                    # Next.js App Router pages
  api/stats/route.ts    # Stats API endpoint
  learn/                # 5 educational articles
  how-to-use-bitcoin/   # Practical Bitcoin guide
  flyers/               # Downloadable flyer page
  links/                # Shareable links page
components/             # Reusable React components
lib/                    # API helpers, constants
public/                 # Static assets (images, PDFs, robots.txt, llms.txt)
```
