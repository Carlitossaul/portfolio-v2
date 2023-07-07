import { Suspense, lazy } from "react";
const AreYouHungry = lazy(() => import("../Projects/AreYouHungry"));
const RickAndMorty = lazy(() => import("../Projects/RickAndMorty"));
const SearchImages = lazy(() => import("../Projects/SearchImages"));
const WorkifyServices = lazy(() => import("../Projects/WorkifyServices"));
import styles from "./Portfolio.module.css";
import { useEffect } from "react";
import imgLoading from "../../assets/loadingport.gif";

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
      <Suspense
        fallback={
          <div className={styles.loadingContainer}>
            <img className={styles.loading} src={imgLoading} alt="loading" />
          </div>
        }
      >
        <div className={styles.projectsContainer}>
          <AreYouHungry />
          <WorkifyServices />
          <SearchImages />
          <RickAndMorty />
          <div className={styles.space}></div>
        </div>
      </Suspense>
    </div>
  );
};

export default Portfolio;
