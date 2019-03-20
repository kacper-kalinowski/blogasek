import React from "react"
import { Link, graphql } from "gatsby"
import { postSlugify } from "../../utils/slugify"
import Layout from "../../components/layout"

export default function Template({ data }) {
  const entries = data.allContentfulJournal.edges.map(({ node }) => {
    const { title, publicationDate } = node

    return {
      title,
      publicationDate,
    }
  })

  return (
    <Layout>
      {entries.map(entry => (
        <article key={entry.title}>
          <header>
            <Link to={postSlugify(entry.title)}>{entry.title}</Link>
            <p>{entry.publicationDate}</p>
          </header>
        </article>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query JOURNAL_QUERY {
    allContentfulJournal(sort: { fields: publicationDate, order: DESC }) {
      edges {
        node {
          title
          publicationDate(formatString: "DD MMMM YYYY", locale: "pl")
        }
      }
    }
  }
`
