/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.ctfassets.net" },
      { hostname: "downloads.ctfassets.net" },
    ],
    minimumCacheTTL: 2592000,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Performance Optimizations
  experimental: {
    optimizePackageImports: [
      '@heroicons/react', 
      '@headlessui/react',
      '@contentful/rich-text-react-renderer',
      '@contentful/rich-text-types',
      'react-photo-album',
      'embla-carousel-react',
      'embla-carousel-autoplay',
      'clsx'
    ],
  }
};

export default nextConfig;
