import React from "react";
import ReactPlayer from "react-player";
import styles from "./stylesProjects.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "./assets/workify1.png";
import img2 from "./assets/workify2.png";
import img3 from "./assets/workify3.png";
import img4 from "./assets/workify4.png";

const WorkifyServices = () => {
  return (
    <div className={styles.projectContainer}>
      <h2 className={styles.title}>
        <span>•</span> Workify Services
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
              <img className={styles.carouselImage} src={img1} alt="img1" />
            </div>
            <div className={styles.carouselImageContainer}>
              <img className={styles.carouselImage} src={img2} alt="img2" />
            </div>
            <div className={styles.carouselImageContainer}>
              <img className={styles.carouselImage} src={img3} alt="img3" />
            </div>
            <div className={styles.carouselImageContainer}>
              <img className={styles.carouselImage} src={img4} alt="img4" />
            </div>
          </Carousel>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.twoThirds}>
          <ReactPlayer controls={true} url="https://youtu.be/pPZNQ-xIbC0" />
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

export default WorkifyServices;
