import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	optimizeDeps: {
		exclude: ['@codemirror']
	},
	plugins: [sveltekit()],
	resolve:{
		alias:{
			'$components':'/src/components',
			'$assets':'/src/assets'
		}
	}
};

export default config;
