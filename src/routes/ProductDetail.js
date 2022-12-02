import { useProduct } from "../shared/hooks/useProduct";
import ButtonTo from "../components/Buttons/ButtonTo";
import Loading from "../components/Loading";
import Message from "../components/Message";
import Modal from "../components/Modal/Modal";
import { ProductInfo } from "../components/products/ProductInfo";
import { UserInfo } from "../components/products/UserInfo";
import "../styles/productDetail.css";
import { useLocation } from "react-router-dom";


export const ProductDetail = () => {
  //Guardar location en el localstorage
  const location = useLocation();
  localStorage.setItem("productLocation", location.pathname);

  //Recuperara el resultado de la busqueda
  const {
    product,
    ownerUser,
    setName,
    setCategory,
    setLocation,
    setPrice,
    setValoration,
    setImage,
    setCaption,
    likes,
    loading,
    error,
  } = useProduct();

  //Guardar el producto en el localstorage
  localStorage.setItem("product", JSON.stringify(product));


  //Guardar el owner user en el localstarage
  localStorage.setItem("ownerUser", JSON.stringify(ownerUser));

  if (loading) return <Loading classe="loader__products" />;
  if (error)
    return (
      <Modal>
        <Message text={error} />
        <ButtonTo text="Home" classe="modal__button" />
      </Modal>
    );
  return (
    <div className="page__container">
      <section className="product__container">
        <UserInfo
          userInfo={ownerUser}
          productId={product?.id}
          productStatus={product?.status}
        />
        <ProductInfo
          product={product}
          setName={setName}
          setCategory={setCategory}
          setLocation={setLocation}
          setPrice={setPrice}
          setValoration={setValoration}
          setImage={setImage}
          setCaption={setCaption}
          likes={likes}
        />
      </section>
    </div>
  );
};
