import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleNav from "@/components/ArticleNav";
import StatCard from "@/components/StatCard";
import TopicCard from "@/components/TopicCard";
import { fetchStats } from "@/lib/api";
import { SITE_URL, EXTERNAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bitcoin is Scarce",
  description:
    "Bitcoin is scarce because it has a maximum supply of 21 million Bitcoin. Unlike dollars, no one can print more Bitcoin.",
  alternates: { canonical: `${SITE_URL}/learn/bitcoin-is-scarce` },
  openGraph: {
    title: "Bitcoin is Scarce | Vote For Better Money",
    url: `${SITE_URL}/learn/bitcoin-is-scarce`,
    images: [{ url: "/img/meta/meta-scarce.png", width: 1200, height: 630 }],
  },
};

export default async function BitcoinIsScarcePage() {
  const stats = await fetchStats();

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs
        items={[
          { label: "Learn", href: "/learn" },
          { label: "Bitcoin is Scarce" },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
        Bitcoin is Scarce
      </h1>

      <div className="article-content">
        <p className="text-lg sm:text-xl text-muted leading-relaxed">
          <strong className="text-foreground">Bitcoin is scarce</strong> because it
          has a maximum supply of 21 million Bitcoin. Unlike dollars, no one can
          print more Bitcoin.
        </p>

        {/* Dynamic stats */}
        <div className="grid grid-cols-2 gap-3 my-8">
          <StatCard
            label="Maximum Supply"
            value="21 Million"
            sublabel="Fixed forever"
            accent
          />
          <StatCard
            label="Already Mined"
            value={`${stats.bitcoinPercentMined}%`}
            sublabel={stats.bitcoinMined}
          />
        </div>

        <div className="flex items-center gap-3 mb-2 mt-12">
          <span className="text-xs uppercase tracking-wider text-accent font-bold whitespace-nowrap">Capped Supply</span>
          <div className="flex-1 h-px bg-accent/40" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          No One Can Print More
        </h2>

        <p>
          The 21 million cap was set by Bitcoin&apos;s creator, Satoshi Nakamoto.
          This limit was chosen to introduce scarcity, similar to precious metals
          like gold. Unlike regular money, no one can cause inflation in the
          Bitcoin system.
        </p>

        <div className="my-8 grid grid-cols-2 gap-3">
          <StatCard
            label="Bitcoin"
            value="21 Million"
            detail="(21,000,000)"
            sublabel="Fixed forever"
            success
          />
          <StatCard
            label="US Dollar"
            value={`${stats.m1SupplyTrillions} Trillion`}
            detail={`(${(parseFloat(stats.m1SupplyTrillions) * 1_000_000_000_000).toLocaleString("en-US", { maximumFractionDigits: 0 })})`}
            sublabel="And counting..."
            danger
          />
        </div>

        <div className="flex items-center gap-3 mb-2 mt-12">
          <span className="text-xs uppercase tracking-wider text-accent font-bold whitespace-nowrap">Proof of Work</span>
          <div className="flex-1 h-px bg-accent/40" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Mining &amp; Halving
        </h2>

        <p>
          New Bitcoin are created through a process called mining. Miners use
          &quot;proof of work&quot; — computers put in lots of effort to create Bitcoin
          and confirm transactions. This is like digital hard work.
        </p>

        <p>
          The reward miners receive is halved approximately every four years — an
          event known as the &quot;halving.&quot; This gradual reduction ensures the total
          supply will never exceed 21 million.
        </p>

        <div className="my-8 grid grid-cols-2 gap-3">
          <StatCard
            label="Last Bitcoin Mined"
            value="~2140"
            sublabel="Over 100 years from now"
            accent
          />
          <StatCard
            label="After That?"
            value="Still Works"
            sublabel="Transaction fees keep it running"
            accent
          />
        </div>

        <div className="flex items-center gap-3 mb-2 mt-12">
          <span className="text-xs uppercase tracking-wider text-accent font-bold whitespace-nowrap">Blockchain</span>
          <div className="flex-1 h-px bg-accent/40" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Verified by Everyone
        </h2>

        <p>
          The Bitcoin blockchain records all transactions and is maintained by a
          network of computers (called nodes) all around the world. These nodes
          make the 21 million supply cap transparent and verifiable — no one can
          break the rules.
        </p>

        <div className="my-8 grid grid-cols-1 gap-3">
          <TopicCard
            title="Run a Bitcoin Node"
            description="Download the free software and verify Bitcoin's rules yourself."
            href={EXTERNAL_LINKS.bitcoinNode}
            external
          />
        </div>

        <p className="text-lg font-medium text-foreground">
          Bitcoin is scarce. Bitcoin is better money.
        </p>
      </div>

      <ArticleNav currentSlug="bitcoin-is-scarce" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bitcoin is Scarce",
            description:
              "Bitcoin is scarce because it has a maximum supply of 21 million Bitcoin.",
            url: `${SITE_URL}/learn/bitcoin-is-scarce`,
            publisher: {
              "@type": "Organization",
              name: "Vote For Better Money",
              url: SITE_URL,
            },
          }),
        }}
      />
    </div>
  );
}
