import {createBrowserRouter} from "react-router-dom"
import { Signup } from "./pages/authentication/Signup"
import { NotFoundPage } from "./pages/NotFoundPage"
import { Login } from "./pages/authentication/Login"
import { WelcomePage } from "./pages/Homepage"

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
    path: "/",
    element: <WelcomePage/>
  },
  {
    path: "*",
    element: <NotFoundPage/>
  }
])

export default router