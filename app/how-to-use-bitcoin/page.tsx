import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import StatCard from "@/components/StatCard";
import TopicCard from "@/components/TopicCard";
import { fetchStats } from "@/lib/api";
import { SITE_URL, EXTERNAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How to Use Bitcoin",
  description:
    "Whether you buy or earn Bitcoin, it's important to take full control of it. Learn how to buy, earn, and self-custody your Bitcoin.",
  alternates: { canonical: `${SITE_URL}/how-to-use-bitcoin` },
  openGraph: {
    title: "How to Use Bitcoin | Vote For Better Money",
    description:
      "Whether you buy or earn Bitcoin, it's important to take full control of it. Learn how to buy, earn, and self-custody your Bitcoin.",
    url: `${SITE_URL}/how-to-use-bitcoin`,
    images: [{ url: "/img/meta/meta-home-v2.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Use Bitcoin | Vote For Better Money",
    description:
      "Whether you buy or earn Bitcoin, it's important to take full control of it. Learn how to buy, earn, and self-custody your Bitcoin.",
  },
};

export default async function HowToUseBitcoinPage() {
  const stats = await fetchStats();

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs items={[{ label: "How to Use Bitcoin" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
        How to Use Bitcoin
      </h1>

      <div className="article-content">
        <p className="text-lg sm:text-xl text-muted leading-relaxed">
          Whether you buy Bitcoin or earn Bitcoin, it&apos;s important to take full
          control of it. Taking full control of your Bitcoin transforms it into{" "}
          <Link href="/learn/bitcoin-is-permissionless">freedom money</Link>.
        </p>

        <p>
          Freedom money is money no one can censor, freeze, or seize — and if
          you can download an app, you can have it.
        </p>

        {/* Buy Bitcoin */}<h2 className="text-2xl font-bold text-foreground mb-6">
          Long Term Savings Account
        </h2>

        <p>
          Bitcoin is best used as a long term savings account. Because the value can go up and down in the short term, it's important to only put money in that you don't need to use for several years.
        </p>
        <p>
          Over the long term, Bitcoin is a much better savings account than dollars which consistently lose value due to inflation.
        </p>

        <div className="my-8 grid grid-cols-2 gap-3">
          <StatCard
            label="Bitcoin"
            value={stats.btcChange4yr ? `+${stats.btcChange4yr}%` : "Gained value"}
            sublabel="Last 4 years"
            success
          />
          <StatCard
            label="US Dollar"
            value={stats.usdInflation4yr ? `-${stats.usdInflation4yr}%` : "Lost value"}
            sublabel="Purchasing power lost over 4 years"
            danger
          />
        </div>

        <div className="flex items-center gap-3 mb-2 mt-12">
          <span className="text-xs uppercase tracking-wider text-accent font-bold whitespace-nowrap">Step 1</span>
          <div className="flex-1 h-px bg-accent/40" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Buy Bitcoin
        </h2>

        <p>
          You may already have an app that gives you access to Bitcoin.
          Here are some of our favorite apps for buying Bitcoin:
        </p>

        <div className="my-8 grid grid-cols-2 gap-3">
          <TopicCard
            title="Cash App"
            description="A simple way to buy Bitcoin with an app you might already have."
            href={EXTERNAL_LINKS.cashApp}
            external
          />
          <TopicCard
            title="Strike"
            description="Buy Bitcoin and set up automatic recurring purchases."
            href={EXTERNAL_LINKS.strike}
            external
          />
        </div>

        <p>
          After you get some Bitcoin, it&apos;s important that you take full control
          of it. Here&apos;s how:
        </p>

        <div className="flex items-center gap-3 mb-2 mt-12">
          <span className="text-xs uppercase tracking-wider text-accent font-bold whitespace-nowrap">Step 2</span>
          <div className="flex-1 h-px bg-accent/40" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Take Full Control
        </h2>

        <p>
          If you leave your Bitcoin in the app where you bought it, you
          don&apos;t get any of the{" "}
          <Link href="/learn/bitcoin-is-permissionless">freedom benefits.</Link>{" "}
          The same is true if you buy a Bitcoin ETF — no freedom benefits,
          no withdrawals, and you&apos;ll pay a fee every year.
        </p>

        <div className="my-8 grid grid-cols-2 gap-3">
          <StatCard
            label="Self-Custody"
            value="Free"
            sublabel="Full freedom. No annual fees."
            success
          />
          <StatCard
            label="Bitcoin ETF"
            value="Fees"
            sublabel="No freedom. Annual fees forever."
            danger
          />
        </div>

        <p>
          To use your Bitcoin as{" "}
          <Link href="/learn/bitcoin-is-permissionless">freedom money,</Link>{" "}
          simply withdraw it from the app where you bought it to a wallet you
          control. If you can download an app, you can take full control of your Bitcoin.
        </p>

        <div className="my-8 grid grid-cols-2 gap-3">
          <TopicCard
            title="Blockstream Green"
            description="Our favorite free mobile wallet for taking full control of your Bitcoin."
            href={EXTERNAL_LINKS.blockstreamGreen}
            external
          />
          <TopicCard
            title="Full Wallet Guide"
            description="Explore more Bitcoin wallet options to find the right one for you."
            href={EXTERNAL_LINKS.bitcoinRocksWallets}
            external
          />
        </div>

        <div className="flex items-center gap-3 mb-2 mt-12">
          <span className="text-xs uppercase tracking-wider text-accent font-bold whitespace-nowrap">Step 3</span>
          <div className="flex-1 h-px bg-accent/40" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Earn Bitcoin
        </h2>

        <p>
          There&apos;s a growing movement of people saying &quot;Pay me in Bitcoin!&quot;
          Whether you&apos;re a pro athlete or a regular person, you can be paid in
          Bitcoin. You can start asking to be paid in Bitcoin too.
        </p>

        <div className="my-8 grid grid-cols-2 gap-3">
          <TopicCard
            title="Strike"
            description="Automatically convert a portion of your paycheck into Bitcoin each month."
            href={EXTERNAL_LINKS.strike}
            external
          />
          <TopicCard
            title="Bitcoin for Business"
            description="Learn why more and more businesses are accepting Bitcoin."
            href={EXTERNAL_LINKS.bitcoinRocksBusiness}
            external
          />
        </div>
      </div>

      {/* Learn More */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Learn more about Bitcoin
        </h2>
        <p className="mb-7 text-muted">
          You don&apos;t need to wait for election day to vote for better money.
          Bitcoin is better money — and you can start using it today.
        </p>
        <div className="grid grid-cols-1 gap-4 mb-0">
          <TopicCard
            title="Learn About Bitcoin"
            description="Discover why Bitcoin is scarce, decentralized, permissionless, sovereign, and American."
            href="/learn"
          />
          <TopicCard
            title="Bitcoin is Improving the World"
            description="See how Bitcoin is making a difference for people everywhere."
            href={EXTERNAL_LINKS.bitcoinRocks}
            external
          />
        </div>
      </div>

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "How to Use Bitcoin" },
            ],
          }),
        }}
      />
    </div>
  );
}
