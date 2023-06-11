import AreYouHungry from "../Projects/AreYouHungry";
import styles from "./Portfolio.module.css";
import { useEffect } from "react";

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
      </div>
      <div className={styles.space}></div>
    </div>
  );
};

export default Portfolio;
