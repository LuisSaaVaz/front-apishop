import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import useAuth from "../../shared/hooks/useAuth";
import { confirmBuyProdutService } from "../../shared/services";
import "../../styles/formBuyProduct.css";
import Button from "../../components/Buttons/Button";
import Loading from "../Loading";
import Message from "../Message";
import Modal from "../Modal/Modal";
import useModal from "../../shared/hooks/useModal";
import ButtonTo from "../Buttons/ButtonTo";

const FormBuyProduct = () => {
  const { register, handleSubmit } = useForm();
  const { modalOpen, close, open } = useModal();
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(false);
  const { token, logout } = useAuth();
  const location = useLocation();
  const { pathname } = location;
  const { search } = location;
  const path = pathname + search;

  let dataQuery = {};

  const onSubmit = async (data) => {
    // const dateRaw = new Date(data.deliveryTime).toISOString()
    // const date = (dateRaw.split('T').join(' ').slice(0, 16))
    const date = data.deliveryTime.split("T").join(" ");
    const newData = {
      deliveryTime: date,
      deliveryAddress: data.deliveryAddress,
    };

    dataQuery = {
      body: newData,
      path,
      token,
    };
    try {
      setloading(true);
      setError("");
      const data = await confirmBuyProdutService(dataQuery);
      setResponse(data.message);
      open();
      setloading(false);
    } catch (e) {
      open();
      setError(e.message);
    } finally {
      setloading(false);
    }
  };

  if (loading) return <Loading classe="loader__products" />;
  if (error === "jwt expired")
    return (
      <Modal>
        <Message text={"Tu sesión ha expirado"} />
        <ButtonTo
          to={"/login"}
          text="Login"
          classe="modal__button"
          handleclick={logout}
        />
      </Modal>
    );

  return (
    <form className="formBuy__container" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="formBuy__title">Lugar y fecha de entrega</h3>
      <fieldset className="formBuy__group">
        <input
          className="formBuy__group__input"
          type="text"
          id="text"
          name="text"
          {...register("deliveryAddress", { required: true })}
          placeholder="Eje: Capitan Juan Varela 12 "
        />
        <label htmlFor="text" className="formBuy__group__label">
          Lugar de entrega
        </label>
      </fieldset>
      <fieldset className="formBuy__group">
        <input
          className="formBuy__group__input"
          type="datetime-local"
          id="date"
          name="date"
          {...register("deliveryTime", { required: true })}
        />
        <label htmlFor="date" className="formBuy__group__label">
          Dia y hora
        </label>
      </fieldset>
      <button className="button__main" type="submit">
        Aceptar
      </button>
      {error && modalOpen && (
        <Modal>
          <Message text={error} />
          <Button
            handleClick={close}
            text={"cerrar"}
            classe={"button__cancel"}
          />
        </Modal>
      )}
      {response && (
        <Modal>
          <Message text={response} />
          <ButtonTo to={"/"} text={"Home"} classe={"modal__button"} />
        </Modal>
      )}
    </form>
  );
};

export default FormBuyProduct;
