import useCategories from '../../shared/hooks/useCategories'
import { Categories } from './Categories'
import '../../styles/categories.css'
import Loading from '../Loading'
import Modal from '../Modal/Modal'
import Message from '../Message'
import ButtonTo from '../Buttons/ButtonTo'

export const CategoriesList = () => {
  const { ranking, loading, error } = useCategories()

  const totalProducts =
    ranking
      .slice(0, 5)
      .map((item) => item.total)
      .reduce((acc, el) => acc + el, 0) - 3

  if (loading) return <Loading classe={'loader__products'} />
  if (error)
    return (
      <Modal>
        <Message text={error} />
        <ButtonTo to={'login'} text={'login'} classe={'modal__button'} />
      </Modal>
    )
  return (
    <section className="categories__container">
      <h2 className="categories__title"> Mejores Categorías</h2>
      <p className="categories__text">
        Más de {totalProducts} productos en nuestras mejores categorías
      </p>
      <Categories ranking={ranking} />
      <ButtonTo to="products" text={'¡Ver todos los Productos!'} />
    </section>
  )
}
