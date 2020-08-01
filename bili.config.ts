import { Config } from 'bili';
import { resolve } from 'path';

const config: Config = {
	input: resolve(__dirname, './src/index.ts'),
	output: {
		format: ['cjs', 'es', 'iife', 'iife-min'],
		fileName: 'vue-github-corners.[format][min][ext]',
		moduleName: 'VueGitHubCorners',
		sourceMap: true
	},
	plugins: {
		vue: true
	}
};

export default config;
