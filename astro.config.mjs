import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import { defineConfig } from 'astro/config'
import rehypeKatex from 'rehype-katex'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
	integrations: [react(), preact()],
	markdown: {
		remarkPlugins: [[remarkToc, { heading: 'toc', maxDepth: 3 }]],
		rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeKatex],
	},
	site: 'https://ChenBaijing.github.io',
	base: '/Astro-blog',
})
