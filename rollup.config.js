import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import pkg from './package.json';

export default [{
	input: 'lib/index.js',
	output: [
		{ file: pkg.module, format: 'es' },
		{ file: pkg.main, format: 'umd', name:'genericui' },
	],

	plugins: [
		svelte({
			emitCss: false,
		}),
		css(),
		terser(),
		resolve(),
	]
}];
