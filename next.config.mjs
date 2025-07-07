import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
let nextConfig = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  basePath: '',
  assetPrefix: '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

if (process.env.NODE_ENV === 'production') {
  nextConfig = {
    ...nextConfig,
    basePath: '/blogging',
    assetPrefix: '/blogging/',
  };
}

const withMDX = createMDX({});

export default withMDX(nextConfig);
