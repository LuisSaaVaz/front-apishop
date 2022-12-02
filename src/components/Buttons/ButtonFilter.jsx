import React from 'react'
import ChevronDown from '../Icons/ChevronDown'



const ButtonFilter = ({ text, children, handleclik }) => {
  

  return (
    <li onClick={handleclik} className="headerProducts__list__element">
      <span className="headerProducts__element__image">{children}</span>
      <p className="headerProducts__element__text">{text}</p>
      <span className="headerProducts__element__image-2"> <ChevronDown/></span>
    </li>
  )
}

export default ButtonFilter
