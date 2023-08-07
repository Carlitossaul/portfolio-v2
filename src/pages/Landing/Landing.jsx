//React
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Styles
import styles from "./Landing.module.css";
import img from "./assets/carlos.webp";
import diame from "./assets/diame.webp";
import jensy from "./assets/jensy.webp";
import joaquin from "./assets/joaquin.webp";
import mariano from "./assets/mariano.webp";
import logo from "../../assets/logo.png";

//librerias
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { toast } from "react-hot-toast";
import "animate.css";

//components
import Redes from "../../components/Redes/Redes";

//hooks
import { useModeLightContext } from "../../hooks/useModeLightContext";

const Landing = () => {
  const { modeLight } = useModeLightContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div
          className={`${styles.divLoading} animate__animated animate__zoomIn`}
        >
          <img className={styles.loading} src={logo} alt="logo" />
        </div>
      ) : (
        <div className={styles.twoViews}>
          {" "}
          <div className={`${styles.testimonials} ${styles.hidePageNumbers} `}>
            <div className={modeLight ? styles.lightSkewed : styles.skewed}>
              <img className={styles.logo} src={logo} alt="logo" />
            </div>
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
              <div className={styles.carousel}>
                <p className={styles.parrafo}>
                  "Si pudiera describir en una palabra a Carlos, sería
                  determinado, tuve el privilegio de trabajar en conjunto con
                  él, siempre responsable y dispuesto a apoyar a los demás, gran
                  compañero y colega."
                </p>
                <div className={styles.infoContainer}>
                  <div className={styles.info}>
                    <h2>Joaquin Guerrero</h2>
                    <p>Ingeniero de Sistemas - Developer Web Full Stack</p>
                  </div>
                  <div className={styles.divImgPerson}>
                    <img
                      className={styles.imgPerson}
                      src={joaquin}
                      alt="joaquin"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.carousel}>
                <p className={styles.parrafo}>
                  "Carlos, posee un conjunto de conocimientos en desarrollo
                  fullstack, sus habilidades tecnicas son excepcionales con un
                  amplio dominio en lenguajes de programacion, frameworks y
                  tecnologías relevantes. En resumen, Carlos, es un profesional
                  de confianza y altamente competente en el desarrollo
                  fullstack."
                </p>
                <div className={styles.infoContainer}>
                  <div className={styles.info}>
                    <h2>Diamela Villalba</h2>
                    <p>Desarrollador Fullstack</p>
                  </div>
                  <div className={styles.divImgPerson}>
                    <img className={styles.imgPerson} src={diame} alt="diame" />
                  </div>
                </div>
              </div>
              <div className={styles.carousel}>
                <p className={styles.parrafo}>
                  "Excelente compañero de programación. Posee habilidades
                  excepcionales para codificar y demuestra confianza y seguridad
                  en su trabajo. Siempre está dispuesto a ayudar y colaborar en
                  equipo, brindando soluciones eficientes a los desafíos. Su
                  pasión por la programación es evidente y contagiosa, lo cual
                  lo convierte en un gran activo para cualquier proyecto. Su
                  enfoque y atención a los detalles son admirables, lo que
                  garantiza la calidad y el éxito de sus contribuciones. Es un
                  placer trabajar con alguien tan dedicado y talentoso como él."
                </p>
                <div className={styles.infoContainer}>
                  <div className={styles.info}>
                    <h2>Jensy Figueroa</h2>
                    <p>Developer Web Full Stack - Licenciado en Informatica</p>
                  </div>
                  <div className={styles.divImgPerson}>
                    <img className={styles.imgPerson} src={jensy} alt="jensy" />
                  </div>
                </div>
              </div>
              <div className={styles.carousel}>
                <p className={styles.parrafo}>
                  "Carlos se destaca por su desempeño como desarrollador web
                  full stack y también de compañero de trabajo. Es disciplinado,
                  constante, busca la mejor manera de trabajar y de resolver
                  problemas de códigos que se le presenten. Siempre está
                  aprendiendo, gran autodidacta."
                </p>
                <div className={styles.infoContainer}>
                  <div className={styles.info}>
                    <h2>Mariano Giusti</h2>
                    <p>Developer Web Full Stack</p>
                  </div>
                  <div className={styles.divImgPerson}>
                    <img
                      className={styles.imgPerson}
                      src={mariano}
                      alt="mariano"
                    />
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
          <div className={styles.presentation}>
            <div className={styles.divImg}>
              <img className={styles.img} src={img} alt="" />
            </div>
            <div className={styles.data}>
              <h2
                className={modeLight ? styles.dataTitleLight : styles.datatitle}
              >
                Hi, I'm
              </h2>
              <h1 className={styles.name}> Carlos Lovey</h1>
              <h2
                className={modeLight ? styles.dataTitleLight : styles.datatitle}
              >
                I'm a Developer Web Full Stack
              </h2>
              <p className={modeLight ? styles.dataPLight : styles.dataP}>
                I specialize in JavaScript, HTML, CSS, React, Redux, Node.js. I
                have worked on various web projects and have a strong passion
                for creating beautiful and functional websites. I strive to
                deliver high-quality code and exceptional user experiences.
              </p>
            </div>
            <div className={styles.divButton}>
              <Link style={{ textDecoration: "none" }} to={"/portfolio"}>
                <button
                  onClick={() => toast("Welcome to my portfolio")}
                  className={`${styles.button} animate__animated animate__jackInTheBox`}
                >
                  See My Work
                </button>
              </Link>
            </div>
            <Redes />
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
