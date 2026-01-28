import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: false,
  experimental: {
    optimizePackageImports: ['framer-motion', 'three']
  },
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: false
  },
  eslint: {
    ignoreDuringBuilds: false
  }
};

export default nextConfig;
