import { Link, useLocation } from "react-router-dom";
import styles from "./Nav.module.css";
import img from "../../assets/logo.png";
import { BiBriefcase } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import ButtonModeLight from "../ButtonModeLight/ButtonModeLight";

import { useModeLightContext } from "../../hooks/useModeLightContext";

const Nav = () => {
  const { modeLight } = useModeLightContext();
  const location = useLocation();

  return (
    location.pathname !== "/" && (
      <nav
        className={`${
          modeLight ? styles.containerLight : styles.containerDark
        } ${styles.container}`}
      >
        <div className={styles.divLogo}>
          <Link to="/">
            <img className={styles.logo} src={img} alt={"logo"} />
          </Link>
        </div>
        <div
          className={`${styles.links} ${
            modeLight ? styles.linksLight : styles.linksDark
          }`}
        >
          <Link
            className={`${styles.link} ${
              window.location.pathname === "/portfolio" && styles["link-active"]
            }`}
            to="/portfolio"
          >
            <BiBriefcase className={styles.iconos} /> Portfolio
          </Link>
          <Link
            className={`${styles.link} ${
              window.location.pathname === "/about" && styles["link-active"]
            }`}
            to="/about"
          >
            <FaRegUser className={styles.iconos} /> About
          </Link>
          <Link
            className={`${styles.link} ${
              window.location.pathname === "/contact" && styles["link-active"]
            }`}
            to="/contact"
          >
            <FiMail className={styles.iconos} /> Contact
          </Link>
          <Link to={"./pdf"} className={styles.link}>
            <div className={styles.divButton}>
              <button className={styles.button}>CV-RESUME</button>
            </div>
          </Link>
          <ButtonModeLight />
        </div>
      </nav>
    )
  );
};

export default Nav;
