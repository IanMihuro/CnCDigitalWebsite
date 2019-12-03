import React from "react"
import { Link } from "gatsby"

import Title from "./Title"

const Info = props => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <Title title={props.title} />
            <p className="lead text-muted mb-5">{props.children}</p>
            {props.showAboutBtn ? (
              <Link to="/about/">
                <button className="btn text-uppercase btn-yellow">
                  {" "}
                  About Page
                </button>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
