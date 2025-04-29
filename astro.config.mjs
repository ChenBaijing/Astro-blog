import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import { defineConfig } from 'astro/config'
import rehypeKatex from 'rehype-katex'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import customToc from './src/integrations/customToc'
import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
	integrations: [react(), preact()],
	markdown: {
		remarkPlugins: [
			[
				remarkToc,
				{
					heading: '\\[TOC\\]',
					maxDepth: 3,
					tight: true,
					replace: true,
				},
			],
		],
		rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeKatex],
	},
	site: 'https://ChenBaijing.github.io',
	base: '/Astro-blog',
})
