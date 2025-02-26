import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kaufes-dev-new.s3.eu-central-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "staging.kaufes.ch",
      },
      {
        protocol: "https",
        hostname: "kaufes-dev-v2.s3.me-south-1.amazonaws.com"
      }
    ]
  }
};

export default nextConfig;
