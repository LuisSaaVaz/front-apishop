import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useAuth from "../../../shared/hooks/useAuth";
import { updateProductImageService } from "../../../shared/services";
import Upload from "../../Icons/Upload";
import Loading from "../../Loading";
import Modal from "../../Modal/Modal";
import Message from "../../Message";
import ButtonTo from "../../Buttons/ButtonTo";
import FormUploadImage from "../../Forms/FormUploadImage";

const schema = yup.object().shape({
  image: yup
    .mixed()
    .test("file", "Debes subir una foto", (value) => {
      return value && value.length;
    })
    .test("fileSize", "Foto demasiado grande", (value) => {
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

export const EditImageProductModal = ({
  product,
  setResponse,
  error,
  setError,
}) => {
  const { token, logout } = useAuth();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const imageProduct = watch("image");
  const image = imageProduct?.length;

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    try {
      setLoading(true);
      setError("");
      const data = await updateProductImageService(
        formData,
        token,
        product.id,
        product.user_id
      );
      setLoading(false);
      setResponse(data.message);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

 
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
    <form
      className="formAdd__group"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* INPUT 1 */}
      <fieldset className="info__form__group">
        <FormUploadImage image={image} register={register} value={"image"} />
        {errors.image && (
          <p className="formAdd__error">{errors.image.message}</p>
        )}
      </fieldset>

      {/* input boton */}
      {!loading ? (
        <button className="button form__button" type="submit">
          Cambiar
        </button>
      ) : (
        <Loading classe={"updateUser"} />
      )}
    </form>
  );
};
