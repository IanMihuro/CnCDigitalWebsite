import React from "react"
import { graphql } from "gatsby"

import BackgroundSection from "../components/Globals/BackgroundSection"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Capabilities from "../components/Capabilities"

const CapabilitiesPage = ({ data }) => (
  <Layout>
    <SEO title="Capabilities" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="What we've done..."
      styleClass="about-background"
    />
    <Capabilities items={data.menu} />
  </Layout>
)

export const query = graphql`
  {
    img: file(
      relativePath: {
        eq: "abstract-black-and-white-dark-design-230659 (1).jpg"
      }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCnCImages {
      edges {
        node {
          id
          title
          category
          description {
            description
          }
          image {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
export default CapabilitiesPage
