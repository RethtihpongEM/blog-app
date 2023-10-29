import * as Yup from "yup";
import { Formik, Form, Field } from "formik";


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
    <div className="flex min-h-full flex-col justify-center items-center sm:w-full sm:max-w-sm sm:mx-auto mt-[10px] text-white">
      <div>
        <div className="">
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-white antialiased">
            Sign Up
          </h4>
          <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-white antialiased">
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
                  <label htmlFor="firstName">First Name</label>
                  <Field
                  id="firstName"
                    name="firstName"
                    className="bg-transparent border border-white px-4 py-2 w-full rounded-md"
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
                  <label htmlFor="lastName">Last Name</label>
                  <Field
                  id="lastName"
                    name="lastName"
                    className="bg-transparent border border-white px-4 py-2 w-full rounded-md"
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
                  <label htmlFor="username">Username</label>
                  <Field
                    id="username"
                    name="username"
                    className="bg-transparent border border-white px-4 py-2 w-full rounded-md"
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
                  <label htmlFor="email">Email </label>
                  <Field
                    id="email"
                    name="email"
                    className="bg-transparent border border-white px-4 py-2 w-full rounded-md"
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
                  <label htmlFor="password">Password</label>
                  <Field
                    id="password"
                    name="password"
                    className="bg-transparent border border-white px-4 py-2 w-full rounded-md"
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
                  <label htmlFor="confPassword">Confirm Password</label>
                  <Field
                    id="confPassword"
                    name="confPassword"
                    className="bg-transparent border border-white px-4 py-2 w-full rounded-md"
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
                className="mt-6 block w-full select-none rounded-lg bg-blue-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-700/20 transition-all hover:shadow-lg hover:shadow-blue-700/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
                data-ripple-light="true"
              >
                Register
              </button>
              <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-white antialiased">
                Already have an account?
                <a
                  className="font-medium text-blue-700 transition-colors hover:text-blue-700"
                  href="#"
                >
                  Sign In
                </a>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
};
