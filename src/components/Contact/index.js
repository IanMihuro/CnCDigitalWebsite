import React from "react"
import Title from "../Globals/Title"

export default function index() {
  return (
    <section className="contact py-5">
      <Title title="contact us" />
      <div className="row">
        <div className="col-10 c0l-sm-8 col-md-6 mx-auto">
          <form
            action="https://formspree.io/cncdigitalke@gmail.com"
            method="POST"
          >
            {/**name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="Name"
                id="name"
                placeholder=" John Doe"
              />
            </div>
            {/**email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="Email"
                id="email"
                placeholder=" John.Doe@gmail.com"
              />
            </div>
            {/**phone number */}
            <div className="form-group">
              <label htmlFor="mobile">Phone Number</label>
              <input
                type="text"
                className="form-control"
                name="Phone Number"
                id="phoneNumber"
                placeholder=" 0722123456"
              />
            </div>
            {/**description */}
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                rows="5"
                type="description"
                className="form-control"
                name="Description"
                id="description"
                placeholder="...your message"
              />
            </div>
            {/**submit */}
            <button
              type="submit"
              className="btn btn-yellow btn-block text-capitalize mt-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
