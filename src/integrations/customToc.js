// ... existing imports ...
import { visit } from 'unist-util-visit'
import { toString } from 'mdast-util-to-string'
export default function customToc() {
	return {
		name: 'custom-toc',
		hooks: {
			'astro:config:setup': ({ updateConfig }) => {
				updateConfig({
					markdown: {
						remarkPlugins: [
							() => (tree) => {
								visit(tree, 'paragraph', (node) => {
									if (node.children[0]?.value === '[TOC]') {
										// 找到所有标题
										const headings = []
										visit(
											tree,
											'heading',
											(headingNode) => {
												try {
													const text =
														toString(headingNode) ||
														' '
													const id =
														headingNode.data?.id ||
														text
															.toLowerCase()
															.replace(
																/[^\w\u4e00-\u9fa5]+/g,
																'-'
															)
															.replace(
																/^-|-$/g,
																''
															)
													if (text) {
														headings.push({
															depth: headingNode.depth,
															text: text,
															id: id,
														})
													}
												} catch (error) {
													console.warn(
														'Error processing heading:',
														headingNode,
														error
													)
												}
											}
										)

										// 生成带导航功能的目录
										const toc = headings
											.map((heading) => {
												const indent = '  '.repeat(
													heading.depth - 1
												)
												return `${indent}- <a href="#${heading.id}">${heading.text}</a>`
											})
											.join('\n')

										// 替换 [TOC] 为生成的目录
										node.type = 'html'
										node.value = `<div class="toc">\n${toc}\n</div>`
									}
								})
							},
						],
					},
				})
			},
		},
	}
}
