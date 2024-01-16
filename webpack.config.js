const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "bundle.js", // the name of the bundle
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "src/index.html", // to import index.html file inside index.js
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    static: "./dist",
    hot: true,
    port: 3030,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        resolve: {
          extensions: [".js", ".jsx"],
        },
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /css$/, // styles files
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
