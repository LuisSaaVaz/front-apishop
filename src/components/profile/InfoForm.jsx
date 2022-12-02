import { useState } from "react";
import useAuth from "../../shared/hooks/useAuth";
import useModal from "../../shared/hooks/useModal";
import { updateUserInfoService } from "../../shared/services";
import Button from "../Buttons/Button";
import ButtonTo from "../Buttons/ButtonTo";
import FormUpdateUserInfo from "../Forms/FormUpdateUserInfo";
import Message from "../Message";
import Modal from "../Modal/Modal";

export const InfoForm = ({ user, setName, setBio }) => {
  const { modalOpen, close, open } = useModal();
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token, logout } = useAuth();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setError("");
      const update = await updateUserInfoService(data, token);
      setResponse(update.message);
      setName(update.name);
      setBio(update.bio);
      open();
    } catch (error) {
      setError(error.message);
      open();
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <FormUpdateUserInfo onSubmit={onSubmit} loading={loading} user={user} />
      {error && modalOpen && (
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
                handleClick={close}
                text={"Cerrar"}
                classe={"button__cancel"}
              />
            </>
          )}
        </Modal>
      )}
      {response && modalOpen && (
        <Modal handleClose={close}>
          <Message text={response} />
          <Button
            handleClick={close}
            text={"Listo !"}
            classe={"modal__button"}
          />
        </Modal>
      )}
    </>
  );
};
