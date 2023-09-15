import { Link } from 'react-router-dom'
import { useGlobalContext } from './utils/global.context'

export const NavBar = () => {
  const { state, dispatch } = useGlobalContext();
  const changeTheme = () => {
    dispatch({ type: 'SET_THEME', payload: state.theme === 'light' ? 'dark' : 'light' })
  }

  return (
    <>
      <nav className={ state.theme} >
        <ul className="list">
          <li className={state.theme}>
            <Link to="/">Home</Link>
          </li>
          <li className={state.theme}>
            <Link to="/contact">Contacto</Link>
          </li>
          <li className={state.theme}>
            <Link to="/favs">Favoritos</Link>
          </li>
        </ul>
        <button className={'buttonTheme ' + state.theme } onClick={changeTheme}>Cambiar tema</button>
      </nav>
    </>
  )
}
