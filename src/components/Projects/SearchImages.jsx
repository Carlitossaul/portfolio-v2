import React from "react";
import ReactPlayer from "react-player";
import styles from "./stylesProjects.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import appImages1 from "./assets/app-images1.png";
import appImages2 from "./assets/app-images2.png";
import appImages3 from "./assets/app-images3.png";
import appImages4 from "./assets/app-images4.png";

const SearchImages = () => {
  return (
    <div className={styles.projectContainer}>
      <h2 className={styles.title}>
        <span>4.</span> Search Images
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
            width={600}
            showStatus={false}
          >
            <div className={styles.carouselImageContainer}>
              <img
                className={styles.carouselImage}
                src={appImages1}
                alt="appImages1"
              />
            </div>
            <div className={styles.carouselImageContainer}>
              <img
                className={styles.carouselImage}
                src={appImages2}
                alt="appImages2"
              />
            </div>
            <div className={styles.carouselImageContainer}>
              <img
                className={styles.carouselImage}
                src={appImages3}
                alt="appImages3"
              />
            </div>
            <div className={styles.carouselImageContainer}>
              <img
                className={styles.carouselImage}
                src={appImages4}
                alt="appImages4"
              />
            </div>
          </Carousel>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.twoThirds}>
          <ReactPlayer controls={true} url="https://youtu.be/niXhbVh3Gec" />
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

export default SearchImages;
