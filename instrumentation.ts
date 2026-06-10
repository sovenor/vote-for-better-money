/**
 * Next.js instrumentation — runs once when the server starts.
 * Sets up a daily cron job to refresh stats from external APIs.
 */
export async function register() {
  // Only run on the server (not during build or in edge runtime)
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const cron = await import("node-cron");
    const { refreshStats } = await import("./lib/stats");

    // Refresh stats on server startup
    console.log("[cron] Server started — running initial stats refresh...");
    refreshStats().catch((err) =>
      console.error("[cron] Initial refresh failed:", err)
    );

    // Schedule daily refresh at 14:00 UTC.
    // Avoid early-morning US hours (~06:00 UTC = ~1-2 AM ET): the FRED API
    // (api.stlouisfed.org) is unreliable during its nightly maintenance/data-load
    // window, which silently blanked all FRED-backed stats. 14:00 UTC is well clear.
    cron.default.schedule("0 14 * * *", () => {
      console.log("[cron] Running daily stats refresh...");
      refreshStats().catch((err) =>
        console.error("[cron] Daily refresh failed:", err)
      );
    });

    console.log("[cron] Daily stats refresh scheduled for 14:00 UTC");
  }
}
