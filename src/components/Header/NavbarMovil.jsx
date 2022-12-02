import { motion } from 'framer-motion'
import React from 'react'
import HeartMovil from '../Icons/HeartMovil'
import Home from '../Icons/Home'
import Mail from '../Icons/Mail'
import MeMovil from '../Icons/MeMovil'
import PlusCircleMovil from '../Icons/PlusCircleMovil'
import useNavMovilLinks from '../../shared/hooks/useLinks'
import ButtonListTo from '../Buttons/ButtonListTo'

const NavbarMovil = () => {

  const buttons = ['Inicio', 'Favoritos', 'Subelo', 'Mail', 'Perfil']
  const { selectLinkTo, selected, setSelected } = useNavMovilLinks()

  let fillContent = null
  let linkClass = null
  let text = null
  
  return (
    <nav className="navbar--movil__container">
      <ul className="navbar--movil__list">
        {buttons.map((buttonLink) => {
          linkClass = selected === buttonLink ? 'selected' : ''
          fillContent = selected === buttonLink ? '#FF6B67' : 'white'
          const render = {
            Inicio: <Home fill={fillContent} />,
            Favoritos: <HeartMovil fill={fillContent} />,
            Subelo: <PlusCircleMovil fill={fillContent} />,
            Mail: <Mail fill={fillContent} />,
            Perfil: <MeMovil fill={fillContent} />,
          }
          text = buttons.find((el) => el === buttonLink)
          return (
            <ButtonListTo              key={buttonLink}
              render={() => setSelected(buttonLink)}
              to={selectLinkTo(buttonLink)}
              classe={`navbar--movil__list__item ${linkClass}`}
              text={text}
            >
              {render[buttonLink]}
              {selected === buttonLink ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </ButtonListTo>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavbarMovil
