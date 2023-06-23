import React from "react";
import ReactPlayer from "react-player";
import styles from "./stylesProjects.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
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
          <p>
            <span>•</span> Trabaje junto a 7 compañeros en este proyecto para
            aprobar la instancia final del bootcamp, los requerimientos tech
            fueron: Auth local y de terceros integrada, Pasarela de pagos,
            Filtros combinados, Claudinary, Local storage/persist,
            Reviews/puntuacion, Dashboard admin, Notificaciones, Borrado logico.
          </p>
          <p>
            <span>•</span> Desarrollamos una aplicacion donde los prestadores de
            servicios pueden publicar su perfil para ser contratados, y donde
            los usuarios pueden recurrir para contratar un servicio domestico
            ante la necesidad. Trabajamos con la modalidad Agile
            Methodologies/Scrum.
          </p>
          <p>
            <span>•</span> Destaco en este proyecto al equipo, aprendimos a usar
            github para el versionado de manera grupal. al principio fue dificil
            pero aprendimos a desenvolvernos rapido. Lo mas importante es que
            pudimos cumplir con todos los requerimientos en tiempo y forma.
          </p>
          <p>
            <span>•</span> Aprendi atrabajar en equipo, pude poner en practica
            el colaborar con mis compa;eros y solicitar ayuda con me fue
            necesario.
          </p>
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
          <ul className={styles.ul}>
            <li>HTML5</li>
            <li>CSS</li>
            <li>Claudinary</li>
            <li>React</li>
            <li>Redux</li>
            <li>Javascript</li>
            <li>Firebase</li>
            <li>Vite</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Stripe</li>
            <li>Sequelize.js</li>
            <li>PostgreSQL</li>
          </ul>
          <div className={styles.links}>
            <Link
              target="_blank"
              className={styles.link}
              to={"https://workify-alpha.vercel.app/"}
            >
              <BsBoxArrowUpRight className={styles.icon} />
              <p>Visit the live site</p>
            </Link>
            <Link
              target="_blank"
              className={styles.link}
              to={"https://github.com/JensyFigueroa/domesticServices_Frontend"}
            >
              <GoMarkGithub className={styles.icon} />
              <p>View the source code on GitHub - client</p>
            </Link>
            <Link
              className={styles.link}
              target="_blank"
              to={"https://github.com/JensyFigueroa/domesticServices_Backend"}
            >
              <GoMarkGithub className={styles.icon} />
              <p>View the source code on GitHub - api</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkifyServices;
