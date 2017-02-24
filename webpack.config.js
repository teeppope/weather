const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
	src: path.resolve(__dirname, 'src'),
	dist: path.resolve(__dirname, 'dist')
};

module.exports = {
	entry: [path.resolve(PATHS.src, 'js/date.js'), 
			path.resolve(PATHS.src, 'js/weather.js'),
			path.resolve(PATHS.src, 'js/main.js')],
	output: {
		path: PATHS.dist,
		filename: 'bundle.[hash].js'
	},
	module: {
		loaders: [
			{
				test: /\.(css|scss)$/,
				loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(PATHS.src, 'index.html')
		}),
		new ExtractTextPlugin('style.[hash].css'),
		new CopyWebpackPlugin([{
			from: path.resolve(PATHS.src, 'assets'), 
			to: path.resolve(PATHS.dist, 'assets')
		}])
	]
}