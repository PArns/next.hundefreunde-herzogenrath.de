/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.ctfassets.net" },
      { hostname: "downloads.ctfassets.net" },
    ],
    minimumCacheTTL: 86400,
  },
};

export default nextConfig;
