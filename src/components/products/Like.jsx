import { deleteLikeService, postLikeService } from "../../shared/services";
import "../../styles/like.css";
import { useLike } from "../../shared/hooks/useLiked";
import useAuth from "../../shared/hooks/useAuth";
import { ButtonWithLike } from "../Buttons/ButtonWithLike";
import { ButtonWithoutLike } from "../Buttons/ButtonWithoutLike";
import Loading from "../Loading";
import Modal from "../Modal/Modal";
import Message from "../Message";
import ButtonTo from "../Buttons/ButtonTo";

export const Like = ({ productId, userId }) => {
  const { liked, setLiked, loading, error } = useLike(productId, userId);
  //recuperar el token del contexto de autenticación
  const { token, logout } = useAuth();

  const handleClick = () => {
    //Si liked es true llamar a la funcion de deleteLikeService y pasarle el productId y el token y cambiar el estado de liked a false y viceversa
    if (liked) {
      deleteLikeService(productId, token);
      setLiked(false);
    } else {
      postLikeService(productId, token);
      setLiked(true);
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
      {liked ? (
        <ButtonWithLike onClick={handleClick} />
      ) : (
        <ButtonWithoutLike onClick={handleClick} />
      )}
    </li>
  );
};
