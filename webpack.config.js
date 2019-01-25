const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
	optimization: {
		minimizer: [
			new OptimizeCSSAssetsPlugin({
				cssProcessorPluginOptions: {
					preset: ['default', { colormin: false }],
				},
			})
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "gridkit.css",
			chunkFilename: "[id].css"
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader"
				]
			}
		]
	}
}