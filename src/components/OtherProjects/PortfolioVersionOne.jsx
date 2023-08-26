//styles
import styles from "./stylesOtherProjects.module.css";
import portfolioVersionOne from "../Projects/assets/portfolioOne.webp";

//dependencies
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

//hooks
import { useModeLightContext } from "../../hooks/useModeLightContext";

const PortfolioVersionOne = () => {
  const { modeLight } = useModeLightContext();
  return (
    <div className={styles.otherProjects}>
      <h2 className={styles.title}>
        <span>•</span> Portfolio Version One
      </h2>
      <div className={styles.container}>
        <div className={styles.boxOne}>
          <ul className={styles.dataProject}>
            <li>
              My old portfolio, although I love its final outcome, I decided to
              go for the one I currently have because I realized that I needed
              to develop one that encompasses more utilities for the visitor.
            </li>
            <li>
              I emphasize in my old portfolio its design, easy navigation, and
              accessibility.
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
              to={"https://carlos-lovey-v1.vercel.app/"}
            >
              <BsBoxArrowUpRight className={styles.icon} />
              <p>Visit the live site</p>
            </Link>
            <Link
              target="_blank"
              className={styles.link}
              to={"https://github.com/Carlitossaul/Portfolio-V1"}
            >
              <AiFillGithub className={styles.icon} />
              <p>View the source code on GitHub - client</p>
            </Link>
          </div>
        </div>
        <div className={styles.boxTwo}>
          <ReactPlayer
            className={styles.video}
            controls={true}
            url="https://youtu.be/rYoBX_d1iPw"
          />

          <ul className={styles.ul}>
            <li>HTML5</li>
            <li>CSS</li>
            <li>React</li>
            <li>Redux</li>
            <li>Javascript</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PortfolioVersionOne;
