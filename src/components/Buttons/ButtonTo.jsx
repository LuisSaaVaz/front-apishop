import React from 'react'
import { Link } from 'react-router-dom'

const ButtonTo = ({ to = '/', text, classe, handleclick}) => {
  return (
    <Link to={to}>
      <button
        onClick={handleclick}
        className={!classe ? 'card__button' : classe}
      >
        {text}
      </button>
    </Link>
  )
}

export default ButtonTo
