import axiosClient from "../api/axiosClient";
import useAuth from "./useAuth";

const useLogout = () => {
  const {setAuth} = useAuth()

  const logout = async () => {
    setAuth({})
    try {
      const response = await axiosClient.get('/signout',{
        withCredentials: true
      })
    } catch (error) {
      console.log(error)
    }
  }
  return logout
}

export default useLogout