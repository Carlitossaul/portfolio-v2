import AreYouHungry from "../Projects/AreYouHungry";
import RickAndMorty from "../Projects/RickAndMorty";
import SearchImages from "../Projects/SearchImages";
import WorkifyServices from "../Projects/WorkifyServices";
import styles from "./Portfolio.module.css";
import { useEffect, useState } from "react";
import imgLoading from "../../assets/loadingport.gif";

const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.containerTitle}>
        <h1>Portfolio</h1>
        <h4>Check out my latest projects:</h4>
      </div>
      {loading ? (
        <div className={styles.loadingContainer}>
          <img className={styles.loading} src={imgLoading} alt="loading" />
        </div>
      ) : (
        <div className={styles.projectsContainer}>
          <AreYouHungry />
          <WorkifyServices />
          <SearchImages />
          <RickAndMorty />
          <div className={styles.space}></div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
