/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`src/templates/blog/blog-template.js`)

  createPage({
    path: "/blog",
    component: blogTemplate,
    context: {},
  })
}
