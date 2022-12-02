/* import useModal from "../../shared/hooks/useModal";
import Modal from "../Modal/Modal";
import { DeleteProductModal } from "../products/actionsProducts/DeleteProductModal";

export const ButtonDelete = ({ productId }) => {
  const { close, modalOpen, open } = useModal();

  return (
    <li>
      <button onClick={open} className="pruductInfo__info__button">
        Borrar
      </button>
      {modalOpen && (
        <Modal handleClose={close}>
          <DeleteProductModal productId={productId} />
        </Modal>
      )}
    </li>
  );
}; */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import modalEffects from "../../shared/helpers/modalEffects";
import useAuth from "../../shared/hooks/useAuth";
import useModal from "../../shared/hooks/useModal";
import { deleteProductService } from "../../shared/services";
import Loading from "../Loading";
import Message from "../Message";
import Modal from "../Modal/Modal";
import Button from "./Button";
import ButtonCancelAccept from "./ButtonCancelAccept";
import ButtonTo from "./ButtonTo";

export const ButtonDelete = ({ productId }) => {
  const navigate = useNavigate();
  const { close, modalOpen, open } = useModal();
  const { token, logout } = useAuth();
  const { sliceMid } = modalEffects();
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const text = "¿Seguro que quieres borrar este producto?";

  const handleClick = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await deleteProductService(productId, token);
      setLoading(false);
      setResponse(data.message);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading classe="loader__products" />;
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
            <ButtonTo text="Volver" classe="modal__button" />
          </>
        )}
      </Modal>
    );

  return (
    <li>
      <button onClick={open} className="pruductInfo__info__button">
        Borrar
      </button>
      {modalOpen && (
        <Modal
          classe={"modal__buy"}
          classeBack={"white"}
          variant={sliceMid}
          handleClose={close}
        >
          {!response ? (
            <>
              <Message text={text} />
              <ButtonCancelAccept
                modalOpen={modalOpen}
                close={close}
                handleClick={handleClick}
              />
            </>
          ) : (
            <>
              <Message text={response} />
              <Button
                handleClick={() => navigate(-1)}
                text={"Listo !"}
                classe={"modal__button"}
              />
            </>
          )}
        </Modal>
      )}
    </li>
  );
};
