import React from "react"
import { Link, graphql } from "gatsby"
import { journalSlugify } from "../../utils/slugify"
import Layout from "../../components/layout"

export default function Template({ data, pageContext }) {
  const { currentPage, pages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === pages
  const prevPageLink =
    currentPage - 1 === 1 ? `/dziennik` : `/dziennik/${currentPage - 1}`
  const nextPageLink = `/dziennik/${currentPage + 1}`

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
            <Link to={journalSlugify(entry.title)}>{entry.title}</Link>
            <p>{entry.publicationDate}</p>
          </header>
        </article>
      ))}
      <nav>
        {!isFirst && (
          <Link to={prevPageLink} rel="prev">
            ← Previous page
          </Link>
        )}
        <span>{`Page ${currentPage} of ${pages}`}</span>
        {!isLast && (
          <Link to={nextPageLink} rel="next">
            Next page →
          </Link>
        )}
      </nav>
    </Layout>
  )
}

export const pageQuery = graphql`
  query JOURNAL_QUERY($skip: Int!, $limit: Int!) {
    allContentfulJournal(
      sort: { fields: publicationDate, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          title
          publicationDate(formatString: "DD MMMM YYYY", locale: "pl")
        }
      }
    }
  }
`
