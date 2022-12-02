import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import useAuth from './useAuth'

const useNavMovilLinks = () => {
  const [selected, setSelected] = useState("Inicio")
  const { user } = useAuth()
  let location = useLocation()
  let path = location.pathname
  
  let linkTo = null
  let linkInicio = null
  
    const selectLinkTo = (link) => {
      linkTo = user ? links[link] : 'login'
      linkInicio = !user && link === 'Inicio' ? '/' : 'login'
      if (user) return linkTo
      if (!user) return linkInicio
    }

  const links = {
    Inicio: '/',
    Favoritos: `/likes/filterBy/loverId/${user?.id}`,
    Subelo: '/products/add',
    Mail: '/',
    Perfil: '/profile',
  }

  useEffect(() => {
    switch (path) {
      case '/':
        setSelected('Inicio')
        break
      case '/likes/filterBy/loverId/':
        setSelected('Favoritos')
        break
      case '/products':
        setSelected('Subelo')
        break
      case '/profile':
        setSelected('Perfil')
        break
      default:
        break
    }
  }, [path])

  return { selectLinkTo, selected, setSelected }
}

export default useNavMovilLinks
