import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"

export default function Template({ data }) {
  const {
    title,
    publicationDate,
    childContentfulPostPostRichTextNode,
  } = data.contentfulPost
  const { html } = childContentfulPostPostRichTextNode.childContentfulRichText

  return (
    <Layout>
      <header>
        <h1>{title}</h1>
        <p>{publicationDate}</p>
      </header>
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query POST($title: String!) {
    contentfulPost(title: { eq: $title }) {
      title
      publicationDate(formatString: "D MMMM YYYY", locale: "pl")
      childContentfulPostPostRichTextNode {
        childContentfulRichText {
          html
        }
      }
    }
  }
`
