import type { Metadata } from "next";
import Link from "next/link";
import TopicCard from "@/components/TopicCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL, LEARN_ARTICLES, EXTERNAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Learn About Bitcoin",
  description:
    "Learn why Bitcoin is better money. Explore how Bitcoin is American, sovereign, scarce, decentralized, and permissionless.",
  alternates: { canonical: `${SITE_URL}/learn` },
  openGraph: {
    title: "Learn About Bitcoin | Vote For Better Money",
    url: `${SITE_URL}/learn`,
    images: [{ url: "/img/meta/meta-learn.png", width: 1200, height: 630 }],
  },
};

export default function LearnPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs items={[{ label: "Learn" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
        Learn About Bitcoin
      </h1>
      <p className="text-lg text-muted mb-10 leading-relaxed">
        Bitcoin is better money. Here&apos;s why — explore these topics to
        understand what makes Bitcoin different.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        {LEARN_ARTICLES.map((article) => (
          <TopicCard
            key={article.slug}
            title={article.title}
            description={article.description}
            href={article.href}
          />
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 pt-4">
        <Link href="/how-to-use-bitcoin" className="btn-primary">
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
      </div>
    </div>
  );
}
