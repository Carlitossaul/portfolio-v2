//react
import { useEffect } from "react";

//components projects
import AreYouHungry from "../../components/Projects/AreYouHungry";
import RickAndMorty from "../../components/Projects/RickAndMorty";
import SearchImages from "../../components/Projects/SearchImages";
import WorkifyServices from "../../components/Projects/WorkifyServices";

//styles
import styles from "./Portfolio.module.css";
import FinderGithub from "../../components/OtherProjects/FinderGithub";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.containerTitle}>
        <h1>Portfolio</h1>
        <h4>Check out my latest projects:</h4>
      </div>
      <div className={styles.projectsContainer}>
        <AreYouHungry />
        <WorkifyServices />
        <SearchImages />
        <RickAndMorty />
        <FinderGithub />
        <div className={styles.space}></div>
      </div>
    </div>
  );
};

export default Portfolio;
