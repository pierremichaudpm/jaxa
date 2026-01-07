import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [],
    unoptimized: true, // Important pour Netlify
  },
  // Désactiver le standalone mode qui peut causer des problèmes
  // output: 'standalone',
  trailingSlash: false,
  reactStrictMode: false,
  
  // Optimisations pour Netlify
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Configuration des en-têtes
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;