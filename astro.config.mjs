import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
	site: 'https://suskanchan.pages.dev',
	integrations: [
		mdx(), 
		sitemap()
	],
	fonts: [
		{
			name: 'Playfair Display',
			cssVariable: '--font-playfair',
			provider: fontProviders.google(),
			fallbacks: ['serif'],
		},
	],
});
