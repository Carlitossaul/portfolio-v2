//styles
import styles from "./stylesOtherProjects.module.css";

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
    <div>
      <h2>Finder Github</h2>
      <div>
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            laudantium quae. Exercitationem vero ipsa ducimus aliquam corrupti
            accusamus, quaerat, doloribus neque eum magnam placeat nisi
            blanditiis, dolor rerum aut maxime?
          </p>
        </section>
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
      <div>
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
    </div>
  );
};

export default FinderGithub;
