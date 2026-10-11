import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "StackDrip — Custom tools for creators, built solo",
  description:
    "I build custom tools for creators and community owners: working software, built fast, funded by the audience that will use it. No dev team required.",
  keywords: [
    "StackDrip",
    "custom tools for creators",
    "bespoke software development",
    "creator tools",
    "community tools",
    "solo developer",
    "indie software studio",
    "MVP development",
  ],
  authors: [{ name: "StackDrip" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "StackDrip — Custom tools for creators, built solo",
    description:
      "I build custom tools for creators and community owners. Tell me what you're building.",
    // TODO(confirm): canonical host pending confirmation (apex vs www).
    url: "https://www.stackdrip.dev",
    siteName: "StackDrip",
    type: "website",
    // TODO(wire): add `images: [...]` once a real OG image exists. Without it
    // the summary_large_image card below renders with no image.
  },
  twitter: {
    card: "summary_large_image",
    title: "StackDrip — Custom tools for creators, built solo",
    description:
      "I build custom tools for creators and community owners. Tell me what you're building.",
    // TODO(wire): add `images: [...]` alongside the OG image.
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
