import axiosClient from "../api/axiosClient";
import useAuth from "./useAuth";
const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axiosClient.get("/refresh", {
      withCredentials: true,
    });
    setAuth((prev) => {
      return {
        ...prev,
        user: response?.data?.user,
        accessToken: response?.data?.accessToken,
      };
    });
    return response?.data?.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
