//styles
import styles from "./stylesOtherProjects.module.css";

//dependencies
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";

//hooks
import { useModeLightContext } from "../../hooks/useModeLightContext";

const PortfolioVersionOne = () => {
  const { modeLight } = useModeLightContext();
  return (
    <div className={styles.otherProjects}>
      <h2 className={styles.title}>
        <span>•</span> Are you hungry?
      </h2>
      <div className={styles.container}>
        <div className={styles.boxOne}>
          <ul className={styles.dataProject}>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              laudantium quae. Exercitationem vero ipsa ducimus aliquam corrupti
              accusamus, quaerat, doloribus neque eum magnam placeat nisi
              blanditiis, dolor rerum aut maxime?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              laudantium quae. Exercitationem vero ipsa ducimus aliquam corrupti
              accusamus, quaerat, doloribus neque eum magnam placeat nisi
              blanditiis, dolor rerum aut maxime?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              laudantium quae. Exercitationem vero ipsa ducimus aliquam corrupti
              accusamus, quaerat, doloribus neque eum magnam placeat nisi
              blanditiis, dolor rerum aut maxime?
            </li>
          </ul>
          <div
            className={`${styles.links} ${
              modeLight ? styles.linkLight : styles.linkDark
            }`}
          >
            <Link
              target="_blank"
              className={styles.link}
              to={"https://areyouhungry.vercel.app"}
            >
              <BsBoxArrowUpRight className={styles.icon} />
              <p>Visit the live site</p>
            </Link>
            <Link
              target="_blank"
              className={styles.link}
              to={"https://github.com/Carlitossaul/PI-Food-Front"}
            >
              <GoMarkGithub className={styles.icon} />
              <p>View the source code on GitHub - client</p>
            </Link>
            <Link
              className={styles.link}
              target="_blank"
              to={"https://github.com/Carlitossaul/PI-Food-back-"}
            >
              <GoMarkGithub className={styles.icon} />
              <p>View the source code on GitHub - api</p>
            </Link>
          </div>
        </div>
        <div className={styles.boxTwo}>
          <ReactPlayer controls={true} url="https://youtu.be/EzsG52GOCzM" />
          <ul className={styles.ul}>
            <li>HTML5</li>
            <li>CSS</li>
            <li>React</li>
            <li>Redux</li>
            <li>Javascript</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Sequelize.js</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PortfolioVersionOne;
