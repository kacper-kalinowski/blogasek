import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1
      style={{
        fontSize: "40px",
        fontWeight: "bold",
        margin: "10px",
        color: "#FFE400",
      }}
    >
      Kacper Kalinowski
    </h1>
    <h2
      style={{
        fontSize: "28px",
        fontWeight: "bold",
        margin: "8px",
        color: "hsl(0,0%,90%)",
      }}
    >
      Trener personalny
    </h2>
    <h3
      style={{
        fontSize: "22px",
        fontWeight: "bold",
        margin: "3px",
        color: "hsl(0,0%,90%)",
      }}
    >
      Coming soon...
    </h3>
  </Layout>
)

export default IndexPage
