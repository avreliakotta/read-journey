import css from "./login-form.module.css";
import sprite from "../../assets/img/sprite/symbol-defs.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <h1 className={css.title}>
        Expand your mind, reading a <span className={css.part}>book</span>
      </h1>
      <form className={css.loginForm}>
        <div className={css.inputWrapper}>
         <div className={css.wrapper}>
            <label className={css.inputLabel}>Mail:</label>
            <input
              className={css.mailInput}
              type="email"
              name="email"
              placeholder="Your@email.com"
              autoComplete="new-email"
            />
          </div>
          <div className={css.wrapper}>
            <label className={css.inputLabel}>Password:</label>

            <input
              className={css.passwordInput}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Yourpasswordhere"
              autoComplete="new-password"
            />
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
