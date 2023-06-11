import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import style from "./Footer.module.css";

const Footer = () => {
  const location = useLocation();
  return (
    location.pathname !== "/" && (
      <div className={style.container}>
        <NavLink
          target={"_blank"}
          className={style.Navlink}
          to={"https://github.com/Carlitossaul/portfolio.git"}
        >
          <p className={style.p}>Built by Carlos Lovey</p>
        </NavLink>
      </div>
    )
  );
};

export default Footer;
