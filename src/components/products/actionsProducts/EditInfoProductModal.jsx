import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Loading from "../../Loading";
import "../../../styles/formEditProduct.css";
import useAuth from "../../../shared/hooks/useAuth";
import useModal from "../../../shared/hooks/useModal";
import { updateProductInfoService } from "../../../shared/services";
import getCategoriasLocations from "../../../shared/helpers/getCategoriasLocations";

const { locations, categories } = getCategoriasLocations();

const schema = yup.object().shape({
  name: yup.string().max(60).required(),
  category: yup.string().max(60).required(),
  location: yup.string().max(60).required(),
  price: yup.number().positive().integer().min(1).max(3500).required(),
  caption: yup.string().max(255).required(),
});

export const EditInfoProductModal = ({
  product,
  setResponse,
  loading,
  setLoading,
  error,
  setError,
}) => {
  //const [loading, setLoading] = useState(false);
  const { token, logout } = useAuth();
  const { close, modalOpen, open } = useModal();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: product.name,
      category: product.category,
      location: product.location,
      price: product.price,
      caption: product.caption,
    },

    resolver: yupResolver(schema),
  });

  //const [name, setName] = useState(product.name);
  const nameProduct = watch("name");
  const nameProductLength = nameProduct ? nameProduct.length : 0;
  //const [category, setCategory] = useState(product.category);
  const categoryProduct = watch("category");
  const categoryProductLength = categoryProduct ? categoryProduct.length : 0;
  //const [location, setLocation] = useState(product.location);
  const locationProduct = watch("location");
  const locationProductLength = locationProduct ? locationProduct.length : 0;
  //const [price, setPrice] = useState(product.price);
  //const [caption, setCaption] = useState(product.caption);
  const captionProduct = watch("caption");
  const captionProductLength = captionProduct ? captionProduct.length : 0;

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setError("");
      const update = await updateProductInfoService(data, token, product.id);
      setResponse(update.message);
      //setName(update.name);
      //setCategory(update.category);
      //setLocation(update.location);
      //setPrice(update.price);
      //setCaption(update.caption);
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
      <form
        className="formEditProduct__container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="formEditProduct__title">Editar producto</h3>
        <ul className="formEditProduct__list">
          {/* INPUT 1 */}
          <li className="formEditProduct__list__element name">
            <fieldset className="formEditProduct__group">
              <div className="formEditProduct__container__label">
                <label className="formEditProduct__group__label" htmlFor="name">
                  Nombre
                </label>
                <span>{nameProductLength}/60</span>
              </div>
              <input
                className=" formEditProduct__group__input"
                type="text"
                {...register("name")}
                id="name"
                placeholder="Nombre"
              />
              {errors.name?.type === "required" && (
                <p className="formEditProduct__error">Campo obligatorio</p>
              )}
              {errors.name?.type === "max" && (
                <p className="formEditProduct__error">Máximo 60 caracteres</p>
              )}
            </fieldset>
          </li>
          {/* INPUT 2 */}
          <li className="formEditProduct__list__element category">
            <fieldset className="formEditProduct__group">
              <div className="formEditProduct__container__label">
                <label
                  className="formEditProduct__group__label"
                  htmlFor="category"
                >
                  Categoria
                </label>
                <span>{categoryProductLength}/60</span>
              </div>
              <select
                className=" formEditProduct__group__select "
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
              {errors.category?.type === "required" && (
                <p className="formEditProduct__error">Campo obligatorio</p>
              )}
              {errors.category?.type === "max" && (
                <p className="formEditProduct__error">Máximo 60 caracteres</p>
              )}
            </fieldset>
          </li>

          {/* INPUT 3 */}
          <li className="formEditProduct__list__element location">
            <fieldset className="formEditProduct__group">
              <div className="formEditProduct__container__label">
                <label
                  className="formEditProduct__group__label"
                  htmlFor="location"
                >
                  Localidad
                </label>
                <span>{locationProductLength}/60</span>
              </div>
              <select
                className="formEditProduct__group__select"
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
              {errors.location?.type === "required" && (
                <p className="formEditProduct__error">Campo obligatorio</p>
              )}
              {errors.location?.type === "max" && (
                <p className="formEditProduct__error">Máximo 60 caracteres</p>
              )}
            </fieldset>
          </li>

          {/* INPUT 4 */}
          <li className="formEditProduct__list__element price">
            <fieldset className="formEditProduct__group">
              <div className="formEditProduct__container__label">
                <label
                  className="formEditProduct__group__label"
                  htmlFor="price"
                >
                  Precio
                </label>
                {/* <span>{nameUserLength}/60</span> */}
              </div>
              <input
                className=" formEditProduct__group__input"
                type="number"
                {...register("price")}
                id="price"
                placeholder="Precio"
              />
              {errors.price?.type === "required" && (
                <p className="formEditProduct__error">Campo obligatorio</p>
              )}
              {errors.price?.type === "min" && (
                <p className="formEditProduct__error">Minimo 1€</p>
              )}
              {errors.price?.type === "max" && (
                <p className="formEditProduct__error">Máximo 3500€</p>
              )}
            </fieldset>
          </li>

          {/* INPUT 5 */}
          <li className="formEditProduct__list__element caption">
            <fieldset className="formEditProduct__group">
              <div className="formEditProduct__container__label">
                <label
                  className="formEditProduct__group__label"
                  htmlFor="caption"
                >
                  Decripción
                </label>
                <span>{captionProductLength}/255</span>
              </div>
              <textarea
                className="formEditProduct__group__textarea"
                {...register("caption")}
                id="caption"
                placeholder="Decripción de Producto"
              ></textarea>
              {errors.caption?.type === "required" && (
                <p className="formEditProduct__error">Campo obligatorio</p>
              )}
              {errors.caption?.type === "max" && (
                <p className="formEditProduct__error">Máximo 255 caracteres</p>
              )}
            </fieldset>
          </li>
        </ul>
        {/* Boton Actualizar */}
        {!loading ? (
          <button onClick={close} className="button form__button" type="submit">
            Actualizar
          </button>
        ) : (
          <Loading />
        )}
      </form>
    </>
  );
};
