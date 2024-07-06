'use strict';

const path = require('path');
const webpack = require('webpack'); 

module.exports = {
  entry: './browser/index.js',
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js',
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'], // Add this line
    modules: [path.resolve(__dirname, 'node_modules')] // Add this line
  },
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
        }
      }
    ]
  }
};
