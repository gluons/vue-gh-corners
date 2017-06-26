import GitHubCorners from '@/components/GitHubCorners.vue';

function install(Vue) {
	Vue.component('github-corners', GitHubCorners);
}

if ((typeof window !== 'undefined') && window.Vue) {
	install(window.Vue);
}

export default {
	install
};
