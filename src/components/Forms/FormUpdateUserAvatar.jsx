import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Loading from "../Loading";
import Upload from "../Icons/Upload";
import FormUploadImage from "./FormUploadImage";

const schema = yup.object().shape({
  avatar: yup
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

const FormUpdateUserAvatar = ({ onSubmit, loading, user }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const avatarUpload = watch("avatar");
  const avatar = avatarUpload?.length;

  return (
    <form
      className="profile__form__container"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* INPUT 1 */}
      <fieldset className="info__form__group">
        <FormUploadImage image={avatar} register={register} value={"avatar"} />
        {errors.avatar && (
          <p className="formAdd__error">{errors.avatar.message}</p>
        )}
      </fieldset>

      {/* input boton */}
      {/* <input className="button form__button" type="submit" value={'Avatar'} /> */}
      {!loading ? (
        <button className="button form__button" type="submit">
          {user.avatar ? "Cambiar" : "Subir"}
        </button>
      ) : (
        <Loading classe={"updateUser"} />
      )}
    </form>
  );
};

export default FormUpdateUserAvatar;
