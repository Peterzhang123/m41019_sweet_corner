const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const PORT = process.env.PORT || 3000;

module.exports = merge(common, {
   entry: [
      "core-js/stable",
      "regenerator-runtime/runtime",
      "webpack-dev-server/client?http://localhost:" + PORT,
      "./index.js",
   ],
   devtool: "inline-source-map",
   mode: "development",
   plugins: [new webpack.NamedModulesPlugin()],
});
