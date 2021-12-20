/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    esmExternals: true,
  },
  generateBuildId: () => 'build',
  images: {
    domains: ['images.unsplash.com', 'tailwindui.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.module.rules.push({
      include: /node_modules/,
      resolve: {
        fullySpecified: false,
      },
      test: /chessground.*\.m?js/,
      type: 'javascript/auto',
    });

    return config;
  },
};
