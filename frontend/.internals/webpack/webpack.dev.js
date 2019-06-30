/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = require('./webpack.base')({
  mode: 'development',
  entry: ['webpack-hot-middleware/client?reload=true','./index.tsx'],
  output: {
    path: path.join(path.resolve(path.resolve(__dirname, '..'), '..'), 'build'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].chunk.js'
  },
  optimization: {
    minimize: false
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html'
    }),

    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/, // exclude node_modules
      failOnError: false, // show a warning when there is a circular dependency
    }),
  ],
  performance: {
    hints: false,
  }
});
