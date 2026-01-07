import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [],
    unoptimized: true, // Important pour Netlify
  },
  output: 'standalone', // Meilleur pour Netlify
  trailingSlash: false,
  // Désactiver le strict mode pour éviter des problèmes avec certaines librairies
  reactStrictMode: false,
};

export default nextConfig;