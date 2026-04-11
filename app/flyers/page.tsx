import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
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
        <p className="text-lg text-muted leading-relaxed">
          Our mission is to show Americans they can vote for better money. You can
          help by putting up a flyer in public.
        </p>

        <div className="my-8 rounded-xl overflow-hidden">
          <a href="/files/flyer-print-v1.pdf" target="_blank" rel="noopener noreferrer">
            <Image
              src="/img/cta-flyer-print.png"
              alt="Vote For Better Money flyer preview"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </a>
        </div>

        <p>
          Each flyer has a QR code that links to{" "}
          <Link href="/">an educational page about Bitcoin.</Link>
        </p>

        <p>
          Print these flyers out and put them in places people will see them. Most
          coffee shops and other businesses have public bulletin boards where you
          can put up a flyer.
        </p>

        <p>
          You can also put these outside on telephone poles using tape. Get
          creative!
        </p>

        <div className="flex flex-col items-center gap-4 my-8">
          <a
            href="/files/flyer-print-v1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Download Flyer PDF
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 mt-12">
        <Link href="/stickers" className="btn-primary">
          Get Stickers Too
        </Link>
        <Link href="/links" className="btn-secondary">
          Share Links Instead
        </Link>
      </div>
    </div>
  );
}
