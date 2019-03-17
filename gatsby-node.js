/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const { postSlugify } = require("./src/utils/slugify")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`src/templates/blog/blog-template.js`)
  const postTemplate = path.resolve(`src/templates/post/post-template.js`)

  createPage({
    path: "/blog",
    component: blogTemplate,
    context: {},
  })

  return graphql(`
    {
      allContentfulPost {
        edges {
          node {
            title
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allContentfulPost.edges.forEach(({ node }) => {
      createPage({
        path: postSlugify(node.title),
        component: postTemplate,
        context: {
          title: node.title,
        },
      })
    })
  })
}
