import React from "react"

import Menu from "./menu"

export default function Capabilities({ items }) {
  return (
    <section>
      <div className="container">
        <Menu items={items} />
      </div>
    </section>
  )
}
