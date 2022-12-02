import { Link } from "react-router-dom";
import useAuth from "../../shared/hooks/useAuth";
import { ButtonListActions } from "../Buttons/ButtonListActions";
import { ButtonImageEdit } from "../Buttons/ButtonImageEdit";

export const ProductInfo = ({
  product,
  setName,
  setCategory,
  setLocation,
  setPrice,
  setValoration,
  setImage,
  setCaption,
  likes,
}) => {
  const { user } = useAuth();

  /* const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (loading) return <Loading classe="loader__products" />;

  if (error)
    return (
      <Modal>
        <Message text={error} />
        <ButtonTo text="Home" classe="modal__button" />
      </Modal>
    ); */

  return (
    <article className="productInfo__container">
      <header className="productInfo__image__container">
        {user && (user.id === product.user_id || user.status === "admin") ? (
          <ButtonImageEdit product={product} setImage={setImage} />
        ) : (
          <img
            className="productInfo__image"
            src={`${process.env.REACT_APP_BACKEND_PUBLIC}/products/${product.user_id}/${product.image}`}
            alt={product.image}
          />
        )}
      </header>
      <section className="productInfo__info__container">
        <div className="productInfo__info__data">
          <h2 className="productInfo__info__title">
            {product.price} <span>€</span>
          </h2>
          <h3 className="productInfo__info__subTitle">{product.name}</h3>
        </div>
        <ButtonListActions user={user} product={product} setName={setName} />
      </section>
      <footer className="productInfo__footer">
        <p className="productInfo__info__text"> {product.caption}</p>
        <ul className="productInfo__info__list">
          <li>
            <button className="productInfo__footer__button">
              <Link to={`/products?category=${product.category}`}>
                {product.category}
              </Link>
            </button>
            <span> / </span>
            <button className="productInfo__footer__button">
              <Link to={`/products?name=${product.name}`}>{product.name}</Link>
            </button>
          </li>
          <li>
            <p>{`❤️ ${likes}`}</p>
          </li>
        </ul>
      </footer>
    </article>
  );
};
