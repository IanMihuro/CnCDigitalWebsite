import React from "react"
import { graphql } from "gatsby"

import BackgroundSection from "../components/Globals/BackgroundSection"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Services from "../components/Services/index"

const ServicesPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="What we do..."
      styleClass="about-background"
    />
    <Services />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "geeks-2894621_1920.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default ServicesPage
