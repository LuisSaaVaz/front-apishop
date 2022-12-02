import React from 'react'
import useAuth from '../../shared/hooks/useAuth'
import '../../styles/navbar.css'
import NavbarLogged from './NavbarLogged'
import NavbarNoLogged from './NavbarNoLogged'

const Navbar = () => {

  const { user, logout } = useAuth()
  
  return (
    user ? <NavbarLogged logout={logout} /> : <NavbarNoLogged/>
  )
}

export default Navbar