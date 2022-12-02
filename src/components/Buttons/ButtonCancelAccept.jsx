import React from 'react'
import Button from './Button'
import '../../styles/button.css'


const ButtonCancelAccept = ({modalOpen,close,handleClick,}) => {
   
  return (
    <div className="button__container">
      <Button
        classe={'button__cancel'}
        text={'Cerrar'}
        handleClick={modalOpen && close}
      />
      <Button  text={'Aceptar'} handleClick={handleClick} />
    </div>
  )
}

export default ButtonCancelAccept