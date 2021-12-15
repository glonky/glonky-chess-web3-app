/** @type {import('next').NextConfig} */
module.exports = {
  generateBuildId: () => 'build', // This makes deploying to Netlify much faster
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
