import React, { useEffect, useState } from 'react'
import { set } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import parseToken from '../helpers/parseToken'

import { getProductsService } from '../services'

const useConfirmBuy = () => {
  const [product, setProduct] = useState(null)
  const [buyer, setBuyer] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [params, setParams] = useSearchParams()

  const token = params.get('email')
  const tokenData = parseToken(token).data
  const path = `/products/filterBy/id/${tokenData.idProduct}`

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true)
        setError("");
        const data = await getProductsService(path)
        setProduct(data.object[0])
        setBuyer(tokenData.email)
        setLoading(false) 
        
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    getProduct()
  }, [])

  return { product, buyer, loading, error }
}

export default useConfirmBuy
