const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
  filename: './styles/main.css'
});

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: "./index.js",
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    extractPlugin
  ], 
  module: {
    rules: [{
      test: /\.(jpg|png|gif|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './assets/',
          }
        }]
    },
    {
      test: /\.scss$/,
      use: extractPlugin.extract({
        use: ["css-loader", "sass-loader", "postcss-loader"],
        fallback: 'style-loader'
      })
    },
    {
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'stage-0', 'react']
        }
      }
    }]
  }
};
module.exports = config;