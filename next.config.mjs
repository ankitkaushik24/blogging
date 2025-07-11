import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
let nextConfig = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  basePath: '/blogging',
  assetPrefix: '/blogging/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
