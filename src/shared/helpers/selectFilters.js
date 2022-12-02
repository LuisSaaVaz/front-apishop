const selectFilters = (category) => {
  const filters = ['Categorias', 'Precio', 'Localidad']

  if (category) {
    const filterWithOutCategory = filters.filter(
      (item) => item !== 'Categorias'
    )
    return filterWithOutCategory
  }
  return filters
}

export default selectFilters
