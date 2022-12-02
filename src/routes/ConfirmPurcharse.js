
import useConfirmBuy from '../shared/hooks/useConfirmBuy'
import '../styles/confirmPurcharse.css'
import useAuth from '../shared/hooks/useAuth'
import Modal from '../components/Modal/Modal'
import ButtonTo from '../components/Buttons/ButtonTo'
import Message from '../components/Message'
import FormBuyProduct from '../components/Forms/FormBuyProduct'
import Loading from '../components/Loading'

export const ConfirmPurcharse = () => {
  const { buyer, product, loading, error } = useConfirmBuy()
  const { user } = useAuth()

  if (loading) return <Loading />

  if (error)
    return (
      <Modal>
        <Message text={error} />
        <ButtonTo text="Home" classe="modal__button" />
      </Modal>
    )

  if (!product)
    return (
      <Modal>
        <Message text={'El producto no existe o ya ha sido vendido'} />
        <ButtonTo to={'/'} text="home" classe="modal__button" />
      </Modal>
    )

  if (!user)
    return (
      <Modal>
        <Message text={'Debes iniciar sesión'} />
        <ButtonTo to={'/login'} text="login" classe="modal__button" />
      </Modal>
    )

  return (
    <section className="page__container">
      <section className="confirmPurcharse__container">
        <h2 className="confirmPurcharse__title">{buyer}</h2>
        <h3 className="confirmPurcharse__subtitle">
          Solicita la compra del siguiente producto:
        </h3>
        <article>
          <header className="productInfo__image__container">
            <img
              className="productInfo__image"
              src={`${process.env.REACT_APP_BACKEND_PUBLIC}/products/${product?.user_id}/${product?.image}`}
              alt={product?.image}
            />
          </header>
          <section className="productInfo__info__container">
            <div>
              <h2 className="productInfo__info__title">
                {product?.price} <span>EUR</span>
              </h2>
              <h3 className="productInfo__info__subTitle">{product?.name}</h3>
            </div>
          </section>
          <footer className="productInfo__footer">
            <p className="productInfo__info__text"> {product?.caption}</p>
            <FormBuyProduct />
          </footer>
        </article>
      </section>
    </section>
  )
}
