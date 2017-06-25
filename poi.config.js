module.exports = {
	entry: './src/index.js',
	filename: {
		js: 'vue-github-corners.js',
		css: 'vue-github-corners.css'
	},
	vendor: false,
	autoprefixer: {
		browsers: [
			'ie > 8',
			'last 3 versions'
		]
	},
	html: false
};
