const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const PreloadWebpackPlugin = require("preload-webpack-plugin");

const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  output: {
    filename: "[name].[chunkhash:8].js",
    path: path.resolve("./dist"),
    publicPath: "/"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/i,
          chunks: "all"
        },
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        }
      }
    },
    runtimeChunk: {
      name: "runtime"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [{ loader: "babel-loader" }]
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "index.html"
    }),
    new CleanWebpackPlugin(["dist"]),
    new BundleAnalyzerPlugin(),
    new PreloadWebpackPlugin({
      rel: "preload",
      include: ["main", "vendors"]
    })
  ]
};
