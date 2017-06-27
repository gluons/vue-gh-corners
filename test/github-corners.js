import Vue from 'vue';
import GitHubCorners from '@/components/GitHubCorners.vue';
import { expect } from 'chai';

const GITHUB_BASE_URL = 'https://github.com';

const Ctor = Vue.extend(GitHubCorners);
const defaultBgColor = '#151513';
const defaultColor = '#fff';

describe('GitHubCorners', () => {
	let repo = 'gluons/vue-gh-corners';
	let vm = new Ctor({
		propsData: {
			repo,
			position: 'left',
			blank: false
		}
	}).$mount();

	it('should have default background color', () => {
		expect(vm.$props.bgColor).to.equal(defaultBgColor);
	});
	it('should have default color', () => {
		expect(vm.$props.color).to.equal(defaultColor);
	});
	it('should have left position', () => {
		expect(vm.$props.position).to.equal('left');
	});
	it('should have expected `url` computed value', () => {
		expect(vm.url).to.be.equal(`${GITHUB_BASE_URL}/${repo}`);
	});
	it('should have expected `blankAttr` computed value', () => {
		expect(vm.blankAttr).to.be.null;
	});
	it('should have expected `relAttr` computed value', () => {
		expect(vm.relAttr).to.be.null;
	});
	it('should have proper `svgStyle` computed value', () => {
		expect(vm.svgStyle).to.have.property('fill', defaultBgColor);
		expect(vm.svgStyle).to.have.property('color', defaultColor);
		expect(vm.svgStyle).to.have.property('left', 0);
		expect(vm.svgStyle).to.have.property('transform', 'scale(-1, 1)');
	});
});
