import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import css from "./register-form.module.css";
import sprite from "../../assets/img/sprite/symbol-defs.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { signupSchema } from "../../schemas/auth-schemas";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <h1 className={css.title}>
        Expand your mind, reading a <span className={css.part}>book</span>
      </h1>
      <form className={css.registerForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.inputWrapper}>
          <div className={css.wrapper}>
            <label className={css.inputLabel}>Name:</label>
            <input
              className={css.nameInput}
              {...register("name")}
              type="text"
              placeholder="Ilona Ratushniak"
              autoComplete="off"
            />
            <p className={css.message}>{errors.name?.message}</p>
          </div>
          <div className={css.wrapper}>
            <label className={css.inputLabel}>Mail:</label>
            <input
              className={css.mailInput}
              {...register("email")}
              type="email"
              placeholder="Your@email.com"
              autoComplete="off"
            />
            <p className={css.message}>{errors.email?.message}</p>
          </div>
          <div className={css.wrapper}>
            <label className={css.inputLabel}>Password:</label>

            <input
              className={css.passwordInput}
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Yourpasswordhere"
              autoComplete="off"
            />
            <p className={css.message}>{errors.password?.message}</p>
            {showPassword ? (
              <svg
                className={css.eyeIcon}
                width="20px"
                height="20px"
                onClick={() => setShowPassword(!showPassword)}
              >
                <use href={`${sprite}#icon-eye`}></use>
              </svg>
            ) : (
              <svg
                className={css.eyeIcon}
                width="20px"
                height="20px"
                onClick={() => setShowPassword(!showPassword)}
              >
                <use href={`${sprite}#icon-eye-off`}></use>
              </svg>
            )}
          </div>
        </div>
        <button className={css.btnSubmit} type="submit">
          Registration
        </button>
        <NavLink className={css.link} to="/login">
          Already have an account?
        </NavLink>
      </form>
    </>
  );
};
export default RegisterForm;
