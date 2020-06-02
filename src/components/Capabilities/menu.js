import React, { Component } from "react"
import Img from "gatsby-image"

import Title from "../Globals/Title"

const getCategories = items => {
  let tempItems = items.map(item => {
    return item.node.category
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["All", ...categories]
  return categories
}

class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: props.items.edges,
      menuItems: props.items.edges,
      categories: getCategories(props.items.edges),
    }
  }

  handleClick = category => {
    let tempItems = [...this.state.items]

    if (category === "All") {
      this.setState(() => {
        return { menuItems: tempItems }
      })
    } else {
      let filteredItems = tempItems.filter(
        ({ node }) => node.category === category
      )
      this.setState(() => {
        return {
          menuItems: filteredItems,
        }
      })
    }
  }

  render() {
    const { items, menuItems, categories } = this.state

    if (items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Best of CnC Digital ..." />
            {/** Categories */}
            <div className="row mb-5">
              <div className="col-10 mx-auto text-center">
                {categories.map((category, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      className="btn btn-yellow text-capitalize m-3"
                      onClick={() => this.handleClick(category)}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </div>
            {/* *items */}
            <div className="row">
              {menuItems.map(({ node }) => {
                return (
                  <div
                    key={node.id}
                    className="col-11 col-md-6 my-3 d-flex mx-auto"
                  >
                    <div>
                      <Img fixed={node.image.fixed} />
                    </div>
                    {/** item text */}
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-0 text-yellow">{node.title}</h6>
                      </div>
                      <p className="text-muted">
                        <small>{node.description.description}</small>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Oh no..." />
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>There are no items to display</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}

export default Menu
