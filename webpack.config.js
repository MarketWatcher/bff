var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
	name: 'market-watcher',
	entry: {
		app: "./src/index.js"
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
		filename: "[name].[hash].js"
	},
	plugins : [
		new HtmlWebpackPlugin({
			template : path.resolve(__dirname, "index.html"),
			inject: 'body',
			hash: false,
			filename : 'index.html'
		})
	],
	module : {
		loaders : [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ["react-hot", "babel?presets[]=es2015&presets[]=stage-0&presets[]=react"],
			},
			{
				test: /\.html$/,
				loader: "file?name=[name].[ext]",
			}
		]
	}
};