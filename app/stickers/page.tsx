import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Stickers",
  description:
    "Help spread the word about better money. Get Vote For Better Money stickers to put up in public places.",
  alternates: { canonical: `${SITE_URL}/stickers` },
  openGraph: {
    title: "Vote For Better Money Stickers",
    url: `${SITE_URL}/stickers`,
    images: [{ url: "/img/meta/meta-sticker.png", width: 1200, height: 630 }],
  },
};

export default function StickersPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs items={[{ label: "Stickers" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
        Stickers
      </h1>

      <div className="article-content">
        <p className="text-lg text-muted leading-relaxed">
          Our mission is to show Americans they can vote for better money. You can
          help by slapping a sticker in public.
        </p>

        <div className="my-8 rounded-xl overflow-hidden border border-card-border">
          <Image
            src="/img/cta-sticker-request.png"
            alt="Vote For Better Money sticker"
            width={500}
            height={300}
            className="w-full h-auto"
          />
        </div>

        <p>
          Each sticker has a QR code that links to{" "}
          <Link href="/">an educational page about Bitcoin.</Link>
        </p>

        {/* Form placeholder */}
        <div className="my-8 p-6 rounded-xl bg-card border border-card-border">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Request Free Stickers
          </h2>
          <p className="text-muted text-sm mb-4">
            Enter your mailing address and we&apos;ll send you a free sticker pack.
            Shipped in a plain white envelope. USA only. Address data is deleted
            after shipping.
          </p>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Name (optional)"
              className="w-full px-4 py-3 bg-surface border border-card-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent"
              disabled
            />
            <input
              type="text"
              placeholder="Address Line 1"
              className="w-full px-4 py-3 bg-surface border border-card-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent"
              disabled
            />
            <input
              type="text"
              placeholder="Address Line 2 (optional)"
              className="w-full px-4 py-3 bg-surface border border-card-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent"
              disabled
            />
            <div className="grid grid-cols-3 gap-3">
              <input
                type="text"
                placeholder="City"
                className="w-full px-4 py-3 bg-surface border border-card-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent"
                disabled
              />
              <input
                type="text"
                placeholder="State"
                className="w-full px-4 py-3 bg-surface border border-card-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent"
                disabled
              />
              <input
                type="text"
                placeholder="Zip"
                className="w-full px-4 py-3 bg-surface border border-card-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent"
                disabled
              />
            </div>
            <p className="text-xs text-muted italic">
              Form coming soon — check back shortly!
            </p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
          Print Your Own
        </h2>

        <p>
          You can also order these stickers in bulk directly from a printer. They
          get cheaper the more you buy. Or download the sticker files and print
          them however you choose.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 mt-12">
        <Link href="/flyers" className="btn-primary">
          Get Flyers Too
        </Link>
        <Link href="/links" className="btn-secondary">
          Share Links Instead
        </Link>
      </div>
    </div>
  );
}
