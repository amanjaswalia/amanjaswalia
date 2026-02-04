import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Vercel optimizations
  poweredByHeader: false,
  reactStrictMode: true,
  // Set turbopack root to current directory
  turbopack: {
    root: process.cwd(),
  },
}

export default nextConfig
