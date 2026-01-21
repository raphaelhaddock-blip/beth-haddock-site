import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/warburton-advisors",
        destination: "/warburton",
        permanent: true,
      },
      {
        source: "/warburton-advisers",
        destination: "/warburton",
        permanent: true,
      },
      {
        source: "/practice",
        destination: "/warburton",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
