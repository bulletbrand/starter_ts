const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
 entry: "./src/index.tsx",
  output: {
   path: path.resolve(__dirname, "../public"),
   filename: "[name].[contenthash].js",
   publicPath: "/", // url that should be used for providing assets
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
   new ProgressBarPlugin({ clear: false }),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '..', './public/index.html')
    }),
  ],
  stats: 'errors-only',
}