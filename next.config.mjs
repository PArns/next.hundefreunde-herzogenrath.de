/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.ctfassets.net" }],
    minimumCacheTTL: 86400,
  },
};

export default nextConfig;
