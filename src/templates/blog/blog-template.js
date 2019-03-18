import React from "react"
import { Link, graphql } from "gatsby"
import { postSlugify } from "../../utils/slugify"
import Layout from "../../components/layout"

export default function Template({ data }) {
  const posts = data.allContentfulPost.edges.map(({ node }) => {
    const { title, description, publicationDate } = node

    return {
      title,
      description,
      publicationDate,
    }
  })

  return (
    <Layout>
      <div>
        {posts.map(post => (
          <article key={post.title}>
            <header>
              <Link to={postSlugify(post.title)}>{post.title}</Link>
              <p>{post.publicationDate}</p>
            </header>
            <p>{post.description}</p>
          </article>
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query POSTS_QUERY($skip: Int!, $limit: Int!) {
    allContentfulPost(
      sort: { fields: publicationDate, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          title
          description
          publicationDate(formatString: "D MMMM YYYY", locale: "pl")
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
