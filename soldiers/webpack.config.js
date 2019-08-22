const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "index.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				},
			},
			{
				test: /\.less$/,
						use: [ 
							MiniCssExtractPlugin.loader,
							'css-loader', 
							'less-loader'
							],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				use: [
						{
							loader: "file-loader",
							options: {
								outputPath: 'images'
							}
						}
					]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		}),
		new MiniCssExtractPlugin({
			filename: "styles.css",
		
		}),
		new CopyPlugin([
			{ from: 'images', to: 'images' },
		]),
	]
};