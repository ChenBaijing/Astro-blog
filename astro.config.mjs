import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import rehypeKatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import customToc from './src/integrations/customToc'
import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
	integrations: [react(), preact(), customToc()],
	markdown: {
		remarkPlugins: [],
		rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeKatex],
	},
	site: 'https://ChenBaijing.github.io',
	base: '/Astro-blog',
})
