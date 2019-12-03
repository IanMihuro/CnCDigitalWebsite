import React from "react"
import { graphql } from "gatsby"

import BackgroundSection from "../components/Globals/BackgroundSection"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/About/index"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="About C&C Digital"
      styleClass="about-background"
    />
    <About />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "blue-and-red-galaxy-artwork-1629236.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default AboutPage
