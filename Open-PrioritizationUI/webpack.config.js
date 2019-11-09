const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'scripts/index'),
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'scripts/dist')
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /.jsx?$/,
				include: path.resolve(__dirname, 'scripts'),
				exclude: path.resolve(__dirname, 'node_modules'),
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'stage-0', 'react']
				}
			},
			{
				test: /\.(less|css)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'less-loader'
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.json', '.js', '.jsx', '.css', '.less']
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	]
};
