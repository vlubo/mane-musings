import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  serverExternalPackages: ['lightningcss', '@tailwindcss/oxide'],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;
