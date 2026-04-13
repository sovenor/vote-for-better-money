"use client";

import { useEffect, useState } from "react";
import type { SiteStats } from "@/lib/api";
import StatCard from "@/components/StatCard";
import { EXTERNAL_LINKS } from "@/lib/constants";

export default function DynamicStatsBar() {
  const [stats, setStats] = useState<SiteStats | null>(null);

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then(setStats)
      .catch(() => {});
  }, []);

  return (
    <div className="grid grid-cols-2 gap-3">
      <StatCard
        label="Bitcoin"
        value={
          stats?.btcChange4yr
            ? `+${stats.btcChange4yr}%`
            : stats === null
              ? "..."
              : "Gained value"
        }
        sublabel="Last 4 years"
        success
        href={EXTERNAL_LINKS.btcPriceReport4yr}
        sourceLabel="BTC Price Report"
      />
      <StatCard
        label="US Dollar"
        value={
          stats?.usdInflation4yr
            ? `-${stats.usdInflation4yr}%`
            : stats === null
              ? "..."
              : "Lost value"
        }
        sublabel="Purchasing power lost over 4 years"
        danger
        href={EXTERNAL_LINKS.fredCPI}
        sourceLabel="FRED CPI"
      />
    </div>
  );
}
