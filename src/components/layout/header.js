import React from "react"
import { Link } from "gatsby"
import Icon from "../../utils/Icon"

const Header = () => {
  return (
    <header className="site-header">
      <div>
        <h1>
          <Link to="/">Kacper Kalinowski</Link>
        </h1>
        <p>Trener personalny</p>
      </div>
      <div className="site-header__hamburger">
        <button>
          <Icon name="hamburger" />
        </button>
      </div>
    </header>
  )
}
export default Header
