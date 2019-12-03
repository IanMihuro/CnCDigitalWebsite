import React from "react"
import { graphql } from "gatsby"

import BackgroundSection from "../components/Globals/BackgroundSection"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Info from "../components/Globals/info"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="C&C DIGITAL"
        styleClass="default-background"
      />
      <Info showAboutBtn={false} title="Our Story">
        We specialize in making your Brand Competitive and fun by using the
        science of emotion to create marketing strategies tailored to suite your
        brand. We help you communicate your message effectively so that it
        echoes through all channels to help your brand find its edge and create
        long term growth.
      </Info>
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(
      relativePath: { eq: "abstract-art-circle-clockwork-414579.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default IndexPage
