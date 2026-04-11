import { NextResponse } from "next/server";

interface StatsCache {
  data: Record<string, string>;
  timestamp: number;
}

let cache: StatsCache | null = null;
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes

async function fetchFredSeries(seriesId: string): Promise<number | null> {
  try {
    // FRED API - keyless access (limited to 120 req/min, plenty for our cache)
    const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${seriesId}&sort_order=desc&limit=1&file_type=json&api_key=DEMO_KEY`;
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
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
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    const blockHeight = await res.json();

    // Calculate approximate bitcoin supply from block height
    // Reward schedule: 50 BTC per block, halving every 210,000 blocks
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
    // Get current price
    const priceRes = await fetch(
      `https://api.twelvedata.com/price?symbol=BTC/USD&apikey=${apiKey}`,
      { signal: AbortSignal.timeout(8000) }
    );
    if (!priceRes.ok) return null;
    const priceData = await priceRes.json();
    const currentPrice = parseFloat(priceData?.price);
    if (isNaN(currentPrice)) return null;

    // Get price from ~4 years ago for % change
    const fourYearsAgo = new Date();
    fourYearsAgo.setFullYear(fourYearsAgo.getFullYear() - 4);
    const dateStr = fourYearsAgo.toISOString().split("T")[0];

    const histRes = await fetch(
      `https://api.twelvedata.com/time_series?symbol=BTC/USD&interval=1day&start_date=${dateStr}&end_date=${dateStr}&apikey=${apiKey}`,
      { signal: AbortSignal.timeout(8000) }
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
  try {
    // CPI from FRED - get latest and 4 years prior
    const url =
      "https://api.stlouisfed.org/fred/series/observations?series_id=CPIAUCSL&sort_order=desc&limit=50&file_type=json&api_key=DEMO_KEY";
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return null;
    const data = await res.json();
    const observations = data?.observations;
    if (!observations || observations.length < 2) return null;

    const latest = parseFloat(observations[0]?.value);

    // Find observation closest to 4 years ago
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

export async function GET() {
  // Return cached data if fresh
  if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
    return NextResponse.json(cache.data, {
      headers: {
        "Cache-Control": "public, s-maxage=900, stale-while-revalidate=1800",
      },
    });
  }

  // Fetch all data in parallel
  const [debtRaw, m1Raw, btcMined, btcPrice, inflation] = await Promise.all([
    fetchFredSeries("GFDEBTN"), // National debt in millions
    fetchFredSeries("M1SL"),    // M1 money supply in billions
    fetchBitcoinMined(),
    fetchBtcPrice(),
    fetchInflation(),
  ]);

  const stats: Record<string, string> = {
    lastUpdated: new Date().toISOString(),
  };

  // National debt (FRED returns in millions of dollars)
  if (debtRaw) {
    const trillions = debtRaw / 1_000_000;
    stats.nationalDebtTrillions = trillions.toFixed(1);
  } else {
    stats.nationalDebtTrillions = "36";
  }

  // Bitcoin mined
  if (btcMined) {
    stats.bitcoinMined = `${(btcMined.mined / 1_000_000).toFixed(1)} million`;
    stats.bitcoinPercentMined = btcMined.percent.toFixed(1);
  } else {
    stats.bitcoinMined = "19.8 million";
    stats.bitcoinPercentMined = "94";
  }

  // BTC price
  if (btcPrice) {
    stats.btcPrice = btcPrice.price.toLocaleString("en-US", {
      maximumFractionDigits: 0,
    });
    stats.btcChange4yr = btcPrice.change4yr.toFixed(1);
  } else {
    stats.btcPrice = "";
    stats.btcChange4yr = "";
  }

  // M1 Money Supply (FRED returns M1SL in billions of dollars)
  if (m1Raw) {
    const trillions = m1Raw / 1_000;
    stats.m1SupplyTrillions = trillions.toFixed(1);
  } else {
    stats.m1SupplyTrillions = "18.4";
  }

  // USD inflation
  if (inflation) {
    stats.usdInflation4yr = inflation.toFixed(1);
  } else {
    stats.usdInflation4yr = "";
  }

  // Update cache
  cache = { data: stats, timestamp: Date.now() };

  return NextResponse.json(stats, {
    headers: {
      "Cache-Control": "public, s-maxage=900, stale-while-revalidate=1800",
    },
  });
}
