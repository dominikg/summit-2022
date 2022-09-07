import adapter from '@sveltejs/adapter-auto';
import {mdsvex} from "mdsvex";
import importAssets from 'svelte-preprocess-import-assets';
import createShikiHighlighter from './src/utils/shiki-highlighter.js'
const shiki = await createShikiHighlighter({
	theme: 'github-dark',
	showLineNumbers: n => false
})
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions:['.svelte','.svx','.md'],
	kit: {
		adapter: adapter()
	},
	vitePlugin:{
		experimental: {
			inspector: {holdMode: true},
			// generateMissingPreprocessorSourcemaps: true,
			inlineEditor: true
		}
	},
	preprocess: [
		mdsvex({
			extensions: ['.svx','.md'],
			highlight: {
				highlighter:shiki,
			},
		}),
		importAssets()
	]
};

export default config;
