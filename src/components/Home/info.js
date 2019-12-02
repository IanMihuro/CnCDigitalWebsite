import React from "react"
import { Link } from "gatsby"

import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <Title title="Our Story" />
            <p className="lead text-muted mb-5">
              We specialize in making your Brand Competitive and fun by using
              the science of emotion to create marketing strategies tailored to
              suite your brand. We help you communicate your message effectively
              so that it echoes through all channels to help your brand find its
              edge and create long term growth.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                {" "}
                About Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
