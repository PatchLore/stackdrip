import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "StackDrip — Turn Your Telegram Pinned Message Into Autopilot Revenue",
  description:
    "SpotBid by StackDrip runs 24/7 auctions for your group's top slot. Advertisers bid, you keep 95% of the revenue. Zero upfront cost.",
  keywords: [
    "StackDrip",
    "SpotBid",
    "Telegram bot",
    "Telegram monetization",
    "Pin-to-Earn",
    "crypto",
    "community automation",
    "Telegram Stars",
  ],
  authors: [{ name: "StackDrip" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "StackDrip — Autopilot Revenue for Telegram Communities",
    description:
      "SpotBid runs 24/7 auctions for your group's pinned slot. You keep 95%.",
    url: "https://www.stackdrip.dev",
    siteName: "StackDrip",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StackDrip — Autopilot Revenue for Telegram Communities",
    description:
      "SpotBid runs 24/7 auctions for your group's pinned slot. You keep 95%.",
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
