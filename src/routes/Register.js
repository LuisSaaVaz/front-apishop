import { useState } from 'react'
import {  registerUserService } from '../shared/services'
import FormTittle from '../components/Forms/FormTittle'
import FormRegister from '../components/Forms/FormRegister'
import Message from '../components/Message'
import Modal from '../components/Modal/Modal'
import useModal from '../shared/hooks/useModal'
import ButtonTo from '../components/Buttons/ButtonTo'

const Register = () => {
  const [error, setError] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setloading] = useState(false)

  const {open } = useModal()

  const onSubmit = async (data) => {
    try {
      setError('')
      setloading(true)
      const message = await registerUserService(data)
      setResponse(message)
      open()
    } catch (e) {
      setError(e.message)
    } finally {
      setloading(false)
    }
  }
  return !response ? (
    <div className="main__section">
      <section className="form">
        <FormTittle />
        <FormRegister onSubmit={onSubmit} loading={loading} />

        {error ? <Message className={'form__error'} text={error} /> : null}
      </section>
    </div>
  ) : (
    <Modal>
      <Message text={response}/>
      <ButtonTo to="/login" text={'login'} classe={'modal__button'} />
    </Modal>
  )
}

export default Register
