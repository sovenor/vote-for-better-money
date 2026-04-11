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
    url: `${SITE_URL}/links`,
    images: [{ url: "/img/meta/meta-home-v2.png", width: 1200, height: 630 }],
  },
};

export default function LinksPage() {
  return <LinksClient />;
}
