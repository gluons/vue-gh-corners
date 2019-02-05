<template>
	<div id="home">
		<github-corners repo="gluons/vue-gh-corners" :bg-color="currentBgColor" :color="currentColor" :position="position"></github-corners>
		<div id="custom">
			<button type="button" @click="swapPosition">Swap Position</button>
			<button type="button" @click="swapColor">Swap Color</button>
			<button type="button" @click="changeBgColor">Change Color</button>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'home',
	data() {
		return {
			position: 'right',
			isSwapColor: false,
			colors: [
				'#151513',
				'red',
				'green',
				'blue'
			],
			currentColorIndex: 0
		};
	},
	methods: {
		updatePageBg() {
			if (this.isSwapColor) {
				const currentBgColor = this.colors[this.currentColorIndex];

				document.body.style.setProperty('background-color', currentBgColor);
			} else {
				document.body.style.removeProperty('background-color');
			}
		},
		swapPosition() {
			this.position = this.position == 'right' ? 'left' : 'right';
		},
		swapColor() {
			this.isSwapColor = !this.isSwapColor;
			this.updatePageBg();
		},
		changeBgColor() {
			if ((this.currentColorIndex + 1) >= this.colors.length) {
				this.currentColorIndex = 0;
			} else {
				this.currentColorIndex++;
			}
			this.updatePageBg();
		}
	},
	computed: {
		currentBgColor() {
			if (!this.isSwapColor) {
				return this.colors[this.currentColorIndex];
			} else {
				return 'white';
			}
		},
		currentColor() {
			if (!this.isSwapColor) {
				return 'white';
			} else {
				return this.colors[this.currentColorIndex];
			}
		}
	}
});
</script>

<style>
#custom {
	text-align: center;
	margin-top: 5rem;
}
button {
	background-color: #9c34d9;
	border-radius: 5px;
	border: none;
	color: white;
	cursor: pointer;
	font-family: inherit;
	font-size: 20px;
	outline: none;
	padding: 10px 20px;
	text-decoration: none;
}
button:hover {
	background-color: #fc3cf6;
}
button:active {
	background-color: #fa3c72;
}
</style>
