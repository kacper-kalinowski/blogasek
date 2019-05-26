import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import CTA from "../common/cta"

const HERO_BG_QUERY = graphql`
  query HERO_BG_QUERY {
    file(name: { eq: "hero" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Hero = () => (
  <StaticQuery
    query={HERO_BG_QUERY}
    render={data => {
      console.log(data)
      return (
        <BackgroundImage
          Tag="section"
          fluid={data.file.childImageSharp.fluid}
          className="flex flex-col justify-center items-center min-h-screen"
        >
          <div className="absolute inset-0 z-10 bg-gray-700 opacity-75" />
          <h2 className="text-white z-20 text-4xl mb-4 md:text-5xl">
            Chcesz stać się <span className="text-gold">silniejszy</span>?
          </h2>
          <CTA className="md:text-2xl">Napisz do mnie</CTA>
        </BackgroundImage>
      )
    }}
  />
)

export default Hero
