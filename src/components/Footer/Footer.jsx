import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Footer.module.css";
import Redes from "../Redes/Redes";
import { useModeLightContext } from "../../hooks/useModeLightContext";

const Footer = () => {
  const { modeLight } = useModeLightContext();

  const location = useLocation();
  return (
    location.pathname !== "/" &&
    location.pathname !== "/pdf" && (
      <div className={styles.container}>
        <Redes />
        <NavLink
          target={"_blank"}
          className={`${styles.Navlink} ${
            modeLight ? styles.linkLight : styles.linkDark
          }`}
          to={"https://github.com/Carlitossaul/portfolio-v2"}
        >
          Built & Designed by Carlos Lovey
        </NavLink>
      </div>
    )
  );
};

export default Footer;
