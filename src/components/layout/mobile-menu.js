import React from "react"
import { Link } from "gatsby"
import Portal from "../../utils/portal"
import Icon from "../../utils/icon"

const MobileMenu = ({ menu, closeMenu }) => (
  <Portal>
    <div className="mobile-menu">
      <button onClick={closeMenu} className="mobile-menu__close">
        <Icon name="close" />
      </button>
      <nav>
        {menu.map(menuItem => {
          if (menuItem.link) {
            return <Link to={menuItem.link}>{menuItem.label}</Link>
          }
        })}
      </nav>
    </div>
  </Portal>
)

export default MobileMenu
