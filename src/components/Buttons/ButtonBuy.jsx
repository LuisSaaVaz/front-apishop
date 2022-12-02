import { useState } from "react";
import modalEffects from "../../shared/helpers/modalEffects";
import useAuth from "../../shared/hooks/useAuth";
import useModal from "../../shared/hooks/useModal";
import { getBuyProductsService } from "../../shared/services";
import Loading from "../Loading";
import Message from "../Message";
import Modal from "../Modal/Modal";
import Button from "./Button";
import ButtonCancelAccept from "./ButtonCancelAccept";
import ButtonTo from "./ButtonTo";

export const ButtonBuy = ({ productId }) => {
  const { close, modalOpen, open } = useModal();
  const { token, logout } = useAuth();
  const { sliceMid } = modalEffects();
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const text =
    "Se le enviará un correo con la solicitud de compra al vendedor.";

  const handleClick = async () => {
    let path = `/products/${productId}/buy`;
    try {
      setLoading(true);
      setError("");
      const data = await getBuyProductsService(path, token);
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
            <ButtonTo text="Home" classe="modal__button" />
          </>
        )}
      </Modal>
    );

  return (
    <li>
      <button onClick={open} className="pruductInfo__info__button">
        Comprar
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
                handleClick={close}
                classe={"button__cancel"}
                text={"close"}
              />
            </>
          )}
        </Modal>
      )}
    </li>
  );
};
