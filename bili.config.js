const path = require('path');

module.exports = {
	name: 'vue-github-corners',
	format: ['cjs', 'es', 'iife', 'iife-min'],
	moduleName: 'VueGitHubCorners',
	banner: true,
	plugins: ['vue'],
	alias: {
		'resolve': ['.vue', '.js'],
		'@': path.resolve(__dirname, './src')
	}
};
