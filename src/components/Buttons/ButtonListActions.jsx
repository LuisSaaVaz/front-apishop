import { ButtonBuy } from "./ButtonBuy";
import { ButtonDelete } from "./ButtonDelete";
import { ButtonEdit } from "./ButtonEdit";

export const ButtonListActions = ({ user, product, setName }) => {
  return (
    <>
      <ul className="pruductInfo__list__button">
        {user && user.id !== product.user_id && product.status !== "bought" && (
          <ButtonBuy productId={product.id} />
        )}
        {user && (user.id === product.user_id || user.status === "admin") && (
          <>
            <ButtonEdit product={product} setName={setName} />
            <ButtonDelete productId={product.id} />
          </>
        )}
      </ul>
    </>
  );
};
