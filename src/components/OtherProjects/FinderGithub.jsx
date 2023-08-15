//styles
import styles from "./stylesOtherProjects.module.css";
import portfolioVersionOne from "../Projects/assets/hungry1.png";

//dependencies
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";

//hooks
import { useModeLightContext } from "../../hooks/useModeLightContext";

const FinderGithub = () => {
  const { modeLight } = useModeLightContext();
  return (
    <div className={styles.otherProjects}>
      <h2 className={styles.title}>
        <span>•</span> Finder Github
      </h2>
      <div className={styles.container}>
        <div className={styles.boxOne}>
          <ul className={styles.dataProject}>
            <li>
              An application created using the GitHub API to search for users
              and inspect their projects. I was watching a video where they
              explained how to use TypeScript, and I took the opportunity to
              create this mini-app for practice.
            </li>
          </ul>
          <div className={styles.divImageResponsive}>
            <img
              className={styles.imageResponsive}
              src={portfolioVersionOne}
              alt="hungry2"
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
              to={"https://git-hub-finder-ts.vercel.app/"}
            >
              <BsBoxArrowUpRight className={styles.icon} />
              <p>Visit the live site</p>
            </Link>
            <Link
              target="_blank"
              className={styles.link}
              to={"https://github.com/Carlitossaul/GitHub-Finder-TS"}
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
            url="https://youtu.be/NzNdynf_8y0"
          />

          <ul className={styles.ul}>
            <li>HTML5</li>
            <li>CSS</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Javascript</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FinderGithub;
