import { createBrowserRouter } from "react-router-dom";
import { Signup } from "./pages/authentication/Signup";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Login } from "./pages/authentication/Login";
import { Homepage } from "./pages/Homepage";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { SingleBlogPage } from "./pages/SingleBlogPage";
import { UpdateBlog } from "./pages/UpdateBlog";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Homepage/>,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlogPage/>
      },
      {
        path: "/blogs/update/:id",
        element: <UpdateBlog/>
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
