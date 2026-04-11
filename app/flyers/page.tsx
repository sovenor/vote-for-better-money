import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import TopicCard from "@/components/TopicCard";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Flyers",
  description:
    "Help spread the word about better money. Print Vote For Better Money flyers and put them up in public places.",
  alternates: { canonical: `${SITE_URL}/flyers` },
  openGraph: {
    title: "Vote For Better Money Flyers",
    url: `${SITE_URL}/flyers`,
    images: [{ url: "/img/meta/meta-flyer.png", width: 1200, height: 630 }],
  },
};

export default function FlyersPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs items={[{ label: "Flyers" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
        Flyers
      </h1>

      <div className="article-content">
        <p className="text-lg sm:text-xl text-muted leading-relaxed">
          <strong className="text-foreground">Help spread the word</strong> about
          better money. Print our flyers and put them up where people will see
          them.
        </p>

        {/* ── Download ────────────────────────────────── */}
        <div className="flex items-center gap-3 mb-2 mt-12">
          <span className="text-xs uppercase tracking-wider text-accent font-bold whitespace-nowrap">
            Download
          </span>
          <div className="flex-1 h-px bg-accent/40" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Print the Flyer
        </h2>

        <p>
          Each flyer has a QR code that links to{" "}
          <Link href="/">an educational page about Bitcoin.</Link> Download the
          PDF below, print as many copies as you like, and start posting.
        </p>

        <div className="my-8 rounded-xl bg-card border border-card-border overflow-hidden">
          <div className="p-4">
            <Image
              src="/img/flyer-v2-preview.png"
              alt="Vote For Better Money flyer preview"
              width={600}
              height={776}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="flex flex-col items-center text-center gap-4 p-6 pt-2">
            <p className="text-lg font-bold text-foreground m-0">
              Vote For Better Money Flyer
            </p>
            <p className="text-sm text-muted m-0">
              Standard letter size (8.5 × 11 in) · Black and white · PDF
            </p>
            <a
              href="/files/flyer-v2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download Flyer PDF
            </a>
          </div>
        </div>

        {/* ── Where to Post ───────────────────────────── */}
        <div className="flex items-center gap-3 mb-2 mt-12">
          <span className="text-xs uppercase tracking-wider text-accent font-bold whitespace-nowrap">
            Where to Post
          </span>
          <div className="flex-1 h-px bg-accent/40" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Get Creative
        </h2>

        <p>
          Most coffee shops, laundromats, libraries, and other local businesses
          have public bulletin boards — that&apos;s a great place to start.
        </p>

        <p>
          You can also tape flyers to telephone poles, community kiosks, or
          anywhere people tend to pause and look. The more places you post, the
          more people learn about better money.
        </p>

        <p>
          Ask a friend to help. The more people spreading the word, the bigger
          the impact.
        </p>
      </div>

      {/* ── Related ────────────────────────────────── */}
      <div className="grid grid-cols-1 gap-4 mt-12">
        <TopicCard
          title="Get Stickers"
          description="Request free stickers or print your own to put up in public."
          href="/stickers"
        />
        <TopicCard
          title="Share Links"
          description="Copy and share direct links to our educational pages."
          href="/links"
        />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Vote For Better Money Flyers",
            description:
              "Print Vote For Better Money flyers and put them up in public places.",
            url: `${SITE_URL}/flyers`,
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
