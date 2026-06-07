import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://clientkit.co.uk",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;