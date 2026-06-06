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
							() => (tree, file) => {
								const headings = []

								visit(tree, 'heading', (headingNode) => {
									try {
										const text =
											toString(headingNode) || ' '
										const id =
											headingNode.data?.id ||
											text
												.toLowerCase()
												.replace(/[^\w一-]+/g, '-')
												.replace(/^-|-$/g, '')
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
											error,
										)
									}
								})

								if (headings.length === 0) return

								// 生成嵌套结构的 TOC HTML
								const generateNestedToc = (items) => {
									if (items.length === 0) return ''
									let html = '<ul>'
									items.forEach((item) => {
										html += `<li><a href="#${item.id}">${item.text}</a>`
										if (
											item.children &&
											item.children.length > 0
										) {
											html += generateNestedToc(
												item.children,
											)
										}
										html += '</li>'
									})
									html += '</ul>'
									return html
								}

								// 将扁平 headings 转为嵌套结构
								const buildNested = (list) => {
									const result = []
									const stack = []
									list.forEach((h) => {
										const node = { ...h, children: [] }
										while (
											stack.length > 0 &&
											stack[stack.length - 1].depth >=
												h.depth
										) {
											stack.pop()
										}
										if (stack.length === 0) {
											result.push(node)
										} else {
											stack[
												stack.length - 1
											].children.push(node)
										}
										stack.push(node)
									})
									return result
								}

								const nested = buildNested(headings)
								const tocHtml =
									'<div class="toc">\n' +
									generateNestedToc(nested) +
									'\n</div>'

								// 将 tocHtml 写入 frontmatter，供布局层使用
								if (file?.data?.astro?.frontmatter) {
									file.data.astro.frontmatter.tocHtml =
										tocHtml
								}

								// 移除文章中的 [TOC] 占位符（TOC 由侧边栏渲染）
								const removeTocPlaceholder = (
									node,
									index,
									parent,
								) => {
									if (parent && index !== undefined) {
										parent.children.splice(index, 1)
									}
								}

								// 处理 paragraph 中的 [TOC]
								visit(
									tree,
									'paragraph',
									(node, index, parent) => {
										if (
											node.children.length === 1 &&
											node.children[0]?.value === '[TOC]'
										) {
											removeTocPlaceholder(
												node,
												index,
												parent,
											)
										}
									},
								)

								// 处理 inlineCode 中的 [TOC]
								visit(
									tree,
									'inlineCode',
									(node, index, parent) => {
										if (node.value === '[TOC]') {
											removeTocPlaceholder(
												node,
												index,
												parent,
											)
										}
									},
								)

								// 处理 text 节点中的 [TOC]（兼容其他情况）
								visit(tree, 'text', (node, index, parent) => {
									if (
										node.value === '[TOC]' &&
										parent &&
										parent.type !== 'paragraph' &&
										parent.type !== 'inlineCode'
									) {
										removeTocPlaceholder(
											node,
											index,
											parent,
										)
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
