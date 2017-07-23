<template lang="pug">
#app
	github-corners(repo='gluons/vue-gh-corners')
	home
</template>

<script>
import Home from './views/Home';

export default {
	name: 'app',
	components: {
		Home
	}
};
</script>
