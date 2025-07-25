import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Temporary: allows builds to proceed even if ESLint errors exist
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Add other config options here if needed (images, i18n, etc.)
};

export default nextConfig;
