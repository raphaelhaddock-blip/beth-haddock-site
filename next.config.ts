import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/warburton-advisors",
        destination: "/practice",
        permanent: true,
      },
      {
        source: "/warburton-advisers",
        destination: "/practice",
        permanent: true,
      },
      {
        source: "/warburton",
        destination: "/practice",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
