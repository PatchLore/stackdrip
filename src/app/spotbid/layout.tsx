import type { Metadata } from "next";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

const title = "SpotBid — Telegram Pin Auction Bot (Example Build)";
const description =
  "A Telegram bot I built that auctions a group's pinned message slot so owners can monetize it automatically. An example build, not a live service.";

// Uses the site-wide card from src/app/opengraph-image.tsx. A route that
// declares its own `openGraph` object replaces the parent's entirely, so the
// image has to be named here explicitly or this page ships with no card image.
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/spotbid`,
    siteName: SITE_NAME,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] },
};

export default function SpotBidLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
