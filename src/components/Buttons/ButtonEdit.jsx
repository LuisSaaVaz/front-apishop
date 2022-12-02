import { useState } from "react";
import useAuth from "../../shared/hooks/useAuth";
import useModal from "../../shared/hooks/useModal";
import Loading from "../Loading";
import Message from "../Message";
import Modal from "../Modal/Modal";
import { EditInfoProductModal } from "../products/actionsProducts/EditInfoProductModal";
import Button from "./Button";
import ButtonTo from "./ButtonTo";

export const ButtonEdit = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const { close, modalOpen, open } = useModal();
  const { logout } = useAuth();

  const handleClick = () => {
    close();
    setResponse(null);

    //window.location.reload(); //TODO: recargar la pagina para que se vean los cambios
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
        Editar
      </button>
      {modalOpen && (
        <Modal handleClose={close} classeBack={"white"}>
          {!response ? (
            <EditInfoProductModal
              product={product}
              loading={loading}
              setLoading={setLoading}
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
    </li>
  );
};
