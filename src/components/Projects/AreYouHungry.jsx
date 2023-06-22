import React from "react";
import ReactPlayer from "react-player";
import styles from "./stylesProjects.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import hungry1 from "./assets/hungry1.png";
import hungry2 from "./assets/hungry2.png";
import hungry3 from "./assets/hungry3.png";
import hungry4 from "./assets/hungry4.png";
import hungry5 from "./assets/hungry5.png";
import hungry6 from "./assets/hungry6.png";
import hungry7 from "./assets/hungry7.png";

const AreYouHungry = () => {
  return (
    <div className={styles.projectContainer}>
      <h2 className={styles.title}>
        <span>•</span> Are you hungry?
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
                src={hungry1}
                alt="hungry1"
              />
            </div>
            <div className={styles.carouselImageContainer}>
              <img
                className={styles.carouselImage}
                src={hungry2}
                alt="hungry2"
              />
            </div>
            <div className={styles.carouselImageContainer}>
              <img
                className={styles.carouselImage}
                src={hungry3}
                alt="hungry3"
              />
            </div>
            <div className={styles.carouselImageContainer}>
              <img
                className={styles.carouselImage}
                src={hungry4}
                alt="hungry4"
              />
            </div>
            <div className={styles.carouselImageContainer}>
              <img
                className={styles.carouselImage}
                src={hungry5}
                alt="hungry5"
              />
            </div>
            <div className={styles.carouselImageContainer}>
              <img
                className={styles.carouselImage}
                src={hungry6}
                alt="hungry6"
              />
            </div>
            <div className={styles.carouselImageContainer}>
              <img
                className={styles.carouselImage}
                src={hungry7}
                alt="hungry7"
              />
            </div>
          </Carousel>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.twoThirds}>
          <ReactPlayer controls={true} url="https://youtu.be/EzsG52GOCzM" />
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

export default AreYouHungry;
