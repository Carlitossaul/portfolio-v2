import { Link, useLocation } from "react-router-dom";
import styles from "./Nav.module.css";
import img from "../../assets/logo.png";
import { FaEnvelope } from "react-icons/fa";
import { BiBriefcase } from "react-icons/bi";
import { TiUser } from "react-icons/ti";
import { FiMail } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

const Nav = () => {
  const location = useLocation();

  return (
    location.pathname !== "/" && (
      <nav className={styles.container}>
        <div className={styles.divLogo}>
          <Link to="/">
            <img className={styles.logo} src={img} alt={"logo"} />
          </Link>
        </div>
        <div className={styles.links}>
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
        </div>
      </nav>
    )
  );
};

export default Nav;
