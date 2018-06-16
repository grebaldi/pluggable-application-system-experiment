const config = require('../provider/webpack.config.consumer.js');

module.exports = {
	...config,
	mode: 'development',
	entry: './index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'consumer.js'
	}
};
