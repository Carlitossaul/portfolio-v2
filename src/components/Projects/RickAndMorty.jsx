import React from "react";
import styles from "./stylesProjects.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactPlayer from "react-player";
import rym1 from "./assets/rym1.png";
import rym2 from "./assets/rym2.png";
import rym3 from "./assets/rym3.png";

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
            width={600}
            showStatus={false}
          >
            <img className={styles.imgApp} src={rym1} alt="" />
            <img className={styles.imgApp} src={rym2} alt="" />
            <img className={styles.imgApp} src={rym3} alt="" />
          </Carousel>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.twoThirds}>
          <ReactPlayer controls={true} url="https://youtu.be/OR5gMK9P0Fw" />
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
