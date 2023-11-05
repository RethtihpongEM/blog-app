import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { NavLink } from "react-router-dom";

const onSubmit = async (values) => {
  console.log(values);
};

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .required("This field cannot be left blank."),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .required("This field cannot be left blank."),
  username: Yup.string()
    .min(2, "Too Short!")
    .required("This field cannot be left blank."),
  email: Yup.string()
    .email("This value is not a valid email address.")
    .required("This field cannot be left blank."),
  password: Yup.string().required("Please enter a password."),
  confPassword: Yup.string().required("Please re-enter your password."),
});

export const Signup = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 text-black">
      <div className="flex justify-between align-middle items-center flex-col max-w-[900px] bg-white px-[35px] py-[12px] shadow-2xl rounded-3xl">
        <div className="flex flex-col justify-center items-center">
          <h4 className="block font-sans text-2xl text-[#2d2d2d] leading-snug tracking-normal font-semibold antialiased">
            Welcome to Blog App
          </h4>
          <h4 className="block font-sans text-2xl text-[#2d2d2d] leading-snug tracking-normal font-semibold antialiased">
            Sign Up
          </h4>
          <p className="mt-1 block font-sans text-base leading-relaxed font-semibold text-blue-700 antialiased">
            Enter your details to register.
          </p>
        </div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            confPassword: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => onSubmit(values)}
        >
          {({ errors, touched }) => (
            <Form className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-[300px] lg:w-[500px]">
              <div className="mb-4 flex flex-col gap-3">
                <div className="relative w-full min-w-[200px] flex-col gap-y-2 flex">
                  <label
                    className="text-[#2d2d2d] text-[16px]"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <Field
                    id="firstName"
                    name="firstName"
                    className="bg-white border shadow-sm px-4 py-2 w-full rounded-md"
                  />
                  {errors.firstName && touched.firstName ? (
                    <span className="text-[12px] text-red-600">
                      {errors.firstName}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="relative w-full min-w-[200px] flex-col gap-y-2 flex">
                  <label
                    className="text-[#2d2d2d] text-[16px]"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <Field
                    id="lastName"
                    name="lastName"
                    className="bg-white border shadow-sm px-4 py-2 w-full rounded-md"
                  />
                  {errors.lastName && touched.lastName ? (
                    <span className="text-[12px] text-red-600">
                      {errors.lastName}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="relative w-full min-w-[200px] flex-col gap-y-2 flex">
                  <label
                    className="text-[#2d2d2d] text-[16px]"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <Field
                    id="username"
                    name="username"
                    className="bg-white border shadow-sm px-4 py-2 w-full rounded-md"
                  />
                  {errors.username && touched.username ? (
                    <span className="text-[12px] text-red-600">
                      {errors.username}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
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
                    id="password"
                    name="password"
                    type="password"
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
                <div className="relative w-full min-w-[200px] flex-col gap-y-2 flex">
                  <label
                    className="text-[#2d2d2d] text-[16px]"
                    htmlFor="confPassword"
                  >
                    Confirm Password
                  </label>
                  <Field
                    id="confPassword"
                    name="confPassword"
                    type="password"
                    className="bg-white border shadow-sm px-4 py-2 w-full rounded-md"
                  />
                  {errors.confPassword && touched.confPassword ? (
                    <span className="text-[12px] text-red-600">
                      {errors.confPassword}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <button
                className={`mt-6 block w-full select-none rounded-lg bg-blue-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-700/20 transition-all hover:shadow-lg hover:shadow-blue-700/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
                type="submit"
                data-ripple-light="true"
              >
                Register
              </button>
              <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-black antialiased">
                Already have an account?
                <NavLink
                  className="ml-1 font-medium text-blue-700 transition-colors hover:text-blue-900"
                  to={`/login`}
                >
                  Log in
                </NavLink>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
