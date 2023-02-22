import React from "react";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";
import "./Logo.css";
const Logo = () => {
  return (
    <div className="logo">
      <LogoIcon />
      <p className="logo__text">Монострой</p>
    </div>
  );
};

export default Logo;
