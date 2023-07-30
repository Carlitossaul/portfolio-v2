import { Link, useLocation } from "react-router-dom";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import styles from "./Redes.module.css";
import { useModeLightContext } from "../../hooks/useModeLightContext";

const Redes = () => {
  const location = useLocation();
  const { modeLight } = useModeLightContext();

  return (
    <div
      className={`${
        location.pathname === "/" ? styles.redes : styles.redesFooter
      } ${modeLight ? styles.redesLight : styles.redesDark}`}
    >
      <Link
        to={"https://github.com/Carlitossaul"}
        target="_blank"
        className={styles.Link}
      >
        <GoMarkGithub className={styles.iconos} />
      </Link>
      <Link
        to={"https://www.linkedin.com/in/carloslovey/"}
        className={styles.Link}
        target="_blank"
      >
        <FaLinkedin className={styles.iconos} />
      </Link>
      <Link
        to={"https://www.instagram.com/carlos.lovey/"}
        className={styles.Link}
        target="_blank"
      >
        <FaInstagram className={styles.iconos} />
      </Link>
    </div>
  );
};

export default Redes;
