module.exports = function() {
	const manifest = require(__dirname + '/manifest');
	const manifestJs = `
		window['@provider'] = {
			${manifest.map(entry => {
				if (typeof entry === 'string') {
					return `'${entry}': require('${entry}'),`;
				}

				if (typeof entry === 'object') {
					const [key] = Object.keys(entry);
					return `'${key}': require('${entry[key]}'),`;
				}

				return ``;
			}).join('')}
		};
	`;

	return manifestJs;
}
