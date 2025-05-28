/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.ctfassets.net" },
      { hostname: "downloads.ctfassets.net" },
    ],
    minimumCacheTTL: 2592000,
  },
};

export default nextConfig;
