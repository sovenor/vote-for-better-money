import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import TopicCard from "@/components/TopicCard";
import { EXTERNAL_LINKS, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Help spread the word about Bitcoin and better money. Put up stickers, post flyers, or contribute to our open-source project.",
  alternates: { canonical: `${SITE_URL}/get-involved` },
  openGraph: {
    title: "Get Involved with Vote For Better Money",
    description:
      "Help spread the word about Bitcoin and better money. Put up stickers, post flyers, or contribute to our open-source project.",
    url: `${SITE_URL}/get-involved`,
    images: [{ url: "/img/meta/meta-home-v2.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Involved with Vote For Better Money",
    description:
      "Help spread the word about Bitcoin and better money. Put up stickers, post flyers, or contribute to our open-source project.",
  },
};

export default function GetInvolvedPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs items={[{ label: "Get Involved" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
        Get Involved
      </h1>

      <div className="article-content">
        <p className="text-lg sm:text-xl text-muted leading-relaxed">
          <strong className="text-foreground">
            Help us show Americans they can vote for better money.
          </strong>{" "}
          Every conversation, sticker, and flyer brings more people closer to
          Bitcoin — better money that no politician can debase.
        </p>

        <p>
          Vote For Better Money is a community project. There&apos;s no
          marketing budget and no big sponsor — just people who believe sound
          money is worth fighting for. Below are a few ways you can pitch in.
        </p>
      </div>

      {/* ── Put Up Stickers ─────────────────────────── */}
      <div className="flex items-center gap-3 mb-2 mt-12">
        <span className="text-xs uppercase tracking-wider text-accent font-bold whitespace-nowrap">
          Put Up Stickers
        </span>
        <div className="flex-1 h-px bg-accent/40" />
      </div>
      <h2 className="text-2xl font-bold text-foreground mb-6">
        Spread the word with a sticker
      </h2>

      <Link
        href="/stickers"
        className="block my-8 rounded-xl bg-card border border-card-border overflow-hidden no-underline hover:border-accent/40 transition-all"
      >
        <Image
          src="/img/web-sticker-pack-vfbm.png"
          alt="Vote For Better Money Sticker Pack preview"
          width={1200}
          height={870}
          quality={100}
          className="w-full h-auto"
        />
      </Link>

      <div className="article-content">
        <p>
          Stickers are one of the easiest ways to make Bitcoin visible in your
          community. Put one on a telephone pole, a public bulletin board, or
          anywhere people pause and look — and everyone who walks by sees a
          tiny reminder that better money exists.
        </p>

        <p>
          We&apos;ll mail you a free Vote For Better Money Sticker Pack
          anywhere in the United States. You can also print your own designs
          or order a bulk pack to share with friends.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 my-8">
        <TopicCard
          title="Order a Free Sticker Pack"
          description="We mail free sticker packs anywhere in the USA. Three designs, no cost."
          href="/stickers"
        />
      </div>

      {/* ── Post Flyers ─────────────────────────────── */}
      <div className="flex items-center gap-3 mb-2 mt-12">
        <span className="text-xs uppercase tracking-wider text-accent font-bold whitespace-nowrap">
          Post Flyers
        </span>
        <div className="flex-1 h-px bg-accent/40" />
      </div>
      <h2 className="text-2xl font-bold text-foreground mb-6">
        Print and post a flyer
      </h2>

      <Link
        href="/flyers"
        className="block my-8 rounded-xl bg-card border border-card-border overflow-hidden no-underline hover:border-accent/40 transition-all"
      >
        <Image
          src="/img/flyer-v2-preview.png"
          alt="Vote For Better Money flyer preview"
          width={1200}
          height={1553}
          quality={100}
          className="w-full h-auto"
        />
      </Link>

      <div className="article-content">
        <p>
          Each flyer carries a QR code that links to an educational page about
          Bitcoin. Print it, post it on a coffee-shop bulletin board or a
          telephone pole, and you&apos;ve just opened a door for someone you
          may never meet.
        </p>

        <p>
          The PDF is standard letter size, black-and-white, and free to print.
          The more people who see it, the more people learn about better
          money.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 my-8">
        <TopicCard
          title="Download Flyers"
          description="Print our standard letter-size flyer and post it where people will see."
          href="/flyers"
        />
      </div>

      {/* ── Contribute on GitHub ────────────────────── */}
      <div className="flex items-center gap-3 mb-2 mt-12">
        <span className="text-xs uppercase tracking-wider text-accent font-bold whitespace-nowrap">
          Contribute on GitHub
        </span>
        <div className="flex-1 h-px bg-accent/40" />
      </div>
      <h2 className="text-2xl font-bold text-foreground mb-6">
        Help build the project
      </h2>

      <div className="article-content">
        <p>
          Vote For Better Money is open source. The whole site — every page,
          every sticker design, every word — lives in a public repository on
          GitHub.
        </p>

        <p>
          We welcome pull requests from developers, designers, writers, and
          anyone else who wants to help. Fix a typo, propose a new
          educational page, suggest a sharper headline, or just open an issue
          with an idea. Every contribution makes the campaign for better
          money a little stronger.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 my-8">
        <TopicCard
          title="Vote For Better Money on GitHub"
          description="Browse the code, open an issue, or send a pull request."
          href={EXTERNAL_LINKS.github}
          external
        />
      </div>

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Get Involved" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Get Involved with Vote For Better Money",
            description:
              "Help spread the word about Bitcoin and better money. Put up stickers, post flyers, or contribute to our open-source project.",
            url: `${SITE_URL}/get-involved`,
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
