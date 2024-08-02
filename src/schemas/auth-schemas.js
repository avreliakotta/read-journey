import * as yup from "yup";

export const signupSchema = yup.object({
  name: yup.string().min(2, 'Name must be at least 2 characters')
  .required("Required"),
  email: yup
    .string()
    .email("Error email")
    .matches(/^\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/)
    .required("Required"),
  password: yup
    .string()
    .min(7, "Enter a valid password")
    .required("Required"),
});
export const signinSchema = yup.object({
  email: yup
    .string()
    .email("Error email")
    .matches(/^\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/)
    .required("Required"),
  password: yup
    .string()
    .min(7, "Enter a valid password")
    .required("Required"),
});
