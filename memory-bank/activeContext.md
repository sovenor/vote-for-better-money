# Active Context — Vote For Better Money

## Current State
The site is in a **stable, shipped state**. All core pages, components, API integrations, and SEO infrastructure are complete and functional.

## Recent Changes
- Memory Bank initialized to enable continuity across future development sessions
- **Added source links to StatCard component** — new optional `href` prop renders a subtle "Source →" link at bottom of card
- Added 8 new source URLs to `EXTERNAL_LINKS` in `lib/constants.ts` (Bitcoin whitepaper, BTC price report, FRED CPI, Fed about page, Bitnodes, blockchain.com total BTC chart, bitcoinblockhalf.com, ETF IBIT page)
- Updated 13 StatCard instances across 6 files with clickable source links for credibility

## Current Work Focus
No active development tasks. Source links feature is complete.

## Next Steps
Potential future work could include:
- Adding new learn articles
- Updating fallback stats values as economic data changes
- Adding new external link references
- Performance optimizations
- Content updates based on current events

## Active Decisions & Considerations
- **FRED API key:** Currently using `DEMO_KEY` for FRED access (120 req/min limit). This is sufficient given the 15-minute cache, but a dedicated key could be obtained if rate limits become an issue.
- **TwelveData dependency:** BTC price and 4-year change data require a valid `TWELVEDATA_API_KEY`. Without it, these fields return empty and the TickerBar hides gracefully.
- **Dark theme only:** No light mode is planned; the dark theme is integral to the brand identity.
