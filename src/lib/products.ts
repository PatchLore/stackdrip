import { Bot, Gamepad2, Search, Sparkles, type LucideIcon } from "lucide-react";
import { GUMROAD_EBAY_URL } from "@/lib/site";

/**
 * `active`  — a live, purchasable product.
 * `example` — a completed build shown as portfolio/proof of work. Not for
 *             sale, not operating, no signup.
 */
export type ProductStatus = "active" | "example";

export const STATUS_LABEL: Record<ProductStatus, string> = {
  active: "Available now",
  example: "Example build",
};

/**
 * Tailwind v4 only compiles class names it finds as complete literal strings in
 * source, so accent variants must be written out in full here. Building them by
 * interpolation (`hover:border-${accent}-500/20`) compiles to nothing.
 */
export interface ProductAccent {
  /** Card hover border + background. */
  card: string;
  /** Icon container background + border. */
  iconWrap: string;
  /** Icon colour. */
  icon: string;
  /** Tagline text colour. */
  tagline: string;
  /** Footer link colour on card hover. */
  linkHover: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline?: string;
  blurb: string;
  /** On-site page. Omit when no page exists yet — the card renders unlinked. */
  href?: string;
  status: ProductStatus;
  icon: LucideIcon;
  accent: ProductAccent;
  cta: {
    label: string;
    /** Omit to render the label as static text rather than a link. */
    href?: string;
    external?: boolean;
  };
}

/** Render order. Reorder this array to reorder the homepage strip. */
export const products: Product[] = [
  {
    slug: "ebay-profit-guardian",
    name: "eBay Profit Guardian",
    tagline: "True Profit Calculator for eBay Sellers",
    blurb:
      "A real profit calculator for eBay sellers. Auto-pulls fees, shipping, and processing costs so sellers know their actual margin before they list.",
    href: "/ebay-profit-guardian",
    status: "active",
    icon: Search,
    accent: {
      card: "hover:border-cyan-500/20 hover:bg-cyan-500/[0.02]",
      iconWrap: "bg-cyan-500/10 border-cyan-500/15 group-hover:bg-cyan-500/15",
      icon: "text-cyan-400",
      tagline: "text-cyan-400",
      linkHover: "group-hover:text-cyan-400",
    },
    cta: { label: "Get Lifetime Access", href: "/ebay-profit-guardian" },
  },
  {
    slug: "spotbid",
    name: "SpotBid",
    tagline: "Pin-to-Earn for Telegram",
    blurb:
      "A Telegram bot I built that runs live auctions for a group's pinned message slot, letting community owners monetize their most valuable real estate automatically.",
    href: "/spotbid",
    status: "example",
    icon: Bot,
    accent: {
      card: "hover:border-emerald-500/20 hover:bg-emerald-500/[0.02]",
      iconWrap:
        "bg-emerald-500/10 border-emerald-500/15 group-hover:bg-emerald-500/15",
      icon: "text-emerald-400",
      tagline: "text-emerald-400",
      linkHover: "group-hover:text-emerald-400",
    },
    cta: { label: "View the build", href: "/spotbid" },
  },
  {
    slug: "launchqueue",
    name: "LaunchQueue",
    tagline: "Waitlists for Indie Game Devs",
    blurb:
      "A pre-launch waitlist tool for indie game devs, built to capture player interest before a Steam or App Store launch.",
    href: "/launchqueue",
    status: "example",
    icon: Gamepad2,
    accent: {
      card: "hover:border-purple-500/20 hover:bg-purple-500/[0.02]",
      iconWrap:
        "bg-purple-500/10 border-purple-500/15 group-hover:bg-purple-500/15",
      icon: "text-purple-400",
      tagline: "text-purple-400",
      linkHover: "group-hover:text-purple-400",
    },
    cta: { label: "View the build", href: "/launchqueue" },
  },
  {
    // TODO(needs-target): no page or external link exists for StoryForge yet, so
    // this card renders unlinked. Add `href` (and `cta.href`) once there is
    // somewhere for "View the build" to point.
    slug: "storyforge",
    name: "StoryForge",
    blurb:
      "A story generation tool that turns a premise into a full narrative, complete with accompanying video. Built for writers and creators who want to prototype a story fast, without starting from a blank page.",
    status: "example",
    icon: Sparkles,
    accent: {
      card: "hover:border-amber-500/20 hover:bg-amber-500/[0.02]",
      iconWrap:
        "bg-amber-500/10 border-amber-500/15 group-hover:bg-amber-500/15",
      icon: "text-amber-400",
      tagline: "text-amber-400",
      linkHover: "group-hover:text-amber-400",
    },
    cta: { label: "View the build" },
  },
];

/** The single purchasable product, for checkout links. */
export const activeProduct = {
  ...products.find((p) => p.slug === "ebay-profit-guardian")!,
  checkoutUrl: GUMROAD_EBAY_URL,
};

export const exampleProducts = products.filter((p) => p.status === "example");
