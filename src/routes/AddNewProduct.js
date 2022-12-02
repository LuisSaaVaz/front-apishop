import React, { useState } from 'react'

import Button from '../components/Buttons/Button'
import ButtonTo from '../components/Buttons/ButtonTo'
import FormAddProduct from '../components/Forms/FormAddProduct'

import Message from '../components/Message'
import Modal from '../components/Modal/Modal'
import useAuth from '../shared/hooks/useAuth'
import useModal from '../shared/hooks/useModal'
import useWait from '../shared/hooks/useWait'
import { AddNewProductService } from '../shared/services'

const AddNewProduct = () => {
  const { user, token, logout } = useAuth()
  const [error, setError] = useState(null)
  const { ready } = useWait()
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const { modalOpen, close, open } = useModal()
  let path = null

  if (user) path = `/products/filterBy/userId/${user.id}`
  
  if (error === 'jwt expired') {
    logout()
    return (
      <Modal>
        <Message text={'Tu sesión ha expirado'} />
        <ButtonTo to={'/login'} text="Login" classe="modal__button" />
      </Modal>
    )
  }
  

  if (!user && ready)
    return (
      <Modal>
        <Message text={'Debes logearte primero'} />
        <ButtonTo to={'/login'} text="Login" classe="modal__button" />
      </Modal>
    )
  
  const onSubmit = async (data) => {
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('caption', data.caption)
    formData.append('category', data.category)
    formData.append('price', data.price)
    formData.append('location', data.location)
    formData.append('image', data.image[0])

    try {
      setLoading(true)
      setError('')
      const data = await AddNewProductService(formData, token)
      setResponse(data.message)
      open()
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }
  


  return (
    user && (
      <section className="page__container">
        <FormAddProduct onSubmit={onSubmit} loading={loading} />
        {error && modalOpen && (
          <Modal>
            <Message text={error} />
            <Button
              handleClick={close}
              text={'Cerrar'}
              classe={'button__cancel'}
            />
          </Modal>
        )}
        {response && modalOpen && (
          <Modal handleClose={close}>
            <Message text={response} />
            <ButtonTo to={path} text={'Mira !'} classe={'modal__button'} />
          </Modal>
        )}
      </section>
    )
  )
}

export default AddNewProduct
