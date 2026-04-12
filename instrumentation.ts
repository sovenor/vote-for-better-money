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

    // Schedule daily refresh at 6:00 AM UTC
    cron.default.schedule("0 6 * * *", () => {
      console.log("[cron] Running daily stats refresh...");
      refreshStats().catch((err) =>
        console.error("[cron] Daily refresh failed:", err)
      );
    });

    console.log("[cron] Daily stats refresh scheduled for 6:00 AM UTC");
  }
}
