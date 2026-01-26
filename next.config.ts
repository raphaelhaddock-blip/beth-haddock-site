import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect warburtonmedia.com to /warburton
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "warburtonmedia.com",
          },
        ],
        destination: "https://www.bethhaddock.com/warburton",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.warburtonmedia.com",
          },
        ],
        destination: "https://www.bethhaddock.com/warburton",
        permanent: true,
      },
      // Redirect warburtonadvisers.com to /warburton
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "warburtonadvisers.com",
          },
        ],
        destination: "https://www.bethhaddock.com/warburton",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.warburtonadvisers.com",
          },
        ],
        destination: "https://www.bethhaddock.com/warburton",
        permanent: true,
      },
      // Standard redirects
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
