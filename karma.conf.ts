import { Config } from 'karma';
import webpack from './.webpack/test.config';

export default (config: Config) => {
	config.set({
		frameworks: ['jasmine'],
		files: ['test/*.test.ts'],
		preprocessors: {
			'**/*.test.ts': ['webpack', 'sourcemap']
		},
		webpack,
		webpackMiddleware: {
			stats: false
		},
		reporters: ['spec', 'kjhtml'],
		browsers: ['FirefoxHeadless'],
		singleRun: !!process.env.CI
	});
};
