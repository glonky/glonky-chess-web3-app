module.exports = {
  webpackFinal: async (config) => {
    // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
    const fileLoaderRule = config.module.rules.find(({ test }) => test?.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.unshift({
      test: /\.svg$/,
      use: [require.resolve('@svgr/webpack')]
    });

    // This fixes an issue where storybook can't load ES6 modules
    // https://github.com/webpack/webpack/issues/11467#issuecomment-691873586
    config.module.rules.push({
      test: /chessground.*\.m?js/,
      include: /node_modules/,
      type: "javascript/auto",
      resolve: {
        fullySpecified: false
      }
    })

    return config;
  },
  core: {
    builder: "webpack5",
  },
  staticDirs: ['../public'],
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}