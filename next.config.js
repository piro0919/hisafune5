/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async rewrites() {
    return [
      {
        destination: "/",
        source: "/about",
      },
      {
        destination: "/",
        source: "/blog",
      },
      {
        destination: "/",
        source: "/contact",
      },
      {
        destination: "/",
        source: "/gallery",
      },
    ];
  },
};

module.exports = nextConfig;
