import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: import.meta.dirname,
  },
  agentRules: false,
};

export default nextConfig;
