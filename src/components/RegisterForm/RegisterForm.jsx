import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import css from "./register-form.module.css";
import sprite from "../../assets/img/sprite/symbol-defs.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { signupSchema } from "../../schemas/auth-schemas";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/auth/auth-thunk";
import { selectLoading,selectError } from "../../redux/auth/auth-selectors";
import toast from 'react-hot-toast';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error =useSelector(selectError);
 

 
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, dirtyFields, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(signupSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
    const result=  await dispatch(registerUser(data)).unwrap();
    // console.log('Registration result:', result);
      toast.success('Registration successful');
     
    } catch (e) {
      console.error('Registration error:', e); 
    
      toast.error(`Registration failed: ${e.message || 'Unknown error occurred'}`);
    }
    reset();
  };
 
 
  const renderIcon = (field) => {
    if (touchedFields[field] && errors[field]) {
      return (
        <svg className={css.errorIcon}>
          <use href={`${sprite}#icon-error`}></use>
        </svg>
      );
    }
    if (touchedFields[field] && dirtyFields[field] && !errors[field]) {
      return (
        <div className={css.iconWrapper}>
          <svg className={css.successIcon}>
            <use href={`${sprite}#icon-success`}></use>
          </svg>
        </div>
      );
    }
    return (
      <svg
        className={css.eyeIcon}
       
        onClick={() => setShowPassword(!showPassword)}
      >
        <use href={`${sprite}#icon-eye${showPassword ? "" : "-off"}`}></use>
      </svg>
    );
  };
  return (
    <>
   
      <h1 className={css.title}>
        Expand your mind, reading <span className={css.part}>a book</span>
      </h1>
     
      <form className={css.registerForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.inputWrapper}>
          <div className={css.wrapper}>
            <label className={css.inputLabel}>Name:</label>
            <input
              className={`${css.inputField} ${css.nameInput} ${
                touchedFields.name && !errors.name ? css.successBorder : ""
              } ${errors.name ? css.errorBorder : ""}`}
              {...register("name")}
              type="text"
              placeholder="Ilona Ratushniak"
              autoComplete="off"
            />
            <p
              className={
                touchedFields.name && !errors.name
                  ? css.successMessage
                  : errors.name
                  ? css.errorMessage
                  : ""
              }
            >
              {" "}
              {touchedFields.name && !errors.name
                ? "Email looks good!"
                : errors.name
                ? errors.name.message
                : ""}
            </p>
            {touchedFields.name && renderIcon("name")}
          </div>
          <div className={css.wrapper}>
            <label className={css.inputLabel}>Mail:</label>
            <input
              className={`${css.inputField} ${css.mailInput} ${
                touchedFields.email && !errors.email ? css.successBorder : ""
              } ${errors.email ? css.errorBorder : ""}`}
              {...register("email")}
              type="email"
              placeholder="Your@email.com"
              autoComplete="off"
            />
            <p
              className={
                touchedFields.email && !errors.email
                  ? css.successMessage
                  : errors.email
                  ? css.errorMessage
                  : ""
              }
            >
              {touchedFields.email && !errors.email
                ? "Email looks good!"
                : errors.email
                ? errors.email.message
                : ""}
            </p>

            {touchedFields.email && renderIcon("email")}
          </div>
          <div className={css.wrapper}>
            <label className={css.inputLabel}>Password:</label>

            <input
              className={`${css.inputField} ${css.passwordInput} ${
                touchedFields.password && !errors.password
                  ? css.successBorder
                  : ""
              } ${errors.password ? css.errorBorder : ""}`}
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="Yourpasswordhere"
              autoComplete="new-password"
            />

            <p
              className={
                touchedFields.password && !errors.password
                  ? css.successMessage
                  : errors.password
                  ? css.errorMessage
                  : ""
              }
            >
              {touchedFields.password && !errors.password
                ? "Password looks good!"
                : errors.password
                ? errors.password.message
                : ""}
            </p>

            {renderIcon("password")}
          </div>
        </div>
        <div className={css.buttonWrapper}>
          <button className={css.btnSubmit} type="submit" disabled={!isValid}>
            Registration
          </button>
          <NavLink className={css.link} to="/login">
            Already have an account?
          </NavLink>
        </div>
      </form>
      
    </>
  );
};
export default RegisterForm;
