<template lang="pug">
#home
	main
		h1 #[v]ue GitHub Corners
		p #[octocat] #[blank-link(url='https://github.com/tholman/github-corners') tholman's GitHub Corners] for #[blank-link(url='https://vuejs.org/') Vue].
		p.repo-buttons-container
			gh-btns-star(slug='gluons/vue-gh-corners' show-count)
			gh-btns-fork(slug='gluons/vue-gh-corners' show-count)
</template>

<script>
export default {
	name: 'home'
};
</script>

<style lang="scss">
#home {
	main {
		margin-top: 7rem;
		text-align: center;
	}
	.repo-buttons-container {
		.gh-button-container {
			margin: 0 1em !important;
		}
	}
}
</style>
