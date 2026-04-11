import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TopicCard from "@/components/TopicCard";
import StatCard from "@/components/StatCard";
import { fetchStats } from "@/lib/api";
import {
  SITE_NAME,
  SITE_URL,
  LEARN_ARTICLES,
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
        <Image
          src="/img/logo-dark-mode-v2.png"
          alt="Vote For Better Money"
          width={100}
          height={100}
          className="mx-auto mb-8"
          priority
        />
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
          Vote For Better Money
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
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <StatCard
            label="National Debt"
            value={`$${stats.nationalDebtTrillions}T`}
            sublabel="And growing every day"
          />
          <StatCard
            label="Bitcoin Supply"
            value="21 Million"
            sublabel="Fixed. Forever."
            accent
          />
          <StatCard
            label="Bitcoin Mined"
            value={`${stats.bitcoinPercentMined}%`}
            sublabel={`${stats.bitcoinMined} of 21M`}
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
            The dollar in your bank account buys you less every year. That&apos;s
            because there is no fixed limit on how many dollars can be created.
          </p>

          <p>
            This unlimited supply is the root cause of inflation. Over recent
            years,{" "}
            <a href={EXTERNAL_LINKS.fredM1} target="_blank" rel="noopener noreferrer">
              the total amount of dollars in existence has increased dramatically.
            </a>
          </p>

          <div className="my-8 rounded-xl overflow-hidden border border-card-border">
            <a href={EXTERNAL_LINKS.fredM1} target="_blank" rel="noopener noreferrer">
              <Image
                src="/img/guide-dollar-supply.png"
                alt="Graph showing dramatic increase in US dollar supply over time"
                width={500}
                height={300}
                className="w-full h-auto"
              />
            </a>
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

          <div className="my-8 rounded-xl overflow-hidden border border-card-border">
            <a href={EXTERNAL_LINKS.fredDebt} target="_blank" rel="noopener noreferrer">
              <Image
                src="/img/guide-party-debt.png"
                alt="Graph showing national debt increasing under both political parties"
                width={500}
                height={300}
                className="w-full h-auto"
              />
            </a>
          </div>

          <p>More money printing means more inflation. And there&apos;s no sign of it stopping.</p>
        </div>
      </section>

      {/* The Solution */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <div className="article-content">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Bitcoin is better money
          </h2>

          <p>
            Inflation is when your money buys you less over time. Bitcoin is better
            money because it doesn&apos;t have inflation.
          </p>

          <p>
            Dollars have an unlimited supply, which means more can be printed at
            any time.{" "}
            <Link href="/learn/bitcoin-is-scarce">Bitcoin is scarce</Link>{" "}
            because it has a maximum supply of 21 million Bitcoin. No one can
            print more.
          </p>

          <div className="my-8 rounded-xl overflow-hidden border border-card-border">
            <Image
              src="/img/guide-supply.png"
              alt="Comparison of dollar unlimited supply vs Bitcoin fixed 21 million supply"
              width={500}
              height={300}
              className="w-full h-auto"
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
            The Bitcoin network isn&apos;t owned by anyone.{" "}
            <Link href="/learn/bitcoin-is-decentralized">
              Bitcoin is decentralized
            </Link>{" "}
            — it isn&apos;t controlled by any government or corporation.
          </p>

          <p>
            <Link href="/learn/bitcoin-is-permissionless">
              Bitcoin is permissionless
            </Link>{" "}
            — anyone, anywhere can join the network. No one can stop you from
            accessing your money.
          </p>

          <p>
            <Link href="/learn/bitcoin-is-american">Bitcoin is American</Link>{" "}
            — it upholds freedom and respects proof of work.
          </p>

          <div className="my-8 rounded-xl overflow-hidden border border-card-border">
            <Image
              src="/img/guide-flag.png"
              alt="American flag representing Bitcoin's alignment with American values"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>

          <p>
            <a href={EXTERNAL_LINKS.texasMining} target="_blank" rel="noopener noreferrer">
              Americans in Texas used Bitcoin to help keep their lights on,
            </a>{" "}
            even during a massive storm.
          </p>

          <p>
            <a href={EXTERNAL_LINKS.pennsylvaniaMining} target="_blank" rel="noopener noreferrer">
              Americans in Pennsylvania used Bitcoin to clean up coal waste,
            </a>{" "}
            even after their own government refused to.
          </p>

          <p>
            <a href={EXTERNAL_LINKS.canadaTruckers} target="_blank" rel="noopener noreferrer">
              Workers in Canada used Bitcoin to access their money,
            </a>{" "}
            even after their own government froze their bank accounts.
          </p>

          <p>
            <a href={EXTERNAL_LINKS.nigeriaEndSars} target="_blank" rel="noopener noreferrer">
              Nigerians used Bitcoin to fight for their rights,
            </a>{" "}
            even after their banks stopped processing donations.
          </p>

          <p className="text-lg font-medium text-foreground">
            You don&apos;t need to wait for election day to vote for better money.
            Bitcoin is better money — and you can start using it today.
          </p>
        </div>
      </section>

      {/* Topic Cards Grid */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          Learn More About Bitcoin
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {LEARN_ARTICLES.map((article) => (
            <TopicCard
              key={article.slug}
              title={article.title}
              description={article.description}
              href={article.href}
            />
          ))}
          <TopicCard
            title="How to Use Bitcoin"
            description="Buy Bitcoin, earn Bitcoin, and take full control of your money."
            href="/how-to-use-bitcoin"
          />
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-8 flex flex-col items-center gap-4">
        <Link href="/learn" className="btn-primary">
          Learn About Bitcoin
        </Link>
        <Link href="/how-to-use-bitcoin" className="btn-secondary">
          How to Use Bitcoin
        </Link>
        <a
          href={EXTERNAL_LINKS.bitcoinRocks}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          bitcoin.rocks →
        </a>
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
