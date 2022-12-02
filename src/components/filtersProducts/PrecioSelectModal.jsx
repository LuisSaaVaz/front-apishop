import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import "../../styles/formPrice.css";

const PrecioSelectModal = ({ close, modalOpen }) => {
  const { register, handleSubmit } = useForm();
  const [params, setParams] = useSearchParams();

  const onSubmit = (data) => {
    const minPrice = data.minPrice;
    const maxPrice = data.maxPrice;
    if (params.toString() === "") {
      if (minPrice !== "" && maxPrice !== "") {
        setParams({
          minPrice: minPrice,
          maxPrice: maxPrice,
        });
      } else if (minPrice !== "") {
        setParams({ minPrice: minPrice });
      } else if (maxPrice !== "") {
        setParams({ maxPrice: maxPrice });
      }
    } else {
      if (minPrice === "" && maxPrice === "") {
        params.delete("minPrice");
        params.delete("maxPrice");
      } else if (minPrice !== "" && maxPrice !== "") {
        params.set("minPrice", minPrice);
        params.set("maxPrice", maxPrice);
      } else if (minPrice !== "") {
        params.set("minPrice", minPrice);
        params.delete("maxPrice");
      } else if (maxPrice !== "") {
        params.set("maxPrice", maxPrice);
        params.delete("minPrice");
      }

      params.set("page", 1);
      setParams(params);
    }
    close();
  };

  return (
    <form className="precioSelect__form" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="precioSelect__title">¿Cuanto quieres pagar?</h3>
      <section className="precioSelect__container">
        <fieldset className="precioSelect__element">
          <label className="precioSelect__label" htmlFor="minPrice">
            Desde
          </label>
          <input
            className="precioSelect__input"
            type="number"
            {...register("minPrice", {
              validate: (value) => value >= 0 && value <= 3500,
            })}
            placeholder="1"
            defaultValue={params.get("minPrice") || ""}
            id="minPrice"
          />
        </fieldset>
        <fieldset className="precioSelect__element">
          <label className="precioSelect__label" htmlFor="maxPrice">
            Hasta
          </label>
          <input
            className="precioSelect__input"
            type="number"
            {...register("maxPrice", {
              validate: (value) => value >= 0 && value <= 3500,
            })}
            placeholder="3500"
            defaultValue={params.get("maxPrice") || ""}
            id="maxPrice"
          />
        </fieldset>
      </section>
      <div className="precioSelect__button__container">
        <input
          onClick={modalOpen && close}
          className="precioSelect__button--1"
          defaultValue={"Cancelar"}
        />
        <input
          className="precioSelect__button--2"
          type="submit"
          defaultValue={"Enviar"}

          // onClick={!loading && modalOpen && close}
        />
      </div>
    </form>
  );
};

export default PrecioSelectModal;
