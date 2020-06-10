import React from "react"
import { graphql } from "gatsby"

import BackgroundSection from "../components/Globals/BackgroundSection"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/Contact"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact Us" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Reach out to us..."
      styleClass="about-background"
    />
    <Contact />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "red-and-yellow-stop-sticker-1749900.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default ContactPage
