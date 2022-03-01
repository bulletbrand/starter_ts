const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader",  "postcss-loader", "sass-loader"],
      },
    ],
  },
   optimization: {
    splitChunks: {
      chunks: "all",
      name: false,
    },
  },
  plugins: [new MiniCssExtractPlugin()],
}
