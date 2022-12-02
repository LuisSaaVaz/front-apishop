import React from 'react'
import ButtonTo from '../Buttons/ButtonTo'

const FooterForm = () => {
  return (
    <footer className="form__footer">
      <ButtonTo
        text={'Registrate'}
        to="/register"
        classe={'form__footer__button'}
      />
      <span> | </span>
      <ButtonTo text={'Inicio'} to="/" classe={'form__footer__button'} />
    </footer>
  )
}

export default FooterForm