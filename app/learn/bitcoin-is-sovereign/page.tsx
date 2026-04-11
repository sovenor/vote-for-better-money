import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleNav from "@/components/ArticleNav";
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
        <p className="text-lg text-muted leading-relaxed">
          <strong className="text-foreground">Bitcoin is sovereign</strong> because
          it&apos;s a new system, independent from corrupt politicians.
        </p>

        <p>
          Every election cycle, we vote for someone who says they&apos;ll make things
          better. They promise to fix big problems like corruption, schools, and
          inflation.
        </p>

        <p>But even after they win, things don&apos;t really change.</p>

        <p>
          Instead of trying to change things from within a broken system, Bitcoin
          has built a new system.
        </p>

        <p>
          Bitcoin has built a system that isn&apos;t controlled by politicians. Bitcoin
          has built a system that is{" "}
          <Link href="/learn/bitcoin-is-permissionless">open to everyone.</Link>
        </p>

        <p>
          Bitcoin has built a system with{" "}
          <Link href="/learn/bitcoin-is-american">core American values</Link> like
          freedom and respect for hard work.
        </p>

        <p>
          Bitcoin gives you the freedom to save your money{" "}
          <Link href="/learn/bitcoin-is-permissionless">without restrictions.</Link>{" "}
          It gives you the freedom to spend your money without restrictions.
        </p>

        <p>
          And Bitcoin restricts politicians from being able to print more of it.{" "}
          <Link href="/learn/bitcoin-is-scarce">
            No one can print more Bitcoin and cause inflation.
          </Link>
        </p>

        <p>
          Bitcoin works today, without empty campaign promises or requests for
          donations.
        </p>

        <p className="text-lg font-medium text-foreground">
          Bitcoin is sovereign. Bitcoin is better money.
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
