import Vue from 'vue';
import VueGitHubCorners from '@/index.js';
import Home from './Home.vue';

Vue.use(VueGitHubCorners);

new Vue({
	el: '#app',
	render: h => h(Home)
});
