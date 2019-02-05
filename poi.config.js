const { resolve } = require('path');

module.exports = {
	entry: resolve(__dirname, './dev/main.ts'),
	output: {
		html: {
			title: 'GitHub Corners'
		}
	},
	devServer: {
		open: true
	},
	plugins: ['@poi/plugin-typescript']
};
