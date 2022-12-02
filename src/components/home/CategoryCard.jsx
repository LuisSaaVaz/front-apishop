import { Link } from "react-router-dom";

export const CategoryCard = ({ category, total, classe }) => {
  // Cada category devuelve un li con Link a su ruta correspondiente
  return (
    <li className="categories__element">
      <Link
        className="categories__element__container"
        to={`/products?category=${category}`}
      >
        <div className={classe}>
          <img
            className="categories__element__image"
            src={`${process.env.REACT_APP_BACKEND_IMG_DEFAULT}/categories/${category}.png`}
            alt={category}
          />
        </div>

        <h3 className="categories__element__title">{`${category}`}</h3>
        <p className="categories__element__text">{total} products</p>
      </Link>
    </li>
  );
};
