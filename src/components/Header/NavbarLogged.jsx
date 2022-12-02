import React from 'react'

import useAuth from '../../shared/hooks/useAuth'
import ButtonListTo from '../Buttons/ButtonListTo'

import Heart from '../Icons/Heart'
import MeSvg from '../Icons/Me'
import PlusCircle from '../Icons/PlusCircle'


const NavbarLogged = ({ logout }) => {
  //recuperar el usuario del contexto de autenticación
  const { user } = useAuth()

  return (
    <ul className="navbar--logged__list">
      <ButtonListTo
        to={`/likes/filterBy/loverId/${user.id}`}
        text={'Favoritos'}
        classe={'navbar--logged__list__item'}
      >
        <Heart />
      </ButtonListTo>
      <ButtonListTo
        to={`/profile`}
        text={'Tú'}
        classe={'navbar--logged__list__item'}
      >
        <MeSvg />
      </ButtonListTo>
      <ButtonListTo
        to={`products/add`}
        onClick={() => logout()}
        text={'Súbelo'}
        classe={'navbar--logged__list__item'}
      >
        <PlusCircle />
      </ButtonListTo>
    </ul>
  )
}

export default NavbarLogged
