import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
	site: 'https://pages.dev',
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
		{
			name: 'Fraunces',
			cssVariable: '--font-fraunces',
			provider: fontProviders.google(),
			fallbacks: ['serif'],
		},
		{
			name: 'Monare Regular',
			cssVariable: '--font-monare',
			provider: fontProviders.local(),
			// The required system array wrapper for processing local binaries
			options: {
				variants: [
					{
						weight: 400,
						style: 'normal',
						src: ['./src/assets/fonts/Monare-Regular.otf'],
					}
				]
			},
			fallbacks: ['sans-serif'],
		},
	],
});
