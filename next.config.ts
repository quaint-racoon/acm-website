import type { NextConfig } from "next";

const nextConfig = {
  output: 'export', // Outputs the 'out' folder
  images: {
    unoptimized: true,
  },
  basePath: '/acm-website',
  assetPrefix: '/acm-website',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/acm-website',
  },
  turbopack: {
    root: process.cwd(),
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
export default nextConfig;
