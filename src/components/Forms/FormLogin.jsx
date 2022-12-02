import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState } from 'react'
import EyeToggle from '../EyeToggle'
import Loading from '../Loading'
import FooterForm from './FooterForm'



const schema = yup
  .object({
    email:yup.string().email().required(),
    password:yup.string().required().min(7).max(15) ,
  })
  .required()


const FormLogin = ({ onSubmit, loading }) => {
  const [visible, setVisible] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  return (
    <form className="form__container" onSubmit={handleSubmit(onSubmit)}>
      {/* INPUT 1 */}
      <fieldset className="form__group">
        <input
          className="form__group__input"
          type="text"
          {...register('email')}
          id="email"
          placeholder=" "
        />
        <label className="form__group__label" htmlFor="email">
          Email:
        </label>
        <span className="form__group__line"></span>
      </fieldset>
      {errors.email?.type === 'email' && (
        <p>Debes introducir un correo valido</p>
      )}
      {errors.email?.type === 'required' && <p>Este campo es obligatorio</p>}
      {/* INPUT 2 */}
      <fieldset className="form__group">
        <input
          className="form__group__input"
          type={!visible ? 'text' : 'password'}
          {...register('password')}
          id="password"
          placeholder=" "
        />
        <label className="form__group__label" htmlFor="password">
        Contraseña:
        </label>
        <span className="form__group__line"></span>
        <EyeToggle visible={visible} setVisible={setVisible} />
      </fieldset>
      {errors.password?.type === 'required' && (
        <p>Este campo es obligatorio </p>
      )}
      {errors.password?.type === 'min' && (
        <p>La contraseña debe tener almenos 4 digitos </p>
      )}
      {/* BOTON */}
      {!loading ? (
        <input
          className="button form__button"
          type="submit"
          value={'Iniciar Sesión'}
        />
      ) : (
        <Loading />
      )}
      <FooterForm/>
    </form>
  )
}

export default FormLogin