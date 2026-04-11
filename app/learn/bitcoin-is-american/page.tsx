import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleNav from "@/components/ArticleNav";
import StatCard from "@/components/StatCard";
import FreedomCard, { DiamondIcon, BoltIcon, LeafIcon } from "@/components/FreedomCard";
import { SITE_URL, EXTERNAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bitcoin is American",
  description:
    "Bitcoin is American because it upholds freedom and respects proof of work — core American values that align with financial independence.",
  alternates: { canonical: `${SITE_URL}/learn/bitcoin-is-american` },
  openGraph: {
    title: "Bitcoin is American | Vote For Better Money",
    description:
      "Bitcoin is American because it upholds freedom and respects proof of work — core American values that align with financial independence.",
    url: `${SITE_URL}/learn/bitcoin-is-american`,
    images: [{ url: "/img/meta/meta-home-v2.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin is American | Vote For Better Money",
    description:
      "Bitcoin is American because it upholds freedom and respects proof of work — core American values that align with financial independence.",
  },
};

export default function BitcoinIsAmericanPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs
        items={[
          { label: "Learn", href: "/learn" },
          { label: "Bitcoin is American" },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
        Bitcoin is American
      </h1>

      <div className="article-content">
        <p className="text-lg sm:text-xl text-muted leading-relaxed">
          <strong className="text-foreground">Bitcoin is American</strong> because
          it upholds freedom and respects proof of work — core American values.
        </p>

        <div className="my-8 grid grid-cols-2 gap-3">
          <StatCard
            label="American Value"
            value="Freedom"
            sublabel="Your money, your rules"
            success
          />
          <StatCard
            label="American Value"
            value="Hard Work"
            sublabel="Proof of work, not promises"
            success
          />
        </div>

        <div className="flex items-center gap-3 mb-2 mt-12">
          <span className="text-xs uppercase tracking-wider text-accent font-bold whitespace-nowrap">Freedom</span>
          <div className="flex-1 h-px bg-accent/40" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Freedom from Inflation
        </h2>

        <p>
          America is all about being free and making your own choices. But when
          banks and the government print more money, it makes the money we have
          worth less. That&apos;s called inflation, and it&apos;s a big problem.
        </p>

        <p>
          Bitcoin is different because it&apos;s not controlled by anyone. Bitcoin
          lets you handle your money on your own, without worrying about the
          government making it worth less. There&apos;s a limit on how many Bitcoin
          can ever be made — which helps keep your hard-earned money valuable.
        </p>

        <div className="my-8 grid grid-cols-1 gap-3">
          <FreedomCard
            icon={<DiamondIcon />}
            title="Bitcoin is Scarce"
            description="There will only ever be 21 million Bitcoin. No one can print more."
            href="/learn/bitcoin-is-scarce"
          />
        </div>

        <div className="flex items-center gap-3 mb-2 mt-12">
          <span className="text-xs uppercase tracking-wider text-accent font-bold whitespace-nowrap">Hard Work</span>
          <div className="flex-1 h-px bg-accent/40" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Proof of Work
        </h2>

        <p>
          In America, we believe that if you work hard, you should get rewarded.
          Bitcoin works like that too. It uses &quot;proof of work&quot; — computers put
          in lots of effort to create Bitcoin and confirm transactions. This is
          like digital hard work.
        </p>

        <div className="flex items-center gap-3 mb-2 mt-12">
          <span className="text-xs uppercase tracking-wider text-accent font-bold whitespace-nowrap">In Action</span>
          <div className="flex-1 h-px bg-accent/40" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          American Values in Action
        </h2>

        <p>
          Bitcoin brings back what America is all about: being in charge of your
          own life, your own money, and getting rewarded for your hard work.
          Americans are already putting these values into action.
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
            description="Bitcoin mining cleaned up coal waste the government refused to handle."
            href={EXTERNAL_LINKS.pennsylvaniaMining}
            external
          />
        </div>

      </div>

      <ArticleNav currentSlug="bitcoin-is-american" />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bitcoin is American",
            description:
              "Bitcoin is American because it upholds freedom and respects proof of work.",
            url: `${SITE_URL}/learn/bitcoin-is-american`,
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
