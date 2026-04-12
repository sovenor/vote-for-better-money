/**
 * Shared server-side stats fetching logic.
 * 
 * - getStats(): Reads from /data/stats.json (fast, no API calls).
 *   Falls back to fetching fresh if file is missing.
 * - refreshStats(): Fetches from all external APIs and writes to /data/stats.json.
 *   Called by the daily cron job in instrumentation.ts.
 */

import fs from "fs";
import path from "path";
import type { SiteStats } from "./api";

/** Directory for persistent data. /data on Railway volume, ./data locally. */
const DATA_DIR = (() => {
  // Use /data if the Railway volume is mounted, otherwise fall back to ./data
  try {
    if (fs.existsSync("/data") && fs.statSync("/data").isDirectory()) {
      return "/data";
    }
  } catch { /* not available */ }
  return "./data";
})();
const STATS_FILE = path.join(DATA_DIR, "stats.json");

const FALLBACK_STATS: SiteStats = {
  nationalDebtTrillions: "36",
  m1SupplyTrillions: "18.4",
  bitcoinMined: "19.8 million",
  bitcoinPercentMined: "94",
  btcPrice: "",
  btcChange4yr: "",
  usdInflation4yr: "",
  lastUpdated: new Date().toISOString(),
};

// ── File I/O ──────────────────────────────────────────────────────────

function readStatsFile(): SiteStats | null {
  try {
    if (!fs.existsSync(STATS_FILE)) return null;
    const raw = fs.readFileSync(STATS_FILE, "utf-8");
    return JSON.parse(raw) as SiteStats;
  } catch {
    return null;
  }
}

function writeStatsFile(stats: SiteStats): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(STATS_FILE, JSON.stringify(stats, null, 2), "utf-8");
  } catch (err) {
    console.error("[stats] Failed to write stats file:", err);
  }
}

// ── External API fetchers ─────────────────────────────────────────────

async function fetchFredSeries(seriesId: string): Promise<number | null> {
  const apiKey = process.env.FRED_API_KEY;
  if (!apiKey) return null;

  try {
    const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${seriesId}&sort_order=desc&limit=1&file_type=json&api_key=${apiKey}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
    if (!res.ok) return null;
    const data = await res.json();
    const value = data?.observations?.[0]?.value;
    return value && value !== "." ? parseFloat(value) : null;
  } catch {
    return null;
  }
}

