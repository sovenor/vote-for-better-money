import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleNav from "@/components/ArticleNav";
import StatCard from "@/components/StatCard";
import TopicCard from "@/components/TopicCard";
import FreedomCard, { BankIcon, GlobeIcon } from "@/components/FreedomCard";
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
      { url: "/img/meta/meta-home-v2.png", width: 1200, height: 630 },
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

        <div className="my-8 grid grid-cols-2 gap-3">
          <StatCard
            label="Traditional Banks"
            value="Permission"
            sublabel="Can freeze, deny, or restrict access"
            danger
          />
          <StatCard
            label="Bitcoin"
            value="No Permission"
            sublabel="Open to anyone, anywhere, anytime"
            success
          />
        </div>

        <div className="flex items-center gap-3 mb-2 mt-12">
          <span className="text-xs uppercase tracking-wider text-accent font-bold whitespace-nowrap">No Gatekeepers</span>
          <div className="flex-1 h-px bg-accent/40" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Digital Cash for Everyone
        </h2>

        <p>
          Bitcoin is inclusive by design. Unlike traditional banks that act as
          gatekeepers, Bitcoin allows direct peer-to-peer transactions — no
          intermediaries, no approval needed. It&apos;s kind of like digital cash.
        </p>

        <p>
          As long as you have an internet connection and a Bitcoin wallet, you
          can participate in the network, send, and receive Bitcoin.
        </p>

        <div className="my-8 grid grid-cols-1 gap-3">
          <TopicCard
            title="How to Use Bitcoin"
            description="Get a wallet and start using Bitcoin as freedom money."
            href="/how-to-use-bitcoin"
          />
        </div>

        <div className="flex items-center gap-3 mb-2 mt-12">
          <span className="text-xs uppercase tracking-wider text-accent font-bold whitespace-nowrap">Freedom Money</span>
          <div className="flex-1 h-px bg-accent/40" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          No One Can Freeze Your Bitcoin
        </h2>

        <p>
          In traditional finance, institutions can freeze your money or deny you
          an account based on your location, credit history, or personal
          attributes. People have found this out the hard way.
        </p>

        <div className="my-8 grid grid-cols-2 gap-3">
          <FreedomCard
            icon={<BankIcon />}
            title="Debanking in America"
            description="Banks have cut off access to accounts for political and personal reasons."
            href={EXTERNAL_LINKS.debanking}
            external
          />
          <FreedomCard
            icon={<BankIcon />}
            title="Canada Froze Accounts"
            description="Workers had their bank accounts frozen by their own government."
            href={EXTERNAL_LINKS.canadaTruckers}
            external
          />
        </div>

        <p>
          Bitcoin can&apos;t discriminate based on personal details, how much money
          you have, your job, or where you live. No one can stop you from using
          Bitcoin because{" "}
          <Link href="/learn/bitcoin-is-decentralized">
            Bitcoin is decentralized.
          </Link>
        </p>

        <div className="my-8 grid grid-cols-1 gap-3">
          <FreedomCard
            icon={<GlobeIcon />}
            title="Bitcoin is Decentralized"
            description="No single entity — no government, no corporation — controls Bitcoin."
            href="/learn/bitcoin-is-decentralized"
          />
        </div>

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
