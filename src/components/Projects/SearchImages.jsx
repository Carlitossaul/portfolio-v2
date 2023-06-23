import React from "react";
import ReactPlayer from "react-player";
import styles from "./stylesProjects.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import appImages1 from "./assets/app-images1.png";
import appImages2 from "./assets/app-images2.png";
import appImages3 from "./assets/app-images3.png";
import appImages4 from "./assets/app-images4.png";

const SearchImages = () => {
  return (
    <div className={styles.projectContainer}>
      <h2 className={styles.title}>
        <span>•</span> Search Images
      </h2>
      <div className={styles.row}>
        <div className={styles.oneThird}>
          <p>
            <span>•</span> Este sitio web es un proyecto que creé para practicar
            lo que estaba aprendiendo en mis clases de Frontend. Quería crear
            una aplicación usando React y Redux, pero lo más importante y lo que
            me importaba en esos días era aprender a consumir datos de las API.
            Así empezó este proyecto, y con el tiempo se volvió importante para
            mí porque lo uso para buscar imágenes para mis nuevos proyectos.
          </p>
          <p>
            <span>•</span> Infinidad de imágenes que ofrece la API, las pongo a
            disposición en el search, de fácil navegación. Posee detalles
            estéticos que la hacen muy agradable a la vista (al menos eso dicen
            mis amigos). Se puede hacer Zoom a las imágenes, tambien se pueden
            descargar a solo un clic, Botones para compartir las imágenes en
            redes. Ademas use el localstorage para que el usuario pueda tener un
            apartado de favoritos.
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
          <ul className={styles.ul}>
            <li>HTML5</li>
            <li>CSS</li>
            <li>React</li>
            <li>Redux</li>
            <li>Javascript</li>
          </ul>
          <div className={styles.links}>
            <Link
              target="_blank"
              className={styles.link}
              to={"https://search-images-gilt.vercel.app/"}
            >
              <BsBoxArrowUpRight className={styles.icon} />
              <p>Visit the live site</p>
            </Link>
            <Link
              target="_blank"
              className={styles.link}
              to={"https://github.com/Carlitossaul/search-images"}
            >
              <GoMarkGithub className={styles.icon} />
              <p>View the source code on GitHub - client</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchImages;
