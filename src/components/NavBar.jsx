import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
      <nav>
        <li>
          <Link to="/">Home</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/favs">Favoritos</Link>
        </li>
      </nav>
    </>
  )
}
