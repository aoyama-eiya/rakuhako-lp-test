import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/rakuhako-lp-test' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/rakuhako-lp-test/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === 'production' ? '/rakuhako-lp-test' : '',
  },
};

export default nextConfig;
