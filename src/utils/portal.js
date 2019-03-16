import { useEffect } from "react"
import ReactDOM from "react-dom"

const portalRoot =
  typeof document !== "undefined" && document.getElementById("portal")

const Portal = ({ children }) => {
  const element = document.createElement("div")

  useEffect(() => {
    portalRoot.appendChild(element)

    return () => portalRoot.removeChild(element)
  }, [])

  return ReactDOM.createPortal(children, element)
}

export default Portal
