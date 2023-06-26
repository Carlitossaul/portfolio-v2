import styles from "./About.module.css";
import img from "./assets/perfil-cal10-removebg-preview.png";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.Container}>
      <div className={styles.title}>
        <h1 className={styles.h1}>About </h1>
        <br />
      </div>
      <div className={styles.description}>
        <div className={styles.theP}>
          <p className={styles.p}>
            {" "}
            <span>•</span> Hello! I'm Carlos, a passionate Junior Full Stack
            Developer with a focus on Front End, located in Formosa, Argentina.
            I enjoy life in the beautiful capital of Formosa with my family.
          </p>
          <p className={styles.p}>
            {" "}
            <span>•</span> My passion lies in creating engaging and functional
            digital experiences that positively impact users. Recently, I
            completed my training at Henry, gaining a solid foundation in web
            development and gaining practical experience through individual and
            team projects.
          </p>
          <p className={styles.p}>
            {" "}
            <span>•</span> In my latest group project, I took on the role of
            Front End lead, demonstrating initiative, attention to detail, and a
            perfectionist approach to ensuring that applications look and
            function as intended.
            <br />
            I stand out for my responsibility and punctuality in delivering
            projects, always striving to meet proposed deadlines and goals.
            <br />I am disciplined in my learning and effectively organize my
            time to put into practice what I learn.
          </p>
          <p className={styles.p}>
            {" "}
            <span>•</span> In addition to my technical skills, my current work
            as a doorman has provided me with the opportunity to develop
            interpersonal and communication skills. I also serve as a Teaching
            Assistant, where I assist beginners in the programming bootcamp,
            further strengthening my soft skills.
          </p>
          <p className={styles.p}>
            {" "}
            <span>• </span> In my ongoing process of specialization, I stay up
            to date with the most in-demand technologies in the current market.
            As part of my professional development, I am creating both
            individual and team projects, which will be available soon in my
            portfolio.
          </p>
        </div>
        <div className={styles.divImg}>
          <img className={styles.img} src={img} alt="" />
        </div>
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
          <li>Agile Methodologies</li>
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
          <li>Collaborative</li>
          <li>Perseverant</li>
          <li>Initiative</li>
          <li>Self-taught</li>
          <li>Dedication</li>
          <li>Empathy</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
