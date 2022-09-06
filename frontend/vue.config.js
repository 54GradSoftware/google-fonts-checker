const { defineConfig } = require('@vue/cli-service');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    iconPaths: {
      favicon: "favicons/favicon.ico",
      favicon32: "favicons/favicon-32x32.png",
      favicon16: "favicons/favicon-16x16png",
      appleTouchIcon: "favicons/apple-touch-icon.png",
      msTileImage: "favicons/mstile-150x150.png",
      manifestPath: 'favicons/site.webmanifest',
    },
  },
  terser: {
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
  configureWebpack: {
    plugins: [
      new NodePolyfillPlugin(),
    ]
  },
});
