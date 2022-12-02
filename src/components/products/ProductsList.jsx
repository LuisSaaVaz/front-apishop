import useProducts from "../../shared/hooks/useProducts";
import Message from "../Message";
import Loading from "../Loading";
import Modal from "../Modal/Modal";
import { Products } from "./Products";
import "../../styles/productList.css";
import HeaderProducts from "./HeaderProducts";
import "../../styles/pagination.css";
import { Pagination } from "./Pagination";
import ButtonTo from "../Buttons/ButtonTo";
import useAuth from "../../shared/hooks/useAuth";
import Button from "../Buttons/Button";
import { useNavigate } from "react-router-dom";

export const ProductsList = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  //si location.pathname contiene likes/filterBy/loverId coger el param y copararlo con el user.id del contexto de autenticación, si es igual mostrar los likes del usuario, si no abrir el modal de error
  //Recuperara el resultado de la busqueda
  const { products, info, loading, error } = useProducts(
    (location) => `${location.pathname}${location.search}`
  );

  //if (loading) return <Loading classe="loader__products" />;

  if (products.length === 0 && loading)
    return <Loading classe="loader__products" />;
  if (error)
    return (
      <Modal>
        {error === "jwt expired" ? (
          <>
            <Message text={"Tu sesión ha expirado"} />
            <ButtonTo
              to={"/login"}
              text="Login"
              classe="modal__button"
              handleclick={logout}
            />
          </>
        ) : (
          <>
            <Message text={error} />
            <Button
              handleClick={() => navigate(-1)}
              text="Volver"
              classe="modal__button"
            />
          </>
        )}
      </Modal>
    );
  return (
    <section className="productList__container">
      <HeaderProducts />
      <Products
        loading={loading}
        products={products}
        nextPage={info.nextPage}
      />
      <Pagination info={info} />
    </section>
  );
};
