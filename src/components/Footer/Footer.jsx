import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Footer.module.css";
import { GoMarkGithub } from "react-icons/go";

const Footer = () => {
  const location = useLocation();
  return (
    location.pathname !== "/" &&
    location.pathname !== "/pdf" && (
      <div className={styles.container}>
        <NavLink
          target={"_blank"}
          className={styles.Navlink}
          to={"https://github.com/Carlitossaul/portfolio-v2"}
        >
          <GoMarkGithub className={styles.iconos} /> Built & Designed by Carlos
          Lovey
        </NavLink>
      </div>
    )
  );
};

export default Footer;
