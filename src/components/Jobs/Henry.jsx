//styles
import styles from "./styles.module.css";
import logo from "./assets/logo-labsIF.png";
import { BsBoxArrowUpRight } from "react-icons/bs";

//react
import { Link } from "react-router-dom";

const Henry = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerData}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="logo" style={{ height: "35px" }} />
        </div>
        <h3 className={styles.title}>
          Frontend Developer <span>-</span>
          <Link className={styles.link}>
            Labs_If <BsBoxArrowUpRight className={styles.icon} />
          </Link>
        </h3>
        <h3 className={styles.data}>
          July 2003 <span>-</span> Present
        </h3>
      </div>
      <div className={styles.containerInfo}>
        <ul>
          <li>
            Development of user interfaces with React.js. Working on the
            implementation of efficient and attractive frontend solutions,
            collaborating with the design team to create impactful visual
            experiences.
          </li>
          <li>
            {" "}
            Application testing with Jest. I carry out application tests to
            ensure code quality and component functionality.
          </li>
          <li>
            Code review, collaborating with my colleagues to maintain code
            quality.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Henry;
