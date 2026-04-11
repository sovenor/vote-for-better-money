export interface SiteStats {
  nationalDebtTrillions: string;
  m1SupplyTrillions: string;
  bitcoinMined: string;
  bitcoinPercentMined: string;
  btcPrice: string;
  btcChange4yr: string;
  usdInflation4yr: string;
  lastUpdated: string;
}

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

/**
 * Fetch site stats from our internal API route.
 * Used by server components with ISR revalidation.
 */
export async function fetchStats(): Promise<SiteStats> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://voteforbetter.money";
    const res = await fetch(`${baseUrl}/api/stats`, {
      next: { revalidate: 900 }, // 15 minutes
    });
    if (!res.ok) throw new Error(`Stats API returned ${res.status}`);
    return await res.json();
  } catch {
    // Return fallback stats if API is unavailable
    return FALLBACK_STATS;
  }
}

/**
 * Format a large number as a readable string (e.g., 36.2 trillion)
 */
export function formatTrillions(value: number): string {
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)} trillion`;
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1)} billion`;
  }
  return `${value.toFixed(1)} million`;
}

/**
 * Format a number as USD currency
 */
export function formatUSD(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Format a percentage with sign
 */
export function formatPercent(value: number, showSign = true): string {
  const sign = showSign && value > 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}%`;
}
