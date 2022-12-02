import React from 'react'
import '../../styles/button.css'

const Button = ({handleClick, classe, text}) => {
  return <button className={!classe ? 'button__main':classe} onClick={handleClick}> {text}</button>
}

export default Button