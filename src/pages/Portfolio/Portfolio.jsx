//react
import { useEffect } from "react";

//components projects
import AreYouHungry from "../../components/Projects/AreYouHungry";
import RickAndMorty from "../../components/Projects/RickAndMorty";
import SearchImages from "../../components/Projects/SearchImages";
import WorkifyServices from "../../components/Projects/WorkifyServices";

//styles
import styles from "./Portfolio.module.css";
import PortfolioVersionOne from "../../components/OtherProjects/PortfolioVersionOne";
import EagleVision from "../../components/OtherProjects/EagleVision";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.containerTitle}>
        <h1>Portfolio</h1>
        <h4>
          Check out my latest projects, I also provide detailed insights about
          them in the accompanying videos!
        </h4>
      </div>
      <div className={styles.projectsContainer}>
        <WorkifyServices />
        <AreYouHungry />
        <SearchImages />
        <RickAndMorty />
      </div>
      <div className={styles.otherProjectsTitle}>
        <h1>Other Projects</h1>
      </div>
      <div className={styles.otherProjects}>
        <EagleVision />
        <PortfolioVersionOne />
      </div>
    </div>
  );
};

export default Portfolio;
