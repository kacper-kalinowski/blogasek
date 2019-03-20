/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const { postSlugify, journalSlugify } = require("./src/utils/slugify")
const { BLOG_ENTRY, JOURNAL_ENTRY } = require("./src/utils/consts")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`src/templates/blog/blog-template.js`)
  const postTemplate = path.resolve(`src/templates/post/post-template.js`)
  const journalTemplate = path.resolve(
    `src/templates/journal/journal-template.js`
  )

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
      allContentfulJournal {
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
    const journalEntries = result.data.allContentfulJournal.edges

    const { postsPerPage } = config
    const postPages = Math.ceil(posts.length / postsPerPage)
    const journalPages = Math.ceil(journalEntries.length / postsPerPage)

    Array.from({ length: journalPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/dziennik` : `/dziennik/${index + 1}`,
        component: journalTemplate,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          pages: journalPages,
          currentPage: index + 1,
        },
      })
    })

    Array.from({ length: postPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/blog` : `/blog/${index + 1}`,
        component: blogTemplate,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          pages: postPages,
          currentPage: index + 1,
        },
      })
    })

    journalEntries.forEach(({ node }) => {
      createPage({
        path: journalSlugify(node.title),
        component: postTemplate,
        context: {
          title: node.title,
          type: JOURNAL_ENTRY,
        },
      })
    })

    posts.forEach(({ node }) => {
      createPage({
        path: postSlugify(node.title),
        component: postTemplate,
        context: {
          title: node.title,
          type: BLOG_ENTRY,
        },
      })
    })
  })
}
