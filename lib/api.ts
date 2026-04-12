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

/**
 * Fetch site stats directly from external APIs via shared server logic.
 * Used by server components — calls the APIs directly, no self-referencing HTTP.
 */
export async function fetchStats(): Promise<SiteStats> {
  const { getStats } = await import("./stats");
  return getStats();
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
