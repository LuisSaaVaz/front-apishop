import { useParams } from "react-router-dom";
import { useUser } from "../../shared/hooks/useUser";
import { Avatar } from "./Avatar";
import ButtonTo from "../Buttons/ButtonTo";
import Loading from "../Loading";
import Message from "../Message";
import Modal from "../Modal/Modal";
import useAuth from "../../shared/hooks/useAuth";
import { Info } from "./Info";
import useModal from "../../shared/hooks/useModal";
import { ProductsProfileList } from "./ProductsProfileList";

export const ProfileInfo = () => {
  const { modalOpen, close, open } = useModal();
  //const [loading, setLoading] = useState(false)

  const { id } = useParams();

  const {
    profileUser,
    name,
    setName,
    bio,
    setBio,
    avatar,
    setAvatar,
    loading,
    setLoading,
    error,
  } = useUser(id);

  const { user } = useAuth();

  if (!profileUser && loading) return <Loading classe={"updateUser"} />;

  if (error && modalOpen)
    return (
      <Modal>
        <Message text={error} />
        <ButtonTo to={"/profile"} text="Volver" classe="modal__button" />
      </Modal>
    );

  return (
    <div className="profileInfo__page__container">
      <section className="profileInfo__container">
        <section className="profileInfo__section__info">
          <article className="profileInfo__article__avatar">
            <Avatar profileUser={profileUser} setAvatar={setAvatar} />
          </article>
          <article className="profileInfo__article__info">
            <Info profileUser={profileUser} setName={setName} setBio={setBio} />
          </article>
        </section>
        {(!user || user.id !== profileUser.id) && <ProductsProfileList />}
      </section>
    </div>
  );
};
