import React from "react"
import PropTypes from "prop-types"

const Layout = ({ menu, children }) => (
  <div className="site">
    Hello world
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
