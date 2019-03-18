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

  return graphql(`
    {
      contentfulConfig(name: { eq: "Production" }) {
        postsPerPage
      }
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

    const config = result.data.contentfulConfig
    const posts = result.data.allContentfulPost.edges

    const { postsPerPage } = config
    const pages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: pages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/blog` : `/blog/${index + 1}`,
        component: blogTemplate,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
        },
      })
    })

    posts.forEach(({ node }) => {
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
