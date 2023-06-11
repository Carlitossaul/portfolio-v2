// AreYouHungry.jsx
import React from "react";
import styles from "./styles.module.css";

const AreYouHungry = () => {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectInfo}>
        <h2>Title</h2>
        <p>Description</p>
        <div className={styles.mediaContainer}>
          <div className={styles.carousel}>Imagenes</div>
          <div className={styles.video}>Video</div>
        </div>
        <section className={styles.projectLinks}>Links</section>
        <ul className={styles.projectTechnologies}>
          <li>Tecnologias</li>
        </ul>
        <p>Roles y responsabilidades</p>
        <p>Logros o resultados destacados</p>
        <p>Proceso de desarrollo (Scrum, Agile)</p>
        <p>Lecciones aprendidas y aspectos a mejorar</p>
        <p>Objetivos y requisitos del proyecto</p>
        <p>Funcionalidades destacadas</p>
      </div>
    </div>
  );
};

export default AreYouHungry;
