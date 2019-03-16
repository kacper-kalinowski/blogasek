import React from "react"
import Portal from "../../utils/portal"
import Icon from "../../utils/icon"

const MobileMenu = ({ closeMenu }) => (
  <Portal>
    <div className="mobile-menu">
      <button onClick={closeMenu} className="mobile-menu__close">
        <Icon name="close" />
      </button>
    </div>
  </Portal>
)

export default MobileMenu