async function fetchBitcoinMined(): Promise<{
  mined: number;
  percent: number;
} | null> {
  try {
    const res = await fetch("https://mempool.space/api/blocks/tip/height", {
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) return null;
    const blockHeight = await res.json();

    let supply = 0;
    let reward = 50;
    let remaining = Number(blockHeight);

    while (remaining > 0 && reward >= 0.00000001) {
      const blocksInEra = Math.min(remaining, 210000);
      supply += blocksInEra * reward;
      remaining -= blocksInEra;
      reward /= 2;
    }

    const mined = Math.min(supply, 21000000);
    const percent = (mined / 21000000) * 100;

    return { mined, percent };
  } catch {
    return null;
  }
}

async function fetchBtcPrice(): Promise<{
  price: number;
  change4yr: number;
} | null> {
  const apiKey = process.env.TWELVEDATA_API_KEY;
  if (!apiKey) return null;

  try {
    const priceRes = await fetch(
      `https://api.twelvedata.com/price?symbol=BTC/USD&apikey=${apiKey}`,
      { signal: AbortSignal.timeout(15000) }
    );
    if (!priceRes.ok) return null;
    const priceData = await priceRes.json();
    const currentPrice = parseFloat(priceData?.price);
    if (isNaN(currentPrice)) return null;

    const fourYearsAgo = new Date();
    fourYearsAgo.setFullYear(fourYearsAgo.getFullYear() - 4);
    const dateStr = fourYearsAgo.toISOString().split("T")[0];

    const histRes = await fetch(
      `https://api.twelvedata.com/time_series?symbol=BTC/USD&interval=1day&start_date=${dateStr}&end_date=${dateStr}&apikey=${apiKey}`,
      { signal: AbortSignal.timeout(15000) }
    );

    let change4yr = 0;
    if (histRes.ok) {
      const histData = await histRes.json();
      const oldPrice = parseFloat(histData?.values?.[0]?.close);
      if (!isNaN(oldPrice) && oldPrice > 0) {
        change4yr = ((currentPrice - oldPrice) / oldPrice) * 100;
      }
    }

    return { price: currentPrice, change4yr };
  } catch {
    return null;
  }
}

async function fetchInflation(): Promise<number | null> {
  const apiKey = process.env.FRED_API_KEY;
  if (!apiKey) return null;

  try {
    const url =
      `https://api.stlouisfed.org/fred/series/observations?series_id=CPIAUCSL&sort_order=desc&limit=60&file_type=json&api_key=${apiKey}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
    if (!res.ok) return null;
    const data = await res.json();
    const observations = data?.observations;
    if (!observations || observations.length < 2) return null;

    const latest = parseFloat(observations[0]?.value);

    const fourYearsAgoMs = Date.now() - 4 * 365.25 * 24 * 60 * 60 * 1000;
    let oldCpi: number | null = null;
    for (const obs of observations) {
      const obsDate = new Date(obs.date).getTime();
      if (obsDate <= fourYearsAgoMs && obs.value !== ".") {
        oldCpi = parseFloat(obs.value);
        break;
      }
    }

    if (oldCpi && latest && oldCpi > 0) {
      return ((latest - oldCpi) / oldCpi) * 100;
    }
    return null;
  } catch {
    return null;
  }
}

// ── Public API ────────────────────────────────────────────────────────

/**
 * Read stats from the persistent file cache.
 * If the file doesn't exist yet (first deploy), fetches fresh data and writes it.
 */
export async function getStats(): Promise<SiteStats> {
  // Try to read from file cache
  const cached = readStatsFile();
  if (cached) return cached;

  // File doesn't exist — fetch fresh data (first deploy / missing volume)
  console.log("[stats] No cached stats found, fetching fresh data...");
  const fresh = await refreshStats();
  return fresh;
}

/**
 * Fetch fresh data from all external APIs and write to /data/stats.json.
 * Called by the daily cron scheduler.
 */
export async function refreshStats(): Promise<SiteStats> {
  console.log("[stats] Refreshing stats from external APIs...");

  const [debtRaw, m1Raw, btcMined, btcPrice, inflation] = await Promise.all([
    fetchFredSeries("GFDEBTN"),
    fetchFredSeries("M1SL"),
    fetchBitcoinMined(),
    fetchBtcPrice(),
    fetchInflation(),
  ]);

  const stats: SiteStats = {
    lastUpdated: new Date().toISOString(),
    nationalDebtTrillions: debtRaw ? (debtRaw / 1_000_000).toFixed(1) : FALLBACK_STATS.nationalDebtTrillions,
    m1SupplyTrillions: m1Raw ? (m1Raw / 1_000).toFixed(1) : FALLBACK_STATS.m1SupplyTrillions,
    bitcoinMined: btcMined
      ? `${(btcMined.mined / 1_000_000).toFixed(1)} million`
      : FALLBACK_STATS.bitcoinMined,
    bitcoinPercentMined: btcMined ? btcMined.percent.toFixed(1) : FALLBACK_STATS.bitcoinPercentMined,
    btcPrice: btcPrice
      ? btcPrice.price.toLocaleString("en-US", { maximumFractionDigits: 0 })
      : FALLBACK_STATS.btcPrice,
    btcChange4yr: btcPrice ? btcPrice.change4yr.toFixed(1) : FALLBACK_STATS.btcChange4yr,
    usdInflation4yr: inflation ? inflation.toFixed(1) : FALLBACK_STATS.usdInflation4yr,
  };

  writeStatsFile(stats);
  console.log("[stats] Stats refreshed and saved:", stats.lastUpdated);

  return stats;
}
