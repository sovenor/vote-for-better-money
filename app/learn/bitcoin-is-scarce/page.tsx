import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleNav from "@/components/ArticleNav";
import StatCard from "@/components/StatCard";
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

        <h2 className="text-2xl font-bold text-foreground mb-6">
          Capped Supply
        </h2>

        <p>
          The 21 million cap was set by Bitcoin&apos;s creator, Satoshi Nakamoto.
          This limit was chosen to introduce scarcity, similar to precious metals
          like gold.
        </p>

        <p>
          Scarcity is a key feature that can help to maintain and potentially
          increase the value of an asset over time.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-6">
          How it Works
        </h2>

        <p>
          New Bitcoin are created through a process called mining. Miners use
          &quot;proof of work&quot; — computers put in lots of effort to create Bitcoin
          and confirm transactions. This is like digital hard work.
        </p>

        <p>
          And unlike regular money, there&apos;s a cap to the amount of Bitcoin
          that can ever exist. This means it doesn&apos;t lose value like dollars
          because no one can cause inflation in the Bitcoin system.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-6">
          Halving Events
        </h2>

        <p>
          The reward miners receive for their digital hard work is halved
          approximately every four years, an event known as the &quot;halving.&quot; This
          gradual reduction in the new supply ensures that the total supply will
          never exceed 21 million.
        </p>

        <p>
          The last Bitcoin is expected to be mined around the year 2140. Sending a
          Bitcoin transaction requires paying a small fee to miners, so even after
          all 21 million Bitcoin are mined the system will continue to function.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-6">
          The Role of the Blockchain
        </h2>

        <p>
          The Bitcoin blockchain, a decentralized ledger, records all
          transactions. It&apos;s maintained by a network of computers (called nodes)
          all around the world.
        </p>

        <p>
          Anyone can{" "}
          <a href={EXTERNAL_LINKS.bitcoinNode} target="_blank" rel="noopener noreferrer">
            download free software to run their own node.
          </a>{" "}
          Bitcoin nodes make the 21 million supply cap transparent and verifiable.
        </p>

        <p>
          No one can make more than 21 million Bitcoin because these nodes enforce
          the rules.
        </p>

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
