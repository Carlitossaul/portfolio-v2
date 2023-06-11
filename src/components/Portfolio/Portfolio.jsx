import styles from "./Portfolio.module.css";
import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.homeContainer}>
      <h1>Welcome to My Portfolio</h1>
      <p>Check out my latest projects:</p>
    </div>
  );
};

export default Portfolio;
