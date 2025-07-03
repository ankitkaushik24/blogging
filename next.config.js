/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/blogging',
  assetPrefix: '/blogging/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  optimizeFonts: false,
};

module.exports = nextConfig;