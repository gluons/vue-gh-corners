import Vue from 'vue';

import GitHubCorners from './components/GitHubCorners.vue';

function install(vue: typeof Vue): void {
	vue.component('github-corners', GitHubCorners);
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default {
	install
};
