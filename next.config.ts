import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  async redirects() {
    return [
      // Apex → www, matching the canonical host in src/lib/site.ts.
      // Host matching is exact, so www.stackdrip.dev and localhost are
      // unaffected. If Vercel's domain settings already redirect the apex,
      // that runs first and this rule is simply never reached.
      {
        source: "/:path*",
        has: [{ type: "host", value: "stackdrip.dev" }],
        destination: "https://www.stackdrip.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
