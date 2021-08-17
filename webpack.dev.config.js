const path = require("path");

const webpackCommonConfig = require("./webpack.config");
const { merge } = require('webpack-merge');

const cwd = process.cwd();
const outputPath = path.join(cwd, "build");

module.exports = merge(webpackCommonConfig, {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    contentBase: outputPath,
    disableHostCheck: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    hot: true,
    hotOnly: false,
    compress: true,
    open: true,
    port: "8081",
  },
});
