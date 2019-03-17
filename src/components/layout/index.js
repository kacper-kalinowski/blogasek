import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import "./styles/layout.scss"

const defaultMenu = [
  {
    label: "Blog",
    link: "/blog",
  },
  {
    label: "Dziennik treningowy",
    link: "/dziennik",
  },
]

const Layout = ({ menu, children }) => (
  <div className="site">
    <Header menu={menu || defaultMenu} />
    <main>{children}</main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
