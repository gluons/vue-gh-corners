/// <reference path='../src/sfc.d.ts' />

import { shallowMount } from '@vue/test-utils';
import GitHubCorners from '../src/components/GitHubCorners.vue';

type GitHubCornersComputed = {
	url: string;
	blankAttr: string;
	relAttr: string;
	svgStyle: CSSStyleDeclaration;
};
type GitHubCornersWithComputed = GitHubCorners & GitHubCornersComputed;

const GITHUB_BASE_URL = 'https://github.com';

const defaultBgColor = '#151513';
const defaultColor = '#fff';

describe('GitHubCorners', () => {
	const repo = 'gluons/vue-gh-corners';
	const wrapper = shallowMount<GitHubCornersWithComputed>(GitHubCorners, {
		propsData: {
			repo,
			position: 'left',
			blank: false
		}
	});
	const { vm } = wrapper;

	it('should have default background color', () => {
		expect(wrapper.props('bgColor')).toEqual(defaultBgColor);
	});
	it('should have default color', () => {
		expect(wrapper.props('color')).toEqual(defaultColor);
	});
	it('should have left position', () => {
		expect(wrapper.props('position')).toEqual('left');
	});
	it('should have expected `url` computed value', () => {
		expect(vm.url).toEqual(`${GITHUB_BASE_URL}/${repo}`);
	});
	it('should have expected `blankAttr` computed value', () => {
		expect(vm.blankAttr).toBeNull();
	});
	it('should have expected `relAttr` computed value', () => {
		expect(vm.relAttr).toBeNull();
	});
	it('should have proper `svgStyle` computed value', () => {
		expect(vm.svgStyle.fill).toEqual(defaultBgColor);
		expect(vm.svgStyle.color).toEqual(defaultColor);
		expect(vm.svgStyle.left).toEqual(0);
		expect(vm.svgStyle.transform).toEqual('scale(-1, 1)');
	});
});
