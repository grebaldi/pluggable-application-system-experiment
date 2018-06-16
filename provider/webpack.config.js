module.exports = {
	mode: 'production',
	entry: {
		provider: './index.js',
		env: './manifest-loader!'
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['babel-preset-env']
					}
				}
			}
		]
	}
};
