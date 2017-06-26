let config = require('./poi.config');

config.filename = {
	js: 'vue-github-corners.min.js',
	css: 'vue-github-corners.min.css'
};
config.minimize = true;
config.removeDist = false;

module.exports = config;
