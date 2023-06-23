import React from "react";
import styles from "./stylesProjects.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactPlayer from "react-player";
import rym1 from "./assets/rym1.png";
import rym2 from "./assets/rym2.png";
import rym3 from "./assets/rym3.png";
import rym4 from "./assets/rym4.png";
import rym5 from "./assets/rym5.png";
import rym6 from "./assets/rym6.png";

const RickAndMorty = () => {
  return (
    <div className={styles.projectContainer}>
      <h2 className={styles.title}>
        <span>1.</span> Rick & Morty
      </h2>
      <div className={styles.row}>
        <div className={styles.oneThird}>
          <p>Description</p>
          <p>Funcionacilidades destacadas</p>
          <p>roles y responsabilidades</p>
          <p>proceso de desarrollo</p>
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
              <img className={styles.carouselImage} src={rym2} alt="rym2" />
            </div>
            <div className={styles.carouselImageContainer}>
              <img className={styles.carouselImage} src={rym3} alt="rym3" />
            </div>
            <div className={styles.carouselImageContainer}>
              <img className={styles.carouselImage} src={rym4} alt="rym4" />
            </div>
            <div className={styles.carouselImageContainer}>
              <img className={styles.carouselImage} src={rym5} alt="rym5" />
            </div>
            <div className={styles.carouselImageContainer}>
              <img className={styles.carouselImage} src={rym6} alt="rym6" />
            </div>
          </Carousel>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.twoThirds}>
          <ReactPlayer controls={true} url="https://youtu.be/HYwBTpg5Z2I" />
        </div>
        <div className={styles.oneThird}>
          <p>tecnologias</p>
          <p>logros o resultados destacadso</p>
          <p>lecciones aprendidas aspectos a mejorar</p>
          <p>likns</p>
        </div>
      </div>
    </div>
  );
};

export default RickAndMorty;
