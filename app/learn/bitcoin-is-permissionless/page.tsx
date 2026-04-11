import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleNav from "@/components/ArticleNav";
import { SITE_URL, EXTERNAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bitcoin is Permissionless",
  description:
    "Bitcoin is permissionless because anyone, anywhere can join the Bitcoin network. No one can stop you from accessing your money.",
  alternates: { canonical: `${SITE_URL}/learn/bitcoin-is-permissionless` },
  openGraph: {
    title: "Bitcoin is Permissionless | Vote For Better Money",
    url: `${SITE_URL}/learn/bitcoin-is-permissionless`,
    images: [
      { url: "/img/meta/meta-permissionless.png", width: 1200, height: 630 },
    ],
  },
};

export default function BitcoinIsPermissionlessPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs
        items={[
          { label: "Learn", href: "/learn" },
          { label: "Bitcoin is Permissionless" },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
        Bitcoin is Permissionless
      </h1>

      <div className="article-content">
        <p className="text-lg sm:text-xl text-muted leading-relaxed">
          <strong className="text-foreground">Bitcoin is permissionless</strong>{" "}
          because anyone, anywhere can join the Bitcoin network. No one can stop
          you from accessing your money.
        </p>

        <p>
          Bitcoin is inclusive by design. It breaks down barriers commonly found
          in conventional financial systems, where access requires extensive
          verification and approval from banks.
        </p>

        <p>
          This permissionless nature is made possible by the Bitcoin blockchain.
          It keeps track of who owns what and prevents people from cheating.
        </p>

        <p>
          Unlike traditional banks that act as gatekeepers of financial
          transactions, Bitcoin allows direct peer-to-peer transactions. You can
          send money directly to someone else without any intermediaries. It&apos;s
          kind of like digital cash.
        </p>

        <p>
          As long as you have an internet connection and a{" "}
          <Link href="/how-to-use-bitcoin">Bitcoin wallet,</Link> you can
          participate in the network, send, and receive Bitcoin.
        </p>

        <p>
          In traditional finance, your ability to participate depends on the
          permission of banks and financial institutions. These institutions can
          freeze your money or deny you an account based on your location, credit
          history, or personal attributes.
        </p>

        <p>
          Traditional finance has{" "}
          <a href={EXTERNAL_LINKS.debanking} target="_blank" rel="noopener noreferrer">
            a really bad track record of this.
          </a>
        </p>

        <p>
          Workers in Canada found this out the hard way when{" "}
          <a href={EXTERNAL_LINKS.canadaTruckers} target="_blank" rel="noopener noreferrer">
            their own government froze their bank accounts.
          </a>
        </p>

        <p>
          Bitcoin, by contrast, is fundamentally inclusive. Bitcoin can&apos;t
          discriminate based on personal details, how much money you have, your
          job, or geographic location.
        </p>

        <p>
          No one can stop you from using Bitcoin because{" "}
          <Link href="/learn/bitcoin-is-decentralized">
            Bitcoin is decentralized.
          </Link>
        </p>

        <p>
          Bitcoin removes barriers to entry and eliminates the need for
          centralized approval. Bitcoin empowers individuals and gives you the
          freedom to save and spend your money without restrictions.
        </p>

        <p className="text-lg font-medium text-foreground">
          Bitcoin is permissionless. Bitcoin is better money.
        </p>
      </div>

      <ArticleNav currentSlug="bitcoin-is-permissionless" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bitcoin is Permissionless",
            description:
              "Bitcoin is permissionless because anyone, anywhere can join the Bitcoin network.",
            url: `${SITE_URL}/learn/bitcoin-is-permissionless`,
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
