const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const GoogleFontsPlugin = require('google-fonts-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const devPlugins = [
  new Dotenv(),
  new HtmlWebpackPlugin({ template: './client/index.html' }),
  new GoogleFontsPlugin({
    fonts: [
      { family: 'Lato', variants: ['700'] },
    ],
  }),
];

const prodPlugins = [
  new HtmlWebpackPlugin({ template: './client/index.html' }),
  new webpack.DefinePlugin({
    'process.env.GOOGLE_API_KEY': JSON.stringify(process.env.GOOGLE_API_KEY),
    'process.env.HOST_URL': JSON.stringify(process.env.HOST_URL),
  }),
  new GoogleFontsPlugin({
    fonts: [
      { family: 'Lato', variants: ['700'] },
    ],
  }),
];

const configPlugins = (process.env.NODE_ENV === 'development') ? devPlugins : prodPlugins;
module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  devtool: '#source-map',
  entry: ['babel-polyfill', './client/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]',
    },
    {
      test: /\.(png|jpg|gif)$/,
      loader: 'file-loader',
    }],
  },
  plugins: configPlugins,
};

