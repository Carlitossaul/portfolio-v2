import React from "react";
import styles from "./stylesProjects.module.css";

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
        <div className={styles.twoThirds}>Carousel</div>
      </div>
      <div className={styles.row}>
        <div className={styles.twoThirds}>Video</div>
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
