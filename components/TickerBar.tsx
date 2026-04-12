"use client";

import { useEffect, useState } from "react";
import type { SiteStats } from "@/lib/api";

export default function TickerBar() {
  const [stats, setStats] = useState<SiteStats | null>(null);

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then(setStats)
      .catch(() => {});
  }, []);

  if (!stats || (!stats.btcChange4yr && !stats.usdInflation4yr)) return null;

  return (
    <div className="bg-surface border-t border-card-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center gap-4 sm:gap-8 py-2 text-xs sm:text-sm overflow-x-auto">
          {stats.btcChange4yr && (
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-accent font-bold">Bitcoin</span>
              <span className="text-success font-medium">
                {stats.btcChange4yr.startsWith("-") ? "" : "+"}
                {stats.btcChange4yr}% (4yr)
              </span>
            </div>
          )}
          {stats.btcChange4yr && stats.usdInflation4yr && (
            <span className="text-card-border hidden sm:inline">|</span>
          )}
          {stats.usdInflation4yr && (
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-muted font-bold">Dollar</span>
              <span className="text-danger font-medium">
                -{stats.usdInflation4yr}% purchasing power (4yr)
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
