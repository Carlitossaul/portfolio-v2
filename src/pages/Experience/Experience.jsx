//styles
import styles from "./Experience.module.css";
import certificate from "../../assets/certificateHenry.png";

//react
import { useEffect, useLayoutEffect } from "react";

//hooks
import { useModeLightContext } from "../../hooks/useModeLightContext";

//jobs
import LabsIf from "../../components/Jobs/LabsIf";
import Henry from "../../components/Jobs/Henry";

const Experience = () => {
  const { modeLight } = useModeLightContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={styles.Container}>
        <div className={styles.title}>
          <h1 className={styles.h1}>Experience </h1>
          <br />
        </div>
        <div className={styles.jobs}>
          <LabsIf />
          <Henry />
        </div>
        <div className={styles.tecnologias}>
          <h4>
            <span>•</span> Tech Skills
          </h4>
          <ul className={styles.ul}>
            <li>HTML5</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Sequelize.js</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div className={styles.tools}>
          <h4>
            {" "}
            <span>• </span>Tools
          </h4>
          <ul className={styles.ul}>
            <li>Git</li>
            <li>Github</li>
            <li>Slack</li>
            <li>Scrum</li>
            <li>Kanban</li>
            <li>Trello</li>
            <li>Notion</li>
          </ul>
        </div>
        <div className={styles.softSkills}>
          <h4>
            {" "}
            <span>• </span>Soft Skills
          </h4>
          <ul className={styles.ul}>
            <li>Teamwork</li>
            <li>Communication</li>
            <li>Leadership</li>
            <li>Perseverant</li>
            <li>Problem-solving</li>
            <li>Initiative</li>
            <li>Self-taught</li>
            <li>Empathy</li>
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

export default Experience;
