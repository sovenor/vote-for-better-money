import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL, EXTERNAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How to Use Bitcoin",
  description:
    "Whether you buy or earn Bitcoin, it's important to take full control of it. Learn how to buy, earn, and self-custody your Bitcoin.",
  alternates: { canonical: `${SITE_URL}/how-to-use-bitcoin` },
  openGraph: {
    title: "How to Use Bitcoin | Vote For Better Money",
    url: `${SITE_URL}/how-to-use-bitcoin`,
    images: [{ url: "/img/meta/meta-use-bitcoin.png", width: 1200, height: 630 }],
  },
};

export default function HowToUseBitcoinPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs items={[{ label: "How to Use Bitcoin" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
        How to Use Bitcoin
      </h1>

      <div className="article-content">
        <p className="text-lg sm:text-xl text-muted leading-relaxed">
          Whether you buy Bitcoin or earn Bitcoin, it&apos;s important to take full
          control of it. Taking full control of your Bitcoin transforms it into{" "}
          <Link href="/learn/bitcoin-is-permissionless">freedom money.</Link>
        </p>

        <p>
          Freedom money is money that can't be censored, frozen, or seized.
           If you can download an app, you can get Bitcoin for the first time and
          take full control of it.
        </p>

        {/* Buy Bitcoin */}<h2 className="text-2xl font-bold text-foreground mb-6">
          How to Buy Bitcoin
        </h2>

        <p>
          You may already have an app that gives you access to Bitcoin. Our
          favorite apps for buying Bitcoin are{" "}
          <a href={EXTERNAL_LINKS.cashApp} target="_blank" rel="noopener noreferrer">
            Cash App
          </a>{" "}
          and{" "}
          <a href={EXTERNAL_LINKS.strike} target="_blank" rel="noopener noreferrer">
            Strike.
          </a>
        </p>

        <p>
          After you get some Bitcoin, it&apos;s important that you take full control
          of it. Here&apos;s how:
        </p>

        {/* Take Full Control */}
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Take Full Control
        </h2>

        <p>
          One of the main benefits of Bitcoin is the ability to use it as{" "}
          <Link href="/learn/bitcoin-is-permissionless">freedom money.</Link>{" "}
          Freedom money is money that can&apos;t be censored, frozen, or seized.
        </p>

        <p>
          No one can stop you from using Bitcoin if you withdraw it to your own
          wallet. But if you leave your Bitcoin in the app where you bought it, you
          don&apos;t get any of the freedom benefits.
        </p>

        <p>
          The same is true if you buy a Bitcoin ETF instead of actual Bitcoin.
          Bitcoin ETFs don&apos;t have any of the freedom benefits, and they prevent
          you from withdrawing your Bitcoin to your own wallet.
        </p>

        <p>
          Buying and holding a Bitcoin ETF will force you to pay a fee every year.
          But taking full control of your Bitcoin is 100% free with no annual fees.
        </p>

        <p>
          To use your Bitcoin as freedom money, simply withdraw it from the app
          where you bought it to a wallet you control.
        </p>

        <p>
          Our favorite free mobile wallet is{" "}
          <a href={EXTERNAL_LINKS.blockstreamGreen} target="_blank" rel="noopener noreferrer">
            Blockstream Green.
          </a>{" "}
          If you can download an app, you can take full control of your Bitcoin.
        </p>

        <p>
          You can also check out this{" "}
          <a href={EXTERNAL_LINKS.bitcoinRocksWallets} target="_blank" rel="noopener noreferrer">
            Bitcoin wallet guide
          </a>{" "}
          for more wallet options.
        </p>

        {/* Earn Bitcoin */}
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Earn Bitcoin
        </h2>

        <p>
          There&apos;s a growing movement of people saying &quot;Pay me in Bitcoin!&quot;
          Whether you&apos;re a pro athlete or a regular person, you can be paid in
          Bitcoin.
        </p>

        <p>
          Lots of small businesses accept Bitcoin for their goods and services,
          because{" "}
          <a href={EXTERNAL_LINKS.bitcoinRocksBusiness} target="_blank" rel="noopener noreferrer">
            Bitcoin is good for business.
          </a>
        </p>

        <p>You can start asking to be paid in Bitcoin too.</p>

        <p>
          Don&apos;t want to convince your boss? Apps like{" "}
          <a href={EXTERNAL_LINKS.strike} target="_blank" rel="noopener noreferrer">
            Strike
          </a>{" "}
          will automatically convert a portion of your paycheck into Bitcoin each
          month.
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-col items-center gap-4 mt-12">
        <Link href="/learn" className="btn-primary">
          Learn About Bitcoin
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
