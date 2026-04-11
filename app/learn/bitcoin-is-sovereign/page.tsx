import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleNav from "@/components/ArticleNav";
import StatCard from "@/components/StatCard";
import FreedomCard, { UnlockIcon, DiamondIcon, StarIcon } from "@/components/FreedomCard";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bitcoin is Sovereign",
  description:
    "Bitcoin is sovereign because it's a new system, independent from corrupt politicians and their broken promises.",
  alternates: { canonical: `${SITE_URL}/learn/bitcoin-is-sovereign` },
  openGraph: {
    title: "Bitcoin is Sovereign | Vote For Better Money",
    url: `${SITE_URL}/learn/bitcoin-is-sovereign`,
    images: [{ url: "/img/meta/meta-sovereign.png", width: 1200, height: 630 }],
  },
};

export default function BitcoinIsSovereignPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs
        items={[
          { label: "Learn", href: "/learn" },
          { label: "Bitcoin is Sovereign" },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
        Bitcoin is Sovereign
      </h1>

      <div className="article-content">
        <p className="text-lg sm:text-xl text-muted leading-relaxed">
          <strong className="text-foreground">Bitcoin is sovereign</strong>&nbsp;because
          it&apos;s a new system, independent from corrupt politicians.
        </p>

        <div className="my-8 grid grid-cols-2 gap-3">
          <StatCard
            label="Politicians"
            value="Promises"
            sublabel="Rarely kept after election day"
            danger
          />
          <StatCard
            label="Bitcoin"
            value="Proof"
            sublabel="Works today, no promises needed"
            success
          />
        </div>

        <div className="flex items-center gap-3 mb-2 mt-12">
          <span className="text-xs uppercase tracking-wider text-accent font-bold whitespace-nowrap">The Problem</span>
          <div className="flex-1 h-px bg-accent/40" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          A Broken System
        </h2>

        <p>
          Every election cycle, we vote for someone who says they&apos;ll make things
          better. They promise to fix big problems like corruption, schools, and
          inflation. But even after they win, things don&apos;t really change.
        </p>

        <p>
          Instead of trying to change things from within a broken system, Bitcoin
          has built a new system — one that isn&apos;t controlled by politicians and
          works today, without empty campaign promises or requests for donations.
        </p>

        <div className="flex items-center gap-3 mb-2 mt-12">
          <span className="text-xs uppercase tracking-wider text-accent font-bold whitespace-nowrap">The Solution</span>
          <div className="flex-1 h-px bg-accent/40" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          A New System Built on Freedom
        </h2>

        <p>
          Bitcoin gives you the freedom to save and spend your money without
          restrictions. And it restricts politicians from being able to print
          more of it and cause inflation.
        </p>

      </div>

      <ArticleNav currentSlug="bitcoin-is-sovereign" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bitcoin is Sovereign",
            description:
              "Bitcoin is sovereign because it's a new system, independent from corrupt politicians.",
            url: `${SITE_URL}/learn/bitcoin-is-sovereign`,
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
