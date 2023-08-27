//styles
import styles from "./styles.module.css";
import logo from "./assets/logoHenry.png";
import { BsBoxArrowUpRight } from "react-icons/bs";

//react
import { Link } from "react-router-dom";

const Henry = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerData}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="logo" className={styles.logoHenry} />
        </div>
        <h3 className={styles.title}>
          Full Stack Teaching Assistant -
          <Link
            to={"https://www.soyhenry.com/"}
            className={styles.link}
            target="_blank"
          >
            Henry <BsBoxArrowUpRight className={styles.icon} />
          </Link>
        </h3>
        <h5 className={styles.data}>
          MAY 2003 <span>-</span> PRESENT
        </h5>
      </div>
      <div className={styles.containerInfo}>
        <ul className={styles.function}>
          <li>
            Coordinate the group of students with the aim of achieving their
            adaptation to the program.
          </li>
          <li>
            Guide students in their initial steps of the course and address
            their inquiries.
          </li>
          <li>
            Assist and support in exercise resolution and promote group
            collaboration (Pair Programming).
          </li>
          <li>Propose ideas for the improvement of Bootcamp processes.</li>
          <li>Foster group cohesion and build community.</li>
        </ul>
        <div className={styles.skills}>
          <ul className={styles.techSkills}>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Sequelize</li>
            <li>PostgreSQL</li>
            <li>Express.js</li>
          </ul>
          <ul className={styles.tools}>
            <li>Git</li>
            <li>Github</li>
          </ul>
          <ul className={styles.softSkills}>
            <li>Teamwork</li>
            <li>Communication</li>
            <li>Leadership</li>
            <li>Motivation</li>
            <li>Problem-solving</li>
            <li>Critical thinking</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Henry;
