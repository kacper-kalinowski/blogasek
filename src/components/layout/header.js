import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className='flex items-baseline p-6 lg:px-20 xl:px-32'>
    <Link to="/">
      <h1 className="text-2xl">Kacper Kalinowski</h1>
      <p className="font-light">Trener Personalny</p>
    </Link>
    <nav className='flex flex-grow justify-end items-start'>
      <button className='hidden text-lg mr-3 lg:mr-6 xl:mr-12'>
        Kim jestem
      </button>
      <button className='hidden text-lg mr-3 lg:mr-6 xl:mr-12'>
        Jak mogę ci pomóc
      </button>
      <button className='hidden text-lg mr-3 lg:mr-6 xl:mr-12'>
        Co o mnie mówią
      </button>
      <button className='text-lg'>
        Blog
      </button>
    </nav>
  </header>
)

export default Header
