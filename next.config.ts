import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  experimental: {
    serverExternalPackages: ["react-syntax-highlighter"],
  },
};

export default nextConfig;
