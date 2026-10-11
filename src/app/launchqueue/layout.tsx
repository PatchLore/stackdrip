import type { Metadata } from "next";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

const title = "LaunchQueue — Pre-Launch Waitlists for Indie Games (Example Build)";
const description =
  "A waitlist tool I built for indie game devs, capturing player emails before a Steam or App Store launch. An example build, not a live product.";

// Uses the site-wide card from src/app/opengraph-image.tsx. A route that
// declares its own `openGraph` object replaces the parent's entirely, so the
// image has to be named here explicitly or this page ships with no card image.
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/launchqueue`,
    siteName: SITE_NAME,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] },
};

export default function LaunchQueueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
