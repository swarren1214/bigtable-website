import type { NextConfig } from "next";
import path from "node:path";

const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";
const basePath = configuredBasePath;

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingRoot: path.resolve(__dirname),
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
