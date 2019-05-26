import React from "react"

const CTA = ({ children, className }) => (
  <button
    className={`cta ${className}`}
  >
    {children}
  </button>
)

export default CTA
