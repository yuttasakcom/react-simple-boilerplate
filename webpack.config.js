const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  devtool: "eval",
  entry: "./src/index.js",
  output: {
    path: resolve("dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("src/public/index.html"),
    }),
  ],
};

module.exports = config;
