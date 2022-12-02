import { useState } from "react";
import useAuth from "../../shared/hooks/useAuth";
import useModal from "../../shared/hooks/useModal";
import { updateUserAvatarService } from "../../shared/services";
import Button from "../Buttons/Button";
import ButtonTo from "../Buttons/ButtonTo";
import FormUpdateUserAvatar from "../Forms/FormUpdateUserAvatar";
import Message from "../Message";
import Modal from "../Modal/Modal";

export const AvatarForm = ({ user, setAvatar }) => {
  const { modalOpen, close, open } = useModal();
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("avatar", data.avatar[0]);

    try {
      setLoading(true);
      setError("");
      const data = await updateUserAvatarService(formData, token);
      setResponse(data.message);
      //si la respuesta es correcta
      setAvatar(data.avatar);
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
      <FormUpdateUserAvatar onSubmit={onSubmit} loading={loading} user={user} />
      {error && modalOpen && (
        <Modal>
          {error === "jwt expired" ? (
            <>
              <Message text={"Tu sesión ha expirado"} />
              <ButtonTo to={"/login"} text="Login" classe="modal__button" />
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
      {response === "ok" && modalOpen && (
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
