const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
	  devServer: {
		    headers: {
			      'Access-Control-Allow-Origin': '*'
			    }
		  },
	  devtool: '#source-map',
	  entry: ['babel-polyfill','./client/index.js'],
	  output: {
		      path: __dirname,
		      publicPath: '/',
		      filename: 'bundle.js'
		    },
	  module: {
		    rules: [
			        {
					          test: /\.js$/,
						          loader: 'babel-loader',
						          exclude: /node_modules/,
						        },
			        {
				          test: /\.css$/,
					          loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
				          
      },
			        {
				          test: /\.(png|jpg|gif)$/,
					          loader:'file-loader',
					        }
			      ]
		  },
	  plugins: [
			new Dotenv(),
			new webpack.DefinePlugin({
				'GOOGLE_API_KEY' : JSON.stringify(process.env.GOOGLE_API_KEY)
			}),
		   new HtmlWebpackPlugin({
			 	template: './client/index.html'
			 })
		  ]
}
