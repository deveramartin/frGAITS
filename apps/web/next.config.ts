import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@gaits/ui', '@gaits/auth', '@gaits/database', '@gaits/ai', '@gaits/utils'],
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
