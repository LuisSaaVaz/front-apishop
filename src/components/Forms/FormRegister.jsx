import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import Loading from '../Loading'
import { useState } from 'react'
import EyeToggle from '../EyeToggle'



const schema = yup
  .object({
    email: yup.string().email().required(),
    name: yup.string().required(),
    password: yup.string().required().min(6).max(15),
  })
  .required()

  
const FormRegister = ({ onSubmit, loading }) => {
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
          {...register('name')}
          id="name"
          placeholder=" "
        />
        <label className="form__group__label" htmlFor="name">
          Nombre:
        </label>
        <span className="form__group__line"></span>
      </fieldset>
        {errors.name?.type === 'name' && (
          <p>Debes introducir un nombre valido</p>
        )}
        {errors.name?.type === 'required' && <p>Este campo es obligatorio</p>}

      {/* INPUT 2 */}

      <fieldset className="form__group">
        <input
          className="form__group__input"
          type="text"
          {...register('email')}
          name="email"
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

      {/* INPUT 3 */}

      <fieldset className="form__group">
        <input
          className="form__group__input"
          type={!visible ? 'text' : 'password'}
          {...register('password')}
          name="password"
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
      {/* input boton */}
      {!loading ? <input className="button form__button" type="submit" value={'Crear Cuenta'} />: <Loading/>}
    </form>
  )
}

export default FormRegister
