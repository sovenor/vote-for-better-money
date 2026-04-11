# System Patterns — Vote For Better Money

## Architecture Overview
Simple Next.js 16 App Router site — mostly server-rendered with a few client components for interactivity. No database; all dynamic data comes from external APIs cached in-memory.

```
┌─────────────────────────────────────────────┐
│                  Browser                     │
├─────────────────────────────────────────────┤
│  ScrollProgress (client)                     │
│  TickerBar (client) ──→ GET /api/stats       │
│  Navbar                                      │
│  ┌─────────────────────────────────────────┐ │
│  │  Page Content (server-rendered)          │ │
│  │  ├── StatCard, FredComparisonCard       │ │
│  │  ├── FreedomCard, TopicCard             │ │
│  │  └── ArticleNav, Breadcrumbs            │ │
│  └─────────────────────────────────────────┘ │
│  Footer                                      │
└─────────────────────────────────────────────┘
```

## Page Layout Pattern
Every page shares the same layout from `app/layout.tsx`:
1. `<ScrollProgress />` — fixed progress bar at top (client component)
2. `<TickerBar />` — live BTC price + USD inflation bar (client component)
3. `<Navbar />` — site navigation with logo
4. `<main>{children}</main>` — page content
5. `<Footer />` — links, contact, branding

## Data Flow

### Server-side (Homepage)
```
HomePage (server component)
  └── fetchStats() (lib/api.ts)
        └── GET /api/stats (with ISR revalidate: 900s)
              └── Parallel fetches:
                    ├── FRED M1 money supply
                    ├── FRED national debt
                    ├── FRED CPI (inflation calc)
                    ├── TwelveData BTC price + 4yr change
                    └── Mempool.space block height → BTC supply calc
```

### Client-side (TickerBar)
```
TickerBar (useEffect on mount)
  └── fetch("/api/stats")
        └── Returns cached stats (15-min TTL)
```

### Caching Strategy
- **API route** (`/api/stats`): In-memory cache with 15-minute TTL
- **ISR**: Server components revalidate every 900 seconds
- **HTTP headers**: `Cache-Control: public, s-maxage=900, stale-while-revalidate=1800`
- **Fallback**: Hardcoded default values if any API call fails

## Component Patterns

### Card Components (Server)
All cards are server components with consistent styling:
- `StatCard` — shows a metric with label, value, sublabel; supports `success` (green) and `danger` (red) variants
- `FredComparisonCard` — baseline vs. current value comparison with FRED source link
- `FreedomCard` — icon + title + description, links to learn article or external URL
- `TopicCard` — title + description CTA card, links to internal page or external URL

### Navigation Components
- `Navbar` — responsive nav with logo, uses `NAV_LINKS` from constants
- `Breadcrumbs` — hierarchical breadcrumb trail with JSON-LD
- `ArticleNav` — prev/next navigation for learn articles, uses `LEARN_ARTICLES` from constants

### Client Components (marked with `"use client"`)
Only 3 components use client-side JavaScript:
1. `TickerBar` — fetches stats on mount, conditionally renders
2. `ScrollProgress` — tracks scroll position for progress bar
3. `LinksClient` — copy-to-clipboard functionality for share links

## Styling Patterns
- **Tailwind CSS v4** with `@theme inline` for custom properties
- **Dark theme only** — background `#111111`, foreground `#d4d4d4`, accent `#F7931A` (Bitcoin orange)
- **Max-width constraint** — all content sections use `max-w-2xl mx-auto px-4 sm:px-6`
- **Responsive** — mobile-first with `sm:` breakpoints
- **Article content** — `.article-content` class for consistent paragraph spacing and bold styling
- **Buttons** — `.btn-primary` (filled orange) and `.btn-secondary` (outlined orange)

## URL / Routing Patterns
- `/` — Homepage
- `/learn` — Learn index
- `/learn/[topic]` — Individual articles (static routes, not dynamic)
- `/how-to-use-bitcoin` — How-to guide
- `/flyers` — Flyer download page
- `/links` — Shareable links
- `/api/stats` — Stats API endpoint

### Redirects (in `next.config.ts`)
Legacy and retired pages redirect to homepage or updated URLs:
- `/why`, `/contest`, `/meetup-box`, `/get-involved`, `/stickers`, etc. → `/`
- `/use-bitcoin` → `/how-to-use-bitcoin`

## SEO Patterns
- Every page exports `metadata` with title, description, Open Graph, and Twitter Card
- Homepage includes FAQ JSON-LD schema
- Layout includes Organization and WebSite JSON-LD schemas
- `sitemap.ts` generates XML sitemap with priorities
- `llms.txt` and `llms-full.txt` for LLM discoverability

## Constants Pattern
All shared strings, URLs, and config live in `lib/constants.ts`:
- `SITE_NAME`, `SITE_URL`, `SITE_DESCRIPTION`, `CONTACT_EMAIL`, `GA_ID`
- `NAV_LINKS` — navigation items
- `LEARN_ARTICLES` — article metadata (slug, title, description, href)
- `EXTERNAL_LINKS` — all external URLs used across the site
