const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const resolve = dir => path.resolve(__dirname, dir);

const config = {
  devtool: "cheap-module-source-map",
  entry: "./src/index.js",
  output: {
    path: resolve("dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    stats: "minimal",
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("public/index.html"),
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "public/static"),
        to: "static",
        ignore: [".*"],
      },
    ]),
  ],
};

module.exports = config;
