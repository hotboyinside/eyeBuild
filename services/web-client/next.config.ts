import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  experimental: {
    nodeMiddleware: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src")], 
  },
};

export default nextConfig;
 