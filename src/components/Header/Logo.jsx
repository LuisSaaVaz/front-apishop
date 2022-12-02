import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo3.png'
import logoMovile from '../../img/logoMovile.png'

const Logo = () => {
  return (
    <Link to="/">
      <img className="header__logo" src={logo} alt="logo" />
      <img className="header__logo--movile" src={logoMovile} alt="logo" />
    </Link>
  )
}

export default Logo