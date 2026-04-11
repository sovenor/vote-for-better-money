import type { Metadata } from "next";
import LinksClient from "./LinksClient";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Share Links",
  description:
    "Copy and share direct links to Vote For Better Money educational pages about Bitcoin via text, email, or social media.",
  alternates: { canonical: `${SITE_URL}/links` },
  openGraph: {
    title: "Share Links | Vote For Better Money",
    description:
      "Copy and share direct links to Vote For Better Money educational pages about Bitcoin via text, email, or social media.",
    url: `${SITE_URL}/links`,
    images: [{ url: "/img/meta/meta-home-v2.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Share Links | Vote For Better Money",
    description:
      "Copy and share direct links to Vote For Better Money educational pages about Bitcoin via text, email, or social media.",
  },
};

export default function LinksPage() {
  return (
    <>
      <LinksClient />
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Share Links" },
            ],
          }),
        }}
      />
    </>
  );
}
