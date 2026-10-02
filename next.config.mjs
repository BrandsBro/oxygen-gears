/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://us.oxliv.store/:path*',
        permanent: true,
        has: [{ type: 'host', value: 'oxliv.store' }],
      },
    ]
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "static.wixstatic.com" },
      { protocol: "https", hostname: "video.wixstatic.com" },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 3600,
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
