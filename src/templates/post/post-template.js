import React from "react"
import { graphql } from "gatsby"
import { BLOG_ENTRY, JOURNAL_ENTRY } from "../../utils/consts"
import Layout from "../../components/layout"

function getEntry(type, data) {
  switch (type) {
    case BLOG_ENTRY:
      return {
        title: data.contentfulPost.title,
        publicationDate: data.contentfulPost.publicationDate,
        html:
          data.contentfulPost.childContentfulPostPostRichTextNode
            .childContentfulRichText.html,
      }
    case JOURNAL_ENTRY:
      return {
        title: data.contentfulJournal.title,
        publicationDate: data.contentfulJournal.publicationDate,
        html:
          data.contentfulJournal.childContentfulJournalEntryRichTextNode
            .childContentfulRichText.html,
      }
    default:
      break
  }
}

export default function Template({ data, pageContext }) {
  const { title, publicationDate, html } = getEntry(pageContext.type, data)

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
    contentfulJournal(title: { eq: $title }) {
      title
      publicationDate(formatString: "D MMMM YYYY", locale: "pl")
      childContentfulJournalEntryRichTextNode {
        childContentfulRichText {
          html
        }
      }
    }
  }
`
