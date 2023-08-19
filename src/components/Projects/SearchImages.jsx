import React from "react";
import ReactPlayer from "react-player";
import styles from "./stylesProjects.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import appImages1 from "./assets/app-images1.webp";
import appImages4 from "./assets/app-images4.webp";

import { useModeLightContext } from "../../hooks/useModeLightContext";

const SearchImages = () => {
  const { modeLight } = useModeLightContext();
  return (
    <div className={styles.projectContainer}>
      <h2 className={styles.title}>
        <span>•</span> Search Images
      </h2>
      <div className={styles.row}>
        <div className={styles.oneThird}>
          <ul className={styles.dataProject}>
            <li>
              This website is a project I created as part of my developer
              portfolio. Its main purpose was to practice what I was learning in
              my Frontend classes. I wanted to build an application using React
              and Redux, but what mattered the most to me at that time was
              learning how to consume data from APIs. That's how this project
              started, and over time it became important to me because I use it
              to search for images for my new projects.
            </li>
            <li>
              Its notable features include:
              <ul>
                <li>Easy and intuitive navigation.</li>
                <li>
                  It offers a vast variety of images from the API, which are
                  available for searching through the search field.
                </li>
                <li>
                  Includes aesthetic details that make it visually appealing.
                </li>
                <li>Zoom functionality to view image details.</li>
                <li>Ability to download images with just one click.</li>
                <li>Buttons for sharing images on social media.</li>
                <li>
                  Implemented local storage feature to allow users to save their
                  favorite images.
                </li>
              </ul>
            </li>
          </ul>
          <div className={styles.divImageResponsive}>
            <img
              className={styles.imageResponsive}
              src={appImages1}
              alt="appImages1"
            />
          </div>
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
                src={appImages4}
                alt="appImages4"
              />
            </div>
          </Carousel>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.twoThirds}>
          <ReactPlayer controls={true} url="https://youtu.be/PSUe7Ir_8Sg" />
        </div>
        <div className={styles.oneThird}>
          <ul className={styles.ul}>
            <li>HTML5</li>
            <li>CSS</li>
            <li>React</li>
            <li>Redux</li>
            <li>Javascript</li>
            <li>Bootstrap</li>
          </ul>
          <div
            className={`${styles.links} ${
              modeLight ? styles.linkLight : styles.linkDark
            }`}
          >
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
