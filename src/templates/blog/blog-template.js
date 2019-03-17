import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"

export default function Template({ data }) {
  const posts = data.allContentfulPost.edges.map(({ node }) => {
    const { title, description, publicationDate } = node
    const {
      html,
    } = node.childContentfulPostPostRichTextNode.childContentfulRichText

    return {
      title,
      description,
      publicationDate,
      html,
    }
  })

  console.log(posts)

  return (
    <Layout>
      <div>BLOG</div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query POSTS_QUERY {
    allContentfulPost {
      edges {
        node {
          title
          description
          publicationDate
          childContentfulPostPostRichTextNode {
            childContentfulRichText {
              html
            }
          }
        }
      }
    }
  }
`
