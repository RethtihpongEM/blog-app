import { useEffect, useState } from 'react'
import useRefreshToken from '../hooks/useRefreshToken'
import useAuth from '../hooks/useAuth'
import {LoadingSpinner} from "./LoadingSpinner"
import {Outlet} from 'react-router-dom'

const PersistLogin = () => {
  const {auth} = useAuth()
  const [isLoading, setIsLoading] = useState(true)
  const refresh = useRefreshToken()


  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        // console.log(error)
      }finally{
        setIsLoading(false)
      }
    }
    !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false)
  },[])

  return (
    <>
      {isLoading 
        ? <LoadingSpinner/>
        : <Outlet/>
      }
    </>
  )

}

export default PersistLogin

