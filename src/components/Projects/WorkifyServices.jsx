import React from "react";
import ReactPlayer from "react-player";
import styles from "./stylesProjects.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import img1 from "./assets/workify1.webp";

import { useModeLightContext } from "../../hooks/useModeLightContext";

const WorkifyServices = () => {
  const { modeLight } = useModeLightContext();
  return (
    <div className={styles.projectContainer}>
      <h2 className={styles.title}>
        <span>•</span> Workify Services
      </h2>
      <div className={styles.row}>
        <div className={styles.oneThird}>
          <ul className={styles.dataProject}>
            <li>
              Participation in an agile development team with one-week sprints,
              presenting progress to a Product Owner on the development of a
              complete microservices app. The technical requirements included:
              <ul>
                <li>Integrated local and third-party authentication</li>
                <li>Payment gateway</li>
                <li>Combined filters</li>
                <li>Cloudinary</li>
                <li>Local storage/persistence</li>
                <li>Reviews/ratings</li>
                <li>Admin dashboard</li>
                <li>Notifications</li>
                <li>Soft deletion</li>
              </ul>
            </li>
            <li>
              In the application, service providers can create profiles to be
              hired, and users can browse and hire domestic services as needed.
            </li>
          </ul>
          <div className={styles.divImageResponsive}>
            <img className={styles.imageResponsive} src={img1} alt="img1" />
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
              <img className={styles.carouselImage} src={img1} alt="img1" />
            </div>
          </Carousel>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.twoThirds}>
          <ReactPlayer controls={true} url="https://youtu.be/dbMXKbMTPwA" />
        </div>
        <div className={styles.oneThird}>
          <ul className={styles.ul}>
            <li>HTML5</li>
            <li>CSS</li>
            <li>Cloudinary</li>
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
            <li>Agile Methodologies</li>
          </ul>
          <div
            className={`${styles.links} ${
              modeLight ? styles.linkLight : styles.linkDark
            }`}
          >
            {/* <Link
              target="_blank"
              className={styles.link}
              to={"https://workify-alpha.vercel.app/"}
            >
              <BsBoxArrowUpRight className={styles.icon} />
              <p>Visit the live site</p>
            </Link> */}
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
