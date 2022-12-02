import { CategoryCard } from './CategoryCard'

export const Categories = ({ ranking }) => {
  const top5Categories = ranking.slice(0, 5)
  /* for (let i = 0; i < 5; i++) {
        top5Categories.push(ranking[i])
    } */

  return (
    //map de las 5 primeras categorias de categories
  
      <ul className="categories__list">
        {top5Categories.map((position, index) => (
          <CategoryCard
            key={index}
            category={position.category}
            total={position.total}
            classe={`categories__element__fondo categories__element__fondo${index}`}
          />
        ))}
      </ul>
    
  )
}
