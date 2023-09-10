import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
      <nav className='flex justify-between'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
          <li>
            <Link to="/favs">Favoritos</Link>
          </li>
        </ul>
        <button>Cambiar tema</button>
      </nav>
    </>
  )
}
