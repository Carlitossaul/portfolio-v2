import React from "react";
import styles from "./stylesProjects.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import ReactPlayer from "react-player";
import rym1 from "./assets/rym1.webp";
import rym3 from "./assets/rym3.webp";
import rym4 from "./assets/rym4.webp";

import { useModeLightContext } from "../../hooks/useModeLightContext";

const RickAndMorty = () => {
  const { modeLight } = useModeLightContext();
  return (
    <div className={styles.projectContainer}>
      <h2 className={styles.title}>
        <span>•</span> Rick & Morty Multiverse
      </h2>
      <div className={styles.row}>
        <div className={styles.oneThird}>
          <ul className={styles.dataProject}>
            <li>
              This is an application that consumes data from the Rick & Morty
              API. I worked on the Frontend, Backend, and database aspects of
              the project.
            </li>
            <li>
              Its notable features include:
              <ul>
                <li>
                  Ability to search for all characters from the series using the
                  search function.
                </li>
                <li>Includes filters and sorting options.</li>
                <li>View detailed information about each character.</li>
                <li>Implemented a favorites system.</li>
                <li>User registration feature for creating accounts.</li>
              </ul>
            </li>
          </ul>
          <div className={styles.divImageResponsive}>
            <img className={styles.imageResponsive} src={rym1} alt="rym1" />
          </div>
        </div>
        <div className={styles.twoThirds}>
          <Carousel
            className={styles.carouselContainer}
            autoPlay
            interval={10000}
            showThumbs={false}
            infiniteLoop
            transitionTime={1000}
            width={580}
            showStatus={false}
          >
            <div className={styles.carouselImageContainer}>
              <img className={styles.carouselImage} src={rym1} alt="rym1" />
            </div>

            <div className={styles.carouselImageContainer}>
              <img className={styles.carouselImage} src={rym3} alt="rym3" />
            </div>
            <div className={styles.carouselImageContainer}>
              <img className={styles.carouselImage} src={rym4} alt="rym4" />
            </div>
          </Carousel>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.twoThirds}>
          <ReactPlayer controls={true} url="https://youtu.be/oXWGslFQ_jU" />
        </div>
        <div className={styles.oneThird}>
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
          <div
            className={`${styles.links} ${
              modeLight ? styles.linkLight : styles.linkDark
            }`}
          >
            {/* <Link
              className={styles.link}
              target="_blank"
              to={"https://rym-multiverse.vercel.app/"}
            >
              <BsBoxArrowUpRight className={styles.icon} />
              <p>Visit the live site</p>
            </Link> */}
            <Link
              className={styles.link}
              target="_blank"
              to={"https://github.com/Carlitossaul/App-Ricky-and-Morty"}
            >
              <GoMarkGithub className={styles.icon} />

              <p>View the source code on GitHub</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RickAndMorty;
