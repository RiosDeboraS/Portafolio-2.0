/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/landing", // Path of the landing page
        destination: "/", // Path of the main page
        permanent: false, // Not a permanent redirect (302 instead of 301)
      },
    ];
  },
};

export default nextConfig;
