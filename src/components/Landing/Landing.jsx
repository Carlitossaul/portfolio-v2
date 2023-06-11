import React from "react";
import styles from "./Landing.module.css";
import img from "./helper/20230606_004054-removebg-preview (1).png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const handleWhatsapp = () => {
  window.open("https://api.whatsapp.com/send?phone=3704988894");
};

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.testimonials} ${styles.hidePageNumbers}`}>
        <div className={styles.skewed}>
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
              "Contrate a un servicio de Pintura y la verdad estupendo"
            </p>
            <div className={styles.infoContainer}>
              <div className={styles.info}>
                <h2>- John Doe</h2>
                <p>profesion</p>
              </div>
              <div className={styles.divImgPerson}>
                <img className={styles.imgPerson} src={img} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.carousel}>
            <p className={styles.parrafo}>
              "Contrate a un servicio de Pintura y la verdad estupendo"
            </p>
            <div className={styles.infoContainer}>
              <div className={styles.info}>
                <h2>- John Doe</h2>
                <p>profesion</p>
              </div>
              <div className={styles.divImgPerson}>
                <img className={styles.imgPerson} src={img} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.carousel}>
            <p className={styles.parrafo}>
              "Contrate a un servicio de Pintura y la verdad estupendo"
            </p>
            <div className={styles.infoContainer}>
              <div className={styles.info}>
                <h2>- John Doe</h2>
                <p>profesion</p>
              </div>
              <div className={styles.divImgPerson}>
                <img className={styles.imgPerson} src={img} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.carousel}>
            <p className={styles.parrafo}>
              "Contrate a un servicio de Pintura y la verdad estupendo"
            </p>
            <div className={styles.infoContainer}>
              <div className={styles.info}>
                <h2>- John Doe</h2>
                <p>profesion</p>
              </div>
              <div className={styles.divImgPerson}>
                <img className={styles.imgPerson} src={img} alt="" />
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
          <h2>Hi, I'm</h2>
          <h1 className={styles.name}> Carlos Lovey</h1>
          <h2>I'm a Developer Web Full Stack</h2>
          <p>
            I specialize in JavaScript, HTML, CSS, React, Redux, Node.js. I have
            worked on various web projects and have a strong passion for
            creating beautiful and functional websites. I strive to deliver
            high-quality code and exceptional user experiences.
          </p>
        </div>
        <div className={styles.divButton}>
          <Link style={{ textDecoration: "none" }} to={"/portfolio"}>
            <button className={styles.button}>See My Work</button>
          </Link>
        </div>
        <div className={styles.redes}>
          <Link
            to={"https://github.com/Carlitossaul"}
            target="_blank"
            className={styles.Link}
          >
            <GoMarkGithub className={styles.iconos} />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/carloslovey/"}
            className={styles.Link}
            target="_blank"
          >
            <FaLinkedin className={styles.iconos} />
          </Link>
          <Link
            to={"https://www.instagram.com/carlos.lovey/"}
            className={styles.Link}
            target="_blank"
          >
            <FaInstagram className={styles.iconos} />
          </Link>
          <Link
            className={styles.Link}
            href="javascript:void(0);"
            onClick={handleWhatsapp}
          >
            <ImWhatsapp className={styles.iconos} />
          </Link>
          <div className={styles.verticalLine}></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
