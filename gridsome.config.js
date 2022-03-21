// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const { postcss } = require("postcss-preset-env");
const tailwindcss = require("tailwindcss");

const postcssPlugins = [
  tailwindcss(),
]

module.exports = {
  siteName: 'CBEBirr',
  plugins: [
    // {
    //   use: "gridsome-plugin-tailwindcss",

    // }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      }
    }
  }
}
