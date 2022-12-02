import { useState } from "react";
import useModal from "../../shared/hooks/useModal";
import Message from "../Message";
import Modal from "../Modal/Modal";
import { EditImageProductModal } from "../products/actionsProducts/EditImageProductModal";
import Button from "./Button";

export const ButtonImageEdit = ({ product, setImage }) => {
  const { close, modalOpen, open } = useModal();
  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);

  const handleClick = () => {
    close();
    setResponse(null);
    setImage(product.image);
    //window.location.reload(); //TODO: recargar la pagina para que se vean los cambios
  };

  return (
    <>
      <button className="productInfo__image__button" onClick={open}>
        <img
          className="productInfo__image"
          src={`${process.env.REACT_APP_BACKEND_PUBLIC}/products/${product.user_id}/${product.image}`}
          alt={product.image}
        />
      </button>
      {modalOpen && (
        <Modal handleClose={close} classeBack={"white"}>
          {!response ? (
            <EditImageProductModal
              product={product}
              error={error}
              setError={setError}
              setResponse={setResponse}
            />
          ) : (
            (error && (
              <>
                <Message text={error} />
                <Button
                  handleClick={close}
                  text={"Cerrar"}
                  classe={"button__cancel"}
                />
              </>
            ),
            response && (
              <>
                <Message text={response} />
                <Button
                  handleClick={handleClick}
                  text={"Listo !"}
                  classe={"modal__button"}
                />
              </>
            ))
          )}
        </Modal>
      )}
    </>
  );
};
