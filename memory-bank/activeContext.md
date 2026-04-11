# Active Context — Vote For Better Money

## Current State
The site is in a **stable, shipped state**. All core pages, components, API integrations, and SEO infrastructure are complete and functional. No active feature branches or work-in-progress detected.

## Recent Changes
- Memory Bank initialized (this session) to enable continuity across future development sessions

## Current Work Focus
No active development tasks. The site is live at https://voteforbetter.money and appears feature-complete.

## Next Steps
No pending tasks have been identified. Potential future work could include:
- Adding new learn articles
- Updating fallback stats values as economic data changes
- Adding new external link references
- Performance optimizations
- Content updates based on current events

## Active Decisions & Considerations
- **FRED API key:** Currently using `DEMO_KEY` for FRED access (120 req/min limit). This is sufficient given the 15-minute cache, but a dedicated key could be obtained if rate limits become an issue.
- **TwelveData dependency:** BTC price and 4-year change data require a valid `TWELVEDATA_API_KEY`. Without it, these fields return empty and the TickerBar hides gracefully.
- **Dark theme only:** No light mode is planned; the dark theme is integral to the brand identity.
