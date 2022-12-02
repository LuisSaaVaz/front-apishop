import React from 'react'
import ButtonListTo from '../Buttons/ButtonListTo'


const NavbarNoLogged = () => {
  return (
    <ul className="navbar__list">
      <ButtonListTo to={"register"} text={ "Register"} />
      <ButtonListTo to={"login"} text={ "Login"} />
    </ul>
  )
}

export default NavbarNoLogged