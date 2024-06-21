import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import css from "./login-form.module.css";
import sprite from "../../assets/img/sprite/symbol-defs.svg";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { signinSchema } from "../../schemas/auth-schemas";
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [blurredFields, setBlurredFields] = useState({
    email: false,
    password: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    watch,
    trigger,
  } = useForm({
    resolver: yupResolver(signinSchema),
    mode: "onChange",
  });
  
  const onSubmit = (data) => {
    console.log(data);
  };
  const emailValue = watch("email");
  const passwordValue = watch("password");

  const handleBlur = async (field) => {
    setBlurredFields((prev) => ({ ...prev, [field]: true }));
    await trigger(field);
  };
  const renderIcon = (field) => {
    if (!blurredFields[field] || !dirtyFields[field]) {
      return null;
    }
    if (errors[field]) {
      return (
        <svg className={css.errorIcon} width="18px" height="18px">
          <use href={`${sprite}#icon-error`}></use>
        </svg>
      );
    }
    return (
      <div className={css.iconWrapper}>
        <svg className={css.successIcon} width="9px" height="7.6px">
          <use href={`${sprite}#icon-success`}></use>
        </svg>
      </div>
    );
  };

  return (
    <>
      <h1 className={css.title}>
        Expand your mind, reading a <span className={css.part}>book</span>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.inputWrapper}>
          <div className={css.wrapper}>
            <label className={css.inputLabel}>Mail:</label>

            <input
              className={`${css.mailInput} ${
                blurredFields.email &&
                (errors.email ? css.errorBorder : css.successBorder)
              }`}
              type="email"
              {...register("email")}
              placeholder="Your@email.com"
              autoComplete="new-email"
              onBlur={() => handleBlur("email")}
            />

            {blurredFields.email && dirtyFields.email && (
              <p
                className={errors.email ? css.errorMessage : css.successMessage}
              >
                {errors.email ? errors.email.message : "Email looks good!"}
              </p>
            )}

            {renderIcon("email")}
          </div>

          <div className={css.wrapper}>
            <label className={css.inputLabel}>Password:</label>

            <input
              className={`${css.passwordInput} ${
                blurredFields.password &&
                (errors.password ? css.errorBorder : css.successBorder)
              }`}
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="Yourpasswordhere"
              autoComplete="new-password"
              onBlur={() => handleBlur("password")}
            />

            {blurredFields.password && passwordValue && (
              <p
                className={
                  errors.password ? css.errorMessage : css.successMessage
                }
              >
                {errors.password
                  ? errors.password.message
                  : "Password is secure"}
              </p>
            )}

            {blurredFields.password && passwordValue && errors.password ? (
              <svg className={css.errorIcon} width="18px" height="18px">
                <use href={`${sprite}#icon-error`}></use>
              </svg>
            ) : blurredFields.password ? (
              <div className={css.iconWrapper}>
                <svg className={css.successIcon} width="9px" height="7.6px">
                  <use href={`${sprite}#icon-success`}></use>
                </svg>
              </div>
            ) : (
              <svg
                className={css.eyeIcon}
                width="20px"
                height="20px"
                onClick={() => setShowPassword(!showPassword)}
              >
                <use
                  href={`${sprite}#icon-eye${showPassword ? "" : "-off"}`}
                ></use>
              </svg>
            )}
          </div>
        </div>
        <button className={css.btnSubmit} type="submit">
          Log In
        </button>
        <NavLink className={css.link} to="/register">
          Don’t have an account?
        </NavLink>
      </form>
    </>
  );
};
export default LoginForm;
