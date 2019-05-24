import React from "react"
import PropTypes from "prop-types"
import './tailwind.css'

const Layout = ({ menu, children }) => (
  <div className="site">
    <p className='text-6xl'>Hello world</p>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
