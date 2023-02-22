import React from "react";
import "./Link.css";
const Link = ({ href, icon, text }) => {
  return (
    <a href={href} className="link">
      {icon}
      {text}
    </a>
  );
};

export default Link;
