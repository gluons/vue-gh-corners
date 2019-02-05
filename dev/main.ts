/// <reference path='../src/sfc.d.ts' />

import Vue from 'vue';

import VueGitHubCorners from '../src';
import Home from './Home.vue';

Vue.use(VueGitHubCorners);

new Vue({
	el: '#app',
	render: h => h(Home)
});
