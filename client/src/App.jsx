import { Signup } from "./pages/authentication/Signup";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Login } from "./pages/authentication/Login";
import { Blogs } from "./pages/Blogs";
import { DefaultLayout } from "./layouts/DefaultLayout";
import RequireAuth from "./components/RequireAuth";
import { SingleBlogPage } from "./pages/SingleBlogPage";
import { UpdateBlog } from "./pages/UpdateBlog";
import { Routes, Route } from "react-router-dom";
import PersistLogin from "./components/PersistLogin";

function App() {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />

      <Route element={<PersistLogin />}>
        <Route path="/" element={<DefaultLayout />}>
          {/* public routes */}
          <Route path="/" element={<Blogs />} />
          <Route path="/blogs/:id" element={<SingleBlogPage />} />

          {/* we want to protect these routes */}
          <Route element={<RequireAuth />}>
            <Route path="/blogs/update/:id" element={<UpdateBlog />} />
          </Route>
        </Route>
      </Route>

      {/* catch all */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
