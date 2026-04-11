import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleNav from "@/components/ArticleNav";
import { SITE_URL, EXTERNAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bitcoin is Decentralized",
  description:
    "Bitcoin is decentralized because it isn't controlled by any single entity like a government or corporation.",
  alternates: { canonical: `${SITE_URL}/learn/bitcoin-is-decentralized` },
  openGraph: {
    title: "Bitcoin is Decentralized | Vote For Better Money",
    url: `${SITE_URL}/learn/bitcoin-is-decentralized`,
    images: [{ url: "/img/meta/meta-decentralized.png", width: 1200, height: 630 }],
  },
};

export default function BitcoinIsDecentralizedPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs
        items={[
          { label: "Learn", href: "/learn" },
          { label: "Bitcoin is Decentralized" },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
        Bitcoin is Decentralized
      </h1>

      <div className="article-content">
        <p className="text-lg sm:text-xl text-muted leading-relaxed">
          <strong className="text-foreground">Bitcoin is decentralized</strong>{" "}
          because it isn&apos;t controlled by any single entity like a government or
          corporation.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-6">
          Network of Nodes
        </h2>

        <p>
          Bitcoin isn&apos;t managed by any one person or company. Instead, it&apos;s run by
          a network of computers (called nodes) spread across the world. These
          computers keep a record of all Bitcoin transactions.
        </p>

        <p>
          Anyone can{" "}
          <a href={EXTERNAL_LINKS.bitcoinNode} target="_blank" rel="noopener noreferrer">
            download free software to run their own Bitcoin node.
          </a>{" "}
          Running a node lets you easily verify the rules of the network are being
          followed.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-6">
          Mining for Security
        </h2>

        <p>
          Bitcoin mining is done by computers to secure the network. Miners use
          &quot;proof of work&quot; — computers put in lots of effort to create Bitcoin and
          confirm transactions. This is like digital hard work.
        </p>

        <p>
          And unlike regular money,{" "}
          <Link href="/learn/bitcoin-is-scarce">
            there&apos;s a cap to the amount of Bitcoin that can ever exist.
          </Link>{" "}
          This means it doesn&apos;t lose value like dollars because no one can cause
          inflation in the Bitcoin system.
        </p>

        <p>
          This process secures the entire system and prevents fraudulent
          transactions.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-6">
          Free and Open Source
        </h2>

        <p>
          Anyone can{" "}
          <a href={EXTERNAL_LINKS.bitcoinNode} target="_blank" rel="noopener noreferrer">
            see and use Bitcoin&apos;s software for free.
          </a>{" "}
          This openness means that the system is transparent, and no hidden
          changes can be made.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-6">
          Unchangeable Record
        </h2>

        <p>
          Once a transaction is recorded in the Bitcoin blockchain, it can&apos;t be
          altered or deleted. This creates a permanent and trustworthy history of
          all transactions.
        </p>

        <p>
          In essence, Bitcoin operates like a community network. Many computers
          across the globe collaborate to confirm transactions, secure the system,
          and maintain a reliable record.
        </p>

        <p>
          This collective approach ensures that Bitcoin remains independent and
          not under the control of any single entity.
        </p>

        <p className="text-lg font-medium text-foreground">
          Bitcoin is decentralized. Bitcoin is better money.
        </p>
      </div>

      <ArticleNav currentSlug="bitcoin-is-decentralized" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bitcoin is Decentralized",
            description:
              "Bitcoin is decentralized because it isn't controlled by any single entity.",
            url: `${SITE_URL}/learn/bitcoin-is-decentralized`,
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
