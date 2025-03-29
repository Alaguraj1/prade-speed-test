// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   // distDir: 'build',
//    // target: 'serverless',
//   images: {
//     domains: ['i.ibb.co','lh3.googleusercontent.com','res.cloudinary.com','file.prade.in'],
//   },
// }

// module.exports = nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Add allowed external domains for image optimization
    domains: [
      'file.prade.in',
      'prade.blr1.cdn.digitaloceanspaces.com',
      'prade.blr1.digitaloceanspaces.com',
    ],
    // Optional: You can also specify image sizes and device sizes for optimization.
    // Next.js automatically optimizes the images as per the user device and screen resolution.
    deviceSizes: [320, 420, 768, 1024, 1200], // Widths for responsive images
    imageSizes: [16, 32, 48, 64, 128, 256], // Pixel densities for the images
    // Optional: Minimum cache TTL for optimized images
    minimumCacheTTL: 60, // Time to keep the image in cache (in seconds)
  },
};

module.exports = nextConfig;



