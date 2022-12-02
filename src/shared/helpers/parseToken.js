// Función con la que podemos extraer información de un JWT
const parseToken = (token) => {
  if (token) {
    const splittedToken = token.split('.')
    const chunkWithData = splittedToken[1]
    return JSON.parse(atob(chunkWithData))
  }
  return null
}

export default parseToken
