import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TopicCard from "@/components/TopicCard";
import StatCard from "@/components/StatCard";
import FredComparisonCard from "@/components/FredComparisonCard";
import FreedomCard, {
  GlobeIcon,
  UnlockIcon,
  ShieldIcon,
  StarIcon,
  BoltIcon,
  LeafIcon,
  BankIcon,
  FistIcon,
} from "@/components/FreedomCard";
import { fetchStats } from "@/lib/api";
import {
  SITE_NAME,
  SITE_URL,
  EXTERNAL_LINKS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_NAME} — Bitcoin is Better Money`,
  description:
    "Our money is broken. Prices keep going up. Bitcoin is better money — and you can vote for better money by using Bitcoin today.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${SITE_NAME} — Bitcoin is Better Money`,
    url: SITE_URL,
    images: [{ url: "/img/meta/meta-home.png", width: 1200, height: 630 }],
  },
};

export default async function HomePage() {
  const stats = await fetchStats();

  return (
    <>
      {/* Hero Section */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 pt-12 pb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
          <Image
            src="/img/logo-dark-mode-v3.png"
            alt="Vote for Better Money logo"
            width={150}
            height={108}
            className="mx-auto mb-4"
            priority
          />
        </h1>
        <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-xl mx-auto">
          Election after election, politicians promise to fix America. But after
          they&apos;re elected, they rarely keep their promises. What if you could
          vote for better money instead?
        </p>
        <p className="text-lg sm:text-xl text-foreground leading-relaxed max-w-xl mx-auto mt-4">
          You can. <strong className="text-accent">Bitcoin is better money.</strong>{" "}
          And you don&apos;t need to wait for election day to start using it.
        </p>
      </section>

      {/* Dynamic Stats Bar */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-2 gap-3">
          <StatCard
            label="Bitcoin"
            value={stats.btcChange4yr ? `+${stats.btcChange4yr}%` : "No data"}
            sublabel="Last 4 years"
            success
          />
          <StatCard
            label="US Dollar"
            value={stats.usdInflation4yr ? `-${stats.usdInflation4yr}%` : "No data"}
            sublabel="Purchasing power lost"
            danger
          />
        </div>
      </section>

      {/* The Problem */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <div className="article-content">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Here&apos;s the proof: your money is losing value
          </h2>

          <p>
            The dollars in your bank account buy you less every year. That&apos;s
            because there is no fixed limit on how many dollars can be created.
          </p>

          <p>
            This unlimited supply is the root cause of inflation. Over recent
            years, the total amount of dollars in existence has {" "}
              <a href={EXTERNAL_LINKS.fredM1} target="_blank" rel="noopener noreferrer">increased dramatically.
              </a>
          </p>

          <div className="my-8">
            <FredComparisonCard
              title="DOLLARS IN EXISTENCE"
              source="Source: FRED M1 Money Supply"
              baselineLabel="Jan 2020"
              baselineValue={4.0}
              currentValue={parseFloat(stats.m1SupplyTrillions)}
              href={EXTERNAL_LINKS.fredM1}
            />
          </div>

          <p>
            When more money is created from nothing, the price of everything goes
            up. This includes the raw materials that companies buy to make their
            products — which means higher prices for you.
          </p>

          <p>
            It doesn&apos;t matter which party is in power. Both parties print money
            and cause inflation. Our national debt has surpassed{" "}
            <strong>${stats.nationalDebtTrillions} trillion dollars</strong> thanks
            to both Democrats and Republicans.
          </p>

          <div className="my-8">
            <FredComparisonCard
              title="TOTAL FEDERAL DEBT"
              source="Source: FRED GFDEBTN"
              baselineLabel="Q1 2020"
              baselineValue={23.2}
              currentValue={parseFloat(stats.nationalDebtTrillions)}
              href={EXTERNAL_LINKS.fredDebt}
            />
          </div>

          <p>More federal debt means more money printing. More money printing means more inflation. And there&apos;s no sign of it stopping.</p>
        </div>
      </section>

      {/* The Solution */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <div className="article-content">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Bitcoin is better money
          </h2>

          <p>
            Inflation means your money buys you less over time. Bitcoin is better
            money because it doesn&apos;t have inflation.
          </p>

          <p>
            Dollars have an unlimited supply, which means more can be printed at
            any time.{" "}
            <Link href="/learn/bitcoin-is-scarce">Bitcoin is scarce</Link>{" "}
            because it has a maximum supply of 21 million Bitcoin. No one can
            print more Bitcoin.
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

          <p>
            Historically, Bitcoin has gained purchasing power over time while the
            dollar has lost it. Many people use Bitcoin as their long-term savings.
          </p>

          <p>
            Would you rather save in dollars that buy you less over time? Or save
            in Bitcoin that has historically bought you more over time?
          </p>
        </div>
      </section>

      {/* Freedom Section */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <div className="article-content">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Bitcoin is also a tool for freedom
          </h2>

          <p>
            The Bitcoin network isn&apos;t owned by anyone. It isn&apos;t controlled
            by any government or corporation. And people around the world are
            already using it to protect their freedom.
          </p>

          <div className="my-8 grid grid-cols-2 gap-3">
            <FreedomCard
              icon={<GlobeIcon />}
              title="Decentralized"
              description="No single entity — no government, no corporation — controls Bitcoin."
              href="/learn/bitcoin-is-decentralized"
            />
            <FreedomCard
              icon={<UnlockIcon />}
              title="Permissionless"
              description="Anyone, anywhere can join the network. No one can stop you."
              href="/learn/bitcoin-is-permissionless"
            />
            <FreedomCard
              icon={<ShieldIcon />}
              title="Sovereign"
              description="A new system, independent from politicians and their broken promises."
              href="/learn/bitcoin-is-sovereign"
            />
            <FreedomCard
              icon={<StarIcon />}
              title="American"
              description="Upholds freedom and respects proof of work — core American values."
              href="/learn/bitcoin-is-american"
            />
          </div>

          <p>
            People around the world are already using Bitcoin to protect their
            freedom — even when their own governments tried to stop them.
          </p>

          <div className="my-8 grid grid-cols-2 gap-3">
            <FreedomCard
              icon={<BoltIcon />}
              title="Texas"
              description="Bitcoin mining helped keep the lights on during a massive storm."
              href={EXTERNAL_LINKS.texasMining}
              external
            />
            <FreedomCard
              icon={<LeafIcon />}
              title="Pennsylvania"
              description="Bitcoin mining cleaned up coal waste the government refused to."
              href={EXTERNAL_LINKS.pennsylvaniaMining}
              external
            />
            <FreedomCard
              icon={<BankIcon />}
              title="Canada"
              description="Workers used Bitcoin to access money after their accounts were frozen."
              href={EXTERNAL_LINKS.canadaTruckers}
              external
            />
            <FreedomCard
              icon={<FistIcon />}
              title="Nigeria"
              description="Protesters used Bitcoin to fund their movement after banks cut them off."
              href={EXTERNAL_LINKS.nigeriaEndSars}
              external
            />
          </div>

          <p className="text-lg font-medium text-foreground">
            You don&apos;t need to wait for election day to vote for better money.
            Bitcoin is better money — and you can start using it today.
          </p>
        </div>
      </section>

      {/* CTA Cards */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 gap-4">
          <TopicCard
            title="Bitcoin is Improving the World"
            description="See how Bitcoin is making a difference for people everywhere."
            href={EXTERNAL_LINKS.bitcoinRocks}
            external
          />
          <TopicCard
            title="How to Use Bitcoin"
            description="Buy Bitcoin, earn Bitcoin, and take full control of your money."
            href="/how-to-use-bitcoin"
          />
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is Vote For Better Money?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Vote For Better Money is a campaign to show Americans they can choose better money by using Bitcoin. Instead of waiting for politicians to fix the economy, you can opt into a monetary system with a fixed supply of 21 million.",
                },
              },
              {
                "@type": "Question",
                name: "Why is Bitcoin better money?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bitcoin has a fixed supply of 21 million coins. Unlike dollars, no one can print more Bitcoin, which means no one can cause inflation in the Bitcoin system. Bitcoin is also decentralized, permissionless, and not controlled by any government or corporation.",
                },
              },
              {
                "@type": "Question",
                name: "How do I start using Bitcoin?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can buy Bitcoin through apps like Cash App, Strike, or exchanges like River. After buying, it's important to withdraw your Bitcoin to a wallet you control, like Blockstream Green, to get the full freedom benefits.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
