module.exports = {
	entry: './dev/main.js',
	html: {
		title: 'GitHub Corners',
		description: 'GitHub Corners for Vue.'
	},
	presets: [
		require('poi-preset-karma')({
			frameworks: ['mocha', 'chai'],
			browsers: [
				process.env.CI ? 'FirefoxHeadless' : 'FirefoxNightlyHeadless'
			],
			files: ['test/**/*.js']
		})
	]
};
