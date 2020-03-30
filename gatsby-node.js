/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// const path = require("path")
// const { createFilePath } = require("gatsby-source-filesystem")

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
  
//   if (node.internal.type === 'MarkdownRemark') {
//     // ファイル名からslugを作成するロジック
//     // https://www.gatsbyjs.org/docs/creating-slugs-for-pages/
//     const slug = createFilePath({ node, getNode, basePath: 'pages' })
//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug,
//     })
//   }
// }

// Gatsbyでページを構成するもっともシンプルなケース
// exports.createPages = ({ actions: { createPage } }) => {
//   createPage({
//     path: "/no-data/",
//     component: require.resolve("./src/templates/"),
//   })
// }