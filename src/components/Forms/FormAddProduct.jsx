import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import getCategoriasLocations from "../../shared/helpers/getCategoriasLocations";
import "../../styles/formAdd.css";
import Upload from "../Icons/Upload";
import Loading from "../Loading";
import { motion } from "framer-motion";
import FormUploadImage from "./FormUploadImage";

const { locations, categories } = getCategoriasLocations();

const schema = yup.object().shape({
  name: yup.string().required().max(60),
  category: yup.string().required(),
  price: yup.number().required().max(3500),
  location: yup.string().required(),
  caption: yup.string().required().max(255),
  image: yup
    .mixed()
    .test("fileSize", "Debes subir una foto", (value) => {
      return value && value.length;
    })
    .test("file", "Foto demasiado grande", (value) => {
      return value && value.length > 0 && value[0].size <= 5000000;
    })
    .test("fileFormat", "El formato debe ser 'JPEG' o 'PNG'", (value) => {
      return (
        value &&
        value.length > 0 &&
        ["image/jpeg", "image/png"].includes(value[0].type)
      );
    }),
});

const FormAddProduct = ({ onSubmit, loading }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const nameProduct = watch("name");
  const nameProductLength = nameProduct ? nameProduct.length : 0;
  const captionProduct = watch("caption");
  const captionProductLength = captionProduct ? captionProduct.length : 0;
  const imageUpload = watch("image");
  const image = imageUpload?.length;

  return (
    <form className="formAdd__container" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="formAdd__title">INFORMACIÓN DE TU PRODUCTO</h3>
      <fieldset className="formAdd__group">
        <div className="formAdd__container__label">
          <label className="formAdd__group__label" htmlFor="name">
            ¿Qué estás vendiendo?
          </label>
          <span>{nameProductLength}/60</span>
        </div>
        <input
          className=" formAdd__group__input"
          type="text"
          {...register("name")}
          id="name"
          placeholder="En pocas palabras..."
        />
        {errors.name?.type === "required" && (
          <p className="formAdd__error">Este campo es obligatorio</p>
        )}
        {errors.name?.type === "max" && (
          <p className="formAdd__error">Has superado el límite de caracteres</p>
        )}
      </fieldset>

      <div className="formAdd__container__fieldset">
        <fieldset className="formAdd__group">
          <label className="formAdd__group__label" htmlFor="select">
            Categoría
          </label>
          <select
            className=" formAdd__group__select"
            {...register("category")}
            id="select"
            placeholder="Categoría"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset className="formAdd__group">
          <label className="formAdd__group__label" htmlFor="number">
            Precio
          </label>
          <input
            className="formAdd__group__input"
            type="number"
            {...register("price", {
              required: true,
              validate: (value) => value > 0 && value <= 3500,
            })}
            id="number"
            placeholder="Sé razonable... max 3500 €"
          />
          {errors.price?.type === "typeError" && (
            <p className="formAdd__error">Este campo es obligatorio</p>
          )}
          {errors.price?.type === "max" && (
            <p className="formAdd__error">
              El precio no puede ser superior a 3500 €
            </p>
          )}
        </fieldset>
      </div>

      <fieldset className="formAdd__group">
        <label className="formAdd__group__label" htmlFor="select2">
          Localidad
        </label>
        <select
          className="formAdd__group__select"
          {...register("location")}
          placeholder="Donde lo quieres vender..."
          id="select2"
        >
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </fieldset>

      <fieldset className="formAdd__group">
        <div className="formAdd__container__label">
          <label className="formAdd__group__label" htmlFor="textArea">
            Descripción
          </label>
          <span>{captionProductLength}/255</span>
        </div>
        <textarea
          className="formAdd__group__textarea"
          {...register("caption")}
          id="textArea"
          placeholder="Añade una descripción del producto como estado, modelo, color..."
        ></textarea>
        {errors.caption?.type === "max" && (
          <p className="formAdd__error">Has superado el límite de caracteres</p>
        )}
      </fieldset>

      <fieldset className="formAdd__group">
        <FormUploadImage image={image} register={register} value={"image"} />
        {errors.image && (
          <p className="formAdd__error">{errors.image.message}</p>
        )}
      </fieldset>
      {!loading ? (
        <button className="button__main" type="submit">
          Aceptar
        </button>
      ) : (
        <Loading classe={"formAdd__loading"} />
      )}
    </form>
  );
};

export default FormAddProduct;
