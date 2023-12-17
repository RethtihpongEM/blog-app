import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
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
  confPassword: Yup.string()
    .required("Please re-enter your password.")
    .oneOf([Yup.ref("password")], "Password must match"),
});
