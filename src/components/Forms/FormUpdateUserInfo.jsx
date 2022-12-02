import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Loading from "../Loading";

const schema = yup.object().shape({
  name: yup.string().required().max(60),
  bio: yup.string().min(0).max(255),
});

const FormUpdateUserInfo = ({ onSubmit, loading, user }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const nameUser = watch("name");
  const nameUserLength = nameUser ? nameUser.length : 0;
  const bioUser = watch("bio");
  const bioUserLength = bioUser ? bioUser.length : 0;

  return (
    <form
      className="profile__form__container"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* INPUT 1 */}
      <fieldset className="formAdd__group">
        <div className="formAdd__container__label">
          <label className="formAdd__group__label" htmlFor="name">
            Nombre
          </label>
          <span>{nameUserLength}/60</span>
        </div>
        <input
          className=" formAdd__group__input"
          type="text"
          {...register("name")}
          id="name"
          defaultValue={user.name}
          placeholder="Nombre"
        />
        {errors.name?.type === "required" && (
          <p className="formAdd__error">Este campo es obligatorio</p>
        )}
        {errors.name?.type === "max" && (
          <p className="formAdd__error">Has superado el límite de caracteres</p>
        )}
      </fieldset>

      {/* INPUT 2 */}
      <fieldset className="formAdd__group">
        <div className="formAdd__container__label">
          <label className="formAdd__group__label" htmlFor="bio">
            Descríbete
          </label>
          <span>{bioUserLength}/255</span>
        </div>
        <textarea
          className="formAdd__group__textarea"
          {...register("bio")}
          id="bio"
          placeholder="Añade una descripción de ti, tus gustos y  tus productos"
          defaultValue={user.bio}
        ></textarea>

        {errors.bio?.type === "max" && (
          <p className="formAdd__error">Has superado el límite de caracteres</p>
        )}
      </fieldset>

      {/* input boton */}
      {!loading ? (
        <button className="button form__button" type="submit">
          Actualizar
        </button>
      ) : (
        <Loading classe={"updateUser"} />
      )}
    </form>
  );
};

export default FormUpdateUserInfo;
