import React, { useState } from "react"
import { Link } from "gatsby"
import MobileMenu from "./mobile-menu"
import Icon from "../../utils/icon"

const Header = ({ menu }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const openMenu = () => setMobileMenuOpen(true)
  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <header className="site-header">
      {mobileMenuOpen && <MobileMenu menu={menu} closeMenu={closeMenu} />}
      <div>
        <h1>
          <Link to="/">Kacper Kalinowski</Link>
        </h1>
        <p>Trener personalny</p>
      </div>
      <div className="site-header__hamburger">
        <button onClick={openMenu}>
          <Icon name="hamburger" />
        </button>
      </div>
    </header>
  )
}
export default Header
