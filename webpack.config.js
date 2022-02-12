const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const isProd = process.env.ELEVENTY_ENV === 'production';

const baseFilename = isProd ? 'main.[contenthash]' : 'main';

module.exports = {
  entry: [
    path.resolve(__dirname, 'src', 'js', 'main.js'),
    path.resolve(__dirname, 'src', 'css', 'main.css'),
  ],
  output: {
    path: path.resolve(__dirname, 'public', 'assets'),
    filename: `${baseFilename}.js`,
  },

  optimization: {
    minimize: isProd,
    minimizer: [new TerserPlugin({ parallel: true })],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    new WebpackManifestPlugin({ publicPath: '/assets/' }),
    new MiniCssExtractPlugin({ filename: `${baseFilename}.css` }),
  ],
};
