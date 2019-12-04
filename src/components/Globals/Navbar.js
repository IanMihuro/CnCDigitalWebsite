import React, { Component } from "react"
import { Link } from "gatsby"

import logo from "../../images/C&C_logo.png"
// import { FaCartArrowDown } from "react-icons/fa"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse ",
    links: [
      {
        id: 1,
        path: "/",
        text: "Home",
      },
      {
        id: 2,
        path: "/about/",
        text: "About",
      },
      {
        id: 3,
        path: "/services/",
        text: "Services",
      },
      {
        id: 4,
        path: "/capabilities/",
        text: "Capabilities",
      },
      // {
      //   id: 5,
      //   path: "/experience/",
      //   text: "Experience",
      // },
      {
        id: 6,
        path: "/contact/",
        text: "Contact",
      },
    ],
  }

  navbarHandler = () => {
    //TODO
    if (!this.state.navbarOpen) {
      this.setState({
        navbarOpen: true,
        css: "collapse navbar-collapse show",
      })
    } else {
      this.setState({
        navbarOpen: false,
        css: "collapse navbar-collapse ",
      })
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" height="50px" weight="50px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item ">
                  <Link className="nav-link text-capitalize" to={link.path}>
                    {link.text}
                  </Link>
                </li>
              )
            })}
            <li className="nav-item ml-sm-5">
              {/* <FaCartArrowDown className="cart-icon" /> */}
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
