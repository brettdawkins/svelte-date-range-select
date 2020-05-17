import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';
import commonjs from "rollup-plugin-commonjs";

export default 
	{
		input: 'src/DateRangeSelect.svelte',
		output: [
			{ file: pkg.module, 'format': 'es' },
			{ file: pkg.main, 'format': 'umd', name: 'DateRangeSelect' }
		],
		plugins: [
			resolve(),
			svelte(),
			commonjs()
		]
	}


