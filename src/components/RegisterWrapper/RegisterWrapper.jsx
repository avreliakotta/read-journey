import css from "./register-wrapper.module.css";
import React from "react";
import Logo from "../Logo/Logo";


const RegisterWrapper = ({ children}) => {
  return (
    <div  className={css.wrapper}>
       <Logo paddingClass="paddingSmall"/> 
      {children}
    </div>
  );
};

export default RegisterWrapper;

