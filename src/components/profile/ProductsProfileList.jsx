import useProfileProducts from "../../shared/hooks/useProfileProducts";
import ButtonTo from "../Buttons/ButtonTo";
import Loading from "../Loading";
import Message from "../Message";
import Modal from "../Modal/Modal";
import "../../styles/productList.css";
import { Products } from "../products/Products";
import useProducts from "../../shared/hooks/useProducts";
import { useNavigate, useParams } from "react-router-dom";
import { Pagination } from "../products/Pagination";
import HeaderProducts from "../products/HeaderProducts";
import Button from "../Buttons/Button";

export const ProductsProfileList = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const { products, info, loading, error } = useProducts(
    (location) => `/products/filterBy/userId/${id}${location.search}`
  );

  if (products.length === 0 && loading)
    return <Loading classe="loader__products" />;
  if (error)
    return (
      <Modal>
        <Message text={error} />
        <Button handleClick={() => navigate(-1)} text='Volver' classe="modal__button" />
      </Modal>
    );
  return (
    <section className="productProfileList__container">
      <HeaderProducts />
      <Products
        products={products}
        nextPage={info.nextPage}
        totalProducts={info.totalObject}
      />
      <Pagination info={info} />
    </section>
  );
};
