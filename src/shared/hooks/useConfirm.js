import { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'
import { getValidateAccountService } from '../services'


const useConfirm = () => {
   const [data, setData] = useState([])
   const [loading, setLoading] = useState(false)
   const [error , setError] = useState(null)
  let location = useLocation()
  

  useEffect(() => {
    const confirmAccount = async () => {
      try {
        setLoading(true)
        setError("")
        const infoValidate = await getValidateAccountService(location.pathname)
      
        setData(infoValidate.message)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }

    confirmAccount()
  }, [location])
  return {loading, data,error}
}



export default useConfirm
