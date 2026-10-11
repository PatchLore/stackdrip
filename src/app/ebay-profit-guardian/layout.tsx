import type { Metadata } from "next";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

const title = "eBay Profit Guardian — Know Your Exact Profit on Every Sale";
const description =
  "A Chrome extension that auto-scrapes eBay fees, shipping and processing costs to show your true margin on any UK or US listing. £14.99 once, lifetime.";

// Uses the site-wide card from src/app/opengraph-image.tsx. A route that
// declares its own `openGraph` object replaces the parent's entirely, so the
// image has to be named here explicitly or this page ships with no card image.
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/ebay-profit-guardian`,
    siteName: SITE_NAME,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] },
};

export default function EbayProfitGuardianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
