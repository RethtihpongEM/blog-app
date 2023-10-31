import {createBrowserRouter} from "react-router-dom"
import { Signup } from "./pages/authentication/Signup"
import { NotFoundPage } from "./pages/NotFoundPage"
import { Login } from "./pages/authentication/Login"

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Signup/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "*",
    element: <NotFoundPage/>
  }
])

export default router