import { Formik, Form, Field } from "formik";
import { NavLink } from "react-router-dom";
import { LoginSchema } from "../../schema/LoginSchema";
import axiosClient from "../../api/axiosClient";
import { useState } from "react";
import {useNavigate,useLocation} from "react-router-dom"
import useAuth from "../../hooks/useAuth";

export const Login = () => {

  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {setAuth} = useAuth()

  const [error,setError] = useState('')

  const handleLogin = async (values) => {
    const email = values.email
    const password = values.password
    await axiosClient
      .post("auth", (JSON.stringify({email,password})),{
        headers: {'Content-Type': 'application/json'},
        withCredentials: true
      })
      .then((response) => {
        const accessToken = response?.data?.accessToken
        const user = response?.data?.user
        setAuth({user, accessToken})
        navigate(from, { replace: true });
      }).catch((error) =>{
        if(error.response.status === 401){
          setError(error.response.data.message)
        }else if (error.response.status === 400){
          setError('Please enter the email or password')
        }else{
          setError('Login Failed')
        }
      })
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-24 lg:px-8 text-black mx-auto">
      <div className="flex justify-center align-middle items-center flex-col max-w-[900px] min-h-[500px] bg-white px-[35px] py-[12px] shadow-2xl rounded-3xl">
        <div className="flex flex-col justify-center items-center">
          <h4 className="block font-sans text-2xl text-[#2d2d2d] leading-snug tracking-normal font-semibold antialiased">
            Welcome to Blog App
          </h4>
          <h4 className="block font-sans text-2xl text-[#2d2d2d] leading-snug tracking-normal font-semibold antialiased">
            Login
          </h4>
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => handleLogin(values)}
        >
          {({ errors, touched }) => (
            <Form className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-[300px] lg:w-[500px]">
              <div className="mb-4 flex flex-col gap-3">
                <div className="relative w-full min-w-[200px] flex-col gap-y-2 flex">
                  <label className="text-[#2d2d2d] text-[16px]" htmlFor="email">
                    Email{" "}
                  </label>
                  <Field
                    id="email"
                    name="email"
                    className="bg-white border shadow-sm px-4 py-2 w-full rounded-md"
                  />
                  {errors.email && touched.email ? (
                    <span className="text-[12px] text-red-600">
                      {errors.email}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="relative w-full min-w-[200px] flex-col gap-y-2 flex">
                  <label
                    className="text-[#2d2d2d] text-[16px]"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Field
                  
                  type="password"
                    id="password"
                    name="password"
                    className="bg-white border shadow-sm px-4 py-2 w-full rounded-md"
                  />
                  {errors.password && touched.password ? (
                    <span className="text-[12px] text-red-600">
                      {errors.password}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {
                error && <span className="text-sm text-red-500">{error}</span>
              }
              <button
                className={`mt-6 block w-full select-none rounded-lg bg-blue-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-700/20 transition-all hover:shadow-lg hover:shadow-blue-700/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
                type="submit"
                data-ripple-light="true"
              >
                Log in
              </button>
              <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-black antialiased">
                Dont have an account yet?
                <NavLink
                  className="ml-1 font-medium text-blue-700 transition-colors hover:text-blue-900"
                  to={`/register`}
                >
                  Create an account
                </NavLink>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
