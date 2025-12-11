import type { NextConfig } from "next";

const repoName = "Portofolio"; // <-- your GitHub repo name
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",          // enables static export
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    unoptimized: true,       // GitHub Pages can't serve next/image optimizations
  },
  trailingSlash: true,       // needed for GitHub Pages
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : "",
  },
};

export default nextConfig;
