// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueGitHubButtons from 'vue-github-buttons';
import VueGitHubCorners from 'vue-gh-corners';
import App from './App';

import components from './components';

Vue.config.productionTip = false;

// Stylesheet
import 'vue-github-buttons/dist/vue-github-buttons.css';
import 'vue-gh-corners/dist/vue-github-corners.css';
import './scss/main.scss';

// Plugin
Vue.use(VueGitHubButtons);
Vue.use(VueGitHubCorners);

// Component
Object.keys(components).forEach(name => {
	Vue.component(name, components[name]);
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	template: '<App/>',
	components: { App }
});
