//React
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Styles
import styles from "./Landing.module.css";
import img from "./assets/carlos.jpg";
import wesley from "./assets/wesley.jpg";
import sarah from "./assets/sarah.jpg";
import tobias from "./assets/tobias.jpg";
import joaquin from "./assets/joaquin.webp";
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
                  "I have the pleasure to recommend Carlos Lovey as the inspiring manager of the web development team at LabsIF. Under his leadership, the team of eight people excelled as the most productive in the company. Carlos has a unique ability to motivate the team, foster a collaborative work environment, and achieve remarkable results."
                </p>
                <div className={styles.infoContainer}>
                  <div className={styles.info}>
                    <h2>Wesley Ulisses</h2>
                    <p>Software Engineer</p>
                  </div>
                  <div className={styles.divImgPerson}>
                    <img className={styles.imgPerson} src={wesley} alt="wesley" />
                  </div>
                </div>
              </div>
              <div className={styles.carousel}>
                <p className={styles.parrafo}>
                  "Dedicated, committed, and responsible. He always seeks opportunities to help team members and meet project deadlines. We worked together for over 6 months, and I can affirm that leading development teams and creating a collaborative and healthy work environment are two of his most evident soft skills."
                </p>
                <div className={styles.infoContainer}>
                  <div className={styles.info}>
                    <h2>Sarah Almeida</h2>
                    <p>Scrum Master</p>
                  </div>
                  <div className={styles.divImgPerson}>
                    <img className={styles.imgPerson} src={sarah} alt="sarah" />
                  </div>
                </div>
              </div>
              <div className={styles.carousel}>
                <p className={styles.parrafo}>
                  "Carlos Lovey was a great professional. I worked with him at LabsIF, where he was an excellent tech lead and a superb full-stack developer. He had experience in people management and coordinated a team of more than 10 members."
                </p>
                <div className={styles.infoContainer}>
                  <div className={styles.info}>
                    <h2>Tobias Ramos</h2>
                    <p>Frontend Developer</p>
                  </div>
                  <div className={styles.divImgPerson}>
                    <img
                      className={styles.imgPerson}
                      src={tobias}
                      alt="tobias"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.carousel}>
                <p className={styles.parrafo}>
                  "If I could describe Carlos in one word, it would be "determined." I had the privilege of working together with him; he is always responsible and willing to support others—a great teammate and colleague."
                </p>
                <div className={styles.infoContainer}>
                  <div className={styles.info}>
                    <h2>Joaquin Guerrero</h2>
                    <p>Systems Engineer - Developer Web Full Stack</p>
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
                I'm a Software Developer Full Stack
              </h2>
              <p className={modeLight ? styles.dataPLight : styles.dataP}>
                I specialize in Typescript, C#, ASP.NET, Node.js, JavaScript, React, Angular. 
                With a background leading projects and collaborating effectively, I've worked on diverse web projects, aiming always to deliver high-quality code and exceptional user experiences.
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
