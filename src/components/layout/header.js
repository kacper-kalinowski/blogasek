import React from "react"
import { Link } from "gatsby"
import CTA from "../common/cta"

const Header = () => (
  <header className="absolute z-50 w-screen flex items-baseline p-6 lg:px-20 xl:px-32 text-white">
    <Link className="logo" to="/">
      <h1 className="logo__title">Kacper Kalinowski</h1>
      <p className="logo__subtitle">Trener Personalny</p>
    </Link>
    <nav className="flex flex-grow justify-end items-center">
      <button className="hidden sm:block text-lg lg:text-xl mr-3 md:mr-6 lg:mr-12">
        Kim jestem
      </button>
      <button className="hidden sm:block text-lg lg:text-lx mr-3 md:mr-6 lg:mr-12">
        Jak mogę ci pomóc
      </button>
      <button className="hidden sm:block text-lg lg:text-xl mr-3 md:mr-6 lg:mr-12">
        Co o mnie mówią
      </button>
      <CTA>Blog</CTA>
    </nav>
  </header>
)

export default Header
