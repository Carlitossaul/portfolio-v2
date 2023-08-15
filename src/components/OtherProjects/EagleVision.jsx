//styles
import styles from "./stylesOtherProjects.module.css";
import portfolioVersionOne from "../Projects/assets/eagleVision.png";

//dependencies
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";

//hooks
import { useModeLightContext } from "../../hooks/useModeLightContext";

const EagleVision = () => {
  const { modeLight } = useModeLightContext();
  return (
    <div className={styles.otherProjects}>
      <h2 className={styles.title}>
        <span>•</span> Eagle Vision
      </h2>
      <div className={styles.container}>
        <div className={styles.boxOne}>
          <ul className={styles.dataProject}>
            <li>
              Eagle Vision is a personal blog that I created to publish articles
              about soft skills. I've discovered that having well-developed soft
              skills is of utmost importance to stand out in the professional
              field and in life in general.
            </li>
            <li>
              Even though it's my personal blog, I've left the site open for
              people to create their accounts and publish enlightening articles
              that contribute to the growth of the community of programmers.
            </li>
            <li>
              The idea behind the site is to cover topics such as teamwork,
              leadership, self-management, communication, problem-solving,
              empathy, critical thinking, and proactivity, among others.
            </li>
          </ul>
          <div className={styles.divImageResponsive}>
            <img
              className={styles.imageResponsive}
              src={portfolioVersionOne}
              alt="portfolioVersionOne"
            />
          </div>
          <div
            className={`${styles.links} ${
              modeLight ? styles.linkLight : styles.linkDark
            }`}
          >
            <Link
              target="_blank"
              className={styles.link}
              to={"https://eagle-vision.vercel.app/"}
            >
              <BsBoxArrowUpRight className={styles.icon} />
              <p>Visit the live site</p>
            </Link>
            <Link
              target="_blank"
              className={styles.link}
              to={"https://github.com/Carlitossaul/Eagle-Vision"}
            >
              <GoMarkGithub className={styles.icon} />
              <p>View the source code on GitHub - client</p>
            </Link>
          </div>
        </div>
        <div className={styles.boxTwo}>
          <ReactPlayer
            className={styles.video}
            controls={true}
            url="https://youtu.be/EWIbosyY-qw"
          />

          <ul className={styles.ul}>
            <li>HTML5</li>
            <li>CSS</li>
            <li>React</li>
            <li>Javascript</li>
            <li>Node.js</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EagleVision;
