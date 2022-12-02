import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import '../../styles/header.css'
import { Search } from './Search'


const Header = () => {
  return (
    <header className='header__container'>
      <Logo />
      <Search />
      <Navbar /> 
    </header>
  )
}

export default Header