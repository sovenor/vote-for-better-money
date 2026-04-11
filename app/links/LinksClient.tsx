"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

const SHAREABLE_LINKS = [
  { url: "https://voteforbetter.money", label: "Homepage", description: "Main educational page" },
  { url: "https://voteforbetter.money/learn", label: "Learn", description: "All Bitcoin topics" },
  { url: "https://voteforbetter.money/learn/bitcoin-is-american", label: "Bitcoin is American", description: "Freedom & proof of work" },
  { url: "https://voteforbetter.money/learn/bitcoin-is-sovereign", label: "Bitcoin is Sovereign", description: "Independent from politicians" },
  { url: "https://voteforbetter.money/learn/bitcoin-is-scarce", label: "Bitcoin is Scarce", description: "21 million fixed supply" },
  { url: "https://voteforbetter.money/learn/bitcoin-is-decentralized", label: "Bitcoin is Decentralized", description: "No single point of control" },
  { url: "https://voteforbetter.money/learn/bitcoin-is-permissionless", label: "Bitcoin is Permissionless", description: "Open to everyone" },
  { url: "https://voteforbetter.money/how-to-use-bitcoin", label: "How to Use Bitcoin", description: "Buy, earn & self-custody" },
];

export default function LinksClient() {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  async function copyLink(url: string) {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(null), 2000);
    } catch {
      // Fallback
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(null), 2000);
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs items={[{ label: "Share Links" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
        Share Links
      </h1>

      <div className="article-content">
        <p className="text-lg text-muted leading-relaxed mb-8">
          Our mission is to show Americans they can vote for better money. You can
          help by sharing a link with someone you know.
        </p>

        <p className="text-sm text-muted mb-6">
          Tap a link below to copy it, then paste it into a text or email.
        </p>
      </div>

      <div className="space-y-3 mb-12">
        {SHAREABLE_LINKS.map((link) => (
          <button
            key={link.url}
            onClick={() => copyLink(link.url)}
            className="w-full text-left p-4 rounded-xl bg-card border border-card-border hover:border-accent/40 transition-all group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                  {link.label}
                </p>
                <p className="text-xs text-muted mt-0.5">{link.description}</p>
              </div>
              <span className="text-xs font-medium shrink-0 ml-4">
                {copiedUrl === link.url ? (
                  <span className="text-success">Copied! ✓</span>
                ) : (
                  <span className="text-accent">Copy</span>
                )}
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4">
        <Link href="/flyers" className="btn-primary">
          Get Flyers
        </Link>
      </div>

      {/* Toast notification */}
      {copiedUrl && <div className="toast">Link copied!</div>}
    </div>
  );
}
