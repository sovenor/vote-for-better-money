import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleNav from "@/components/ArticleNav";
import { SITE_URL, EXTERNAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bitcoin is American",
  description:
    "Bitcoin is American because it upholds freedom and respects proof of work — core American values that align with financial independence.",
  alternates: { canonical: `${SITE_URL}/learn/bitcoin-is-american` },
  openGraph: {
    title: "Bitcoin is American | Vote For Better Money",
    url: `${SITE_URL}/learn/bitcoin-is-american`,
    images: [{ url: "/img/meta/meta-american.png", width: 1200, height: 630 }],
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
        <p className="text-lg text-muted leading-relaxed">
          <strong className="text-foreground">Bitcoin is American</strong> because
          it upholds freedom and respects proof of work.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-4">Freedom</h2>

        <p>
          America is all about being free and making your own choices. But lately,
          big banks and the government are making a lot of decisions for us.
        </p>

        <p>
          When they print more money, it makes the money we have worth less.{" "}
          <Link href="/">That&apos;s called inflation, and it&apos;s a big problem.</Link>
        </p>

        <p>
          Bitcoin is different because it&apos;s not controlled by anyone. Bitcoin
          lets you handle your money on your own, without worrying about the
          government making it worth less.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
          Proof of Work
        </h2>

        <p>
          In America, we believe that if you work hard, you should get rewarded.
          Bitcoin works like that too.
        </p>

        <p>
          It uses something called &quot;proof of work&quot; which means computers have to
          put in lots of effort to create Bitcoin and confirm transactions. This
          is like digital hard work.
        </p>

        <p>
          And unlike regular money, there&apos;s a cap to the amount of Bitcoin
          that can ever exist. This means it doesn&apos;t lose value like dollars
          because{" "}
          <Link href="/learn/bitcoin-is-scarce">
            no one can cause inflation in the Bitcoin system.
          </Link>
        </p>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
          Fighting Inflation
        </h2>

        <p>
          Inflation makes everything more expensive and your savings worth less.
          But Bitcoin is different.
        </p>

        <p>
          Bitcoin doesn&apos;t have inflation because{" "}
          <Link href="/learn/bitcoin-is-scarce">
            there&apos;s a limit on how many Bitcoin can ever be made.
          </Link>{" "}
          This helps keep your hard-earned money valuable.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
          Bringing Back American Values
        </h2>

        <p>
          Bitcoin brings back what America is all about: being in charge of your
          own life, your own money, and getting rewarded for your hard work.
        </p>

        <p>
          Bitcoin is a new way of handling money that matches our American values,
          especially when we&apos;re worried about things like inflation.
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
          even after their own government refused to clean it up.
        </p>

        <p className="text-lg font-medium text-foreground">
          Bitcoin is American. Bitcoin is better money.
        </p>
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
