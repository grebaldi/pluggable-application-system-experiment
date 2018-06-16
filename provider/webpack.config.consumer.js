const manifest = require('./manifest');

module.exports = {
	externals: {
		...manifest.reduce((externals, entry) => {
			if (typeof entry === 'string') {
				externals[entry] = `window['@provider']['${entry}']`;
			} else if (typeof entry === 'object') {
				const [key] = Object.keys(entry);
				externals[key] = `window['@provider']['${key}']`;
			}
			return externals;
		}, {})
	}
};
