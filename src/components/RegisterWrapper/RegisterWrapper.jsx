import css from "./register-wrapper.module.css";
import React from "react";
import Logo from "../Logo/Logo";


const RegisterWrapper = ({ children,padding,showLogo }) => {
  return (
    <div  className={`${css.wrapper} ${css[padding]}`}>
      {showLogo && <Logo />} 
      {children}
    </div>
  );
};

export default RegisterWrapper;

