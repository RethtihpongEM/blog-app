import * as Yup from "yup"

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("This value is not a valid email address.")
    .required("This field cannot be left blank."),
  password: Yup.string().required("This field cannot be left blank."),
});
