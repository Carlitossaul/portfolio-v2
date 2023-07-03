import React from "react";
import ReactPlayer from "react-player";
import styles from "./stylesProjects.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
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
          <p>
            <span>•</span> Web application that consumes data from a food recipe
            API.
          </p>
          <p>
            <span>•</span> Its notable features include:
            <ul>
              <li>Combined filters</li>
              <li>Recipe creation</li>
              <li>Image upload (Cloudinary)</li>
              <li>Efficient search with over five thousand recipes</li>
              <li>Recipe details view</li>
            </ul>
          </p>
          <p>
            <span>•</span> Something remarkable about this app was that my
            fellow bootcamp classmates really liked its design, and for this
            reason, they asked me to take charge of the frontend in the final
            project.
          </p>
          <p>
            <span>•</span> The API had a limit of daily requests, which made
            development difficult. I had to implement a switch with multiple API
            keys on the backend to be able to work with it. It also helped me
            strengthen my Redux knowledge, but what I liked the most was the
            final result. I was able to apply all the styles and functionalities
            that I set out to do initially.
          </p>
          <div className={styles.divImageResponsive}>
            <img
              className={styles.imageResponsive}
              src={hungry2}
              alt="hungry2"
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
                src={hungry3}
                alt="hungry3"
              />
            </div>
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
          <ul className={styles.ul}>
            <li>HTML5</li>
            <li>CSS</li>
            <li>React</li>
            <li>Redux</li>
            <li>Javascript</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Sequelize.js</li>
            <li>PostgreSQL</li>
          </ul>
          <div className={styles.links}>
            <Link
              target="_blank"
              className={styles.link}
              to={"https://areyouhungry.vercel.app"}
            >
              <BsBoxArrowUpRight className={styles.icon} />
              <p>Visit the live site</p>
            </Link>
            <Link
              target="_blank"
              className={styles.link}
              to={"https://github.com/Carlitossaul/PI-Food-Front"}
            >
              <GoMarkGithub className={styles.icon} />
              <p>View the source code on GitHub - client</p>
            </Link>
            <Link
              className={styles.link}
              target="_blank"
              to={"https://github.com/Carlitossaul/PI-Food-back-"}
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

export default AreYouHungry;
