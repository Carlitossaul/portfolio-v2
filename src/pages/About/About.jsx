//styles
import styles from "./About.module.css";
import certificate from "../../assets/certificateHenry.png";
import imgLoading from "../../assets/loadingport.gif";

//react
import { useEffect, useState } from "react";

//hooks
import { useModeLightContext } from "../../hooks/useModeLightContext";

const About = () => {
  const { modeLight } = useModeLightContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={styles.Container}>
        <div className={styles.title}>
          <h1 className={styles.h1}>About </h1>
          <br />
        </div>
        <div className={styles.description}>
        <div className={styles.theP}>
            <p className={styles.p}>
              {" "}
              <span>•</span> I have always been deeply involved with computers, which have been essential tools in my life. A few years ago, I decided to pivot my career towards my true passion and joined a programming bootcamp. There, I worked on both individual and team projects, solidifying my love for technology and development.
            </p>
            <p className={styles.p}>
              {" "}
              <span>•</span> As a developer, I am dedicated to creating attractive and functional digital experiences. I take the initiative, deliver efficient results, and enjoy providing innovative solutions. My creativity and analytical skills allow me to adapt quickly and continuously improve.
            </p>
            <p className={styles.p}>
              {" "}
              <span>•</span> Over the past few years, I have gained significant experience in computing and software development. I have led development teams and collaborated on various projects, honing my leadership and teamwork skills.
            </p>
            <p className={styles.p}>
              {" "}
              <span>•</span> Currently, I work at LabsIf as a team lead.
            </p>
        </div>


        </div>
        <div className={styles.tecnologias}>
          <h4>
            <span>•</span> Tech Skills
          </h4>
          <ul className={styles.ul}>

            <li>Typescript</li>
            <li>Javascript</li>
            <li>C#</li>
            <li>ASP.NET</li>
            <li>Node.js</li>
            <li>React</li>
            <li>Angular</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Redux</li>
            <li>Express.js</li>
            <li>Sequelize.js</li>
            <li>Prisma.js</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className={styles.tools}>
          <h4>
            {" "}
            <span>• </span>Tools
          </h4>
          <ul className={styles.ul}>
            <li>Jira</li>
            <li>ClickUP</li>
            <li>Slack</li>
            <li>Trello</li>
            <li>Agile Methodologies</li>
            <li>Github</li>
            <li>Git</li>
          </ul>
        </div>
        <div className={styles.softSkills}>
          <h4>
            {" "}
            <span>• </span>Soft Skills
          </h4>
          <ul className={styles.ul}>
            <li>Collaborative</li>
            <li>Perseverant</li>
            <li>Initiative</li>
            <li>Self-taught</li>
            <li>Dedication</li>
          </ul>
        </div>
        <br />
        <div className={styles.containerCertificate}>
          <h4>
            Full Stack Developer Certificate: Proficiency in Front End and Back
            End Technologies
          </h4>
          <div className={styles.divCertificate}>
            <img
              className={`${styles.certificate} ${
                modeLight ? styles.certificateLight : styles.certificateDark
              }`}
              src={certificate}
              alt="certificate"
            />
          </div>
        </div>
        <div className={styles.space}></div>
      </div>
    </>
  );
};

export default About;
