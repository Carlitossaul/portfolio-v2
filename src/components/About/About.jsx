import styles from "./About.module.css";
import img from "./assets/perfil-cal10-removebg-preview.png";
import certificate from "../../assets/certificateHenry.png";
import { useEffect, useState } from "react";
import imgLoading from "../../assets/loadingport.gif";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoading(false);
    }, 1600);
  }, []);

  return (
    <>
      {loading ? (
        <div className={styles.loadingContainer}>
          <img className={styles.loading} src={imgLoading} alt="loading" />
        </div>
      ) : (
        <div className={styles.Container}>
          <div className={styles.title}>
            <h1 className={styles.h1}>About </h1>
            <br />
          </div>
          <div className={styles.description}>
            <div className={styles.theP}>
              <p className={styles.p}>
                {" "}
                <span>•</span> Hello! I'm Carlos, a passionate Full Stack
                Developer with a focus on Front End, based in Formosa,
                Argentina. I enjoy life in the beautiful capital of Formosa with
                my family.
              </p>
              <p className={styles.p}>
                {" "}
                <span>•</span> I have been fond of computers since childhood.
                They have always been a great tool in my daily life, not just
                for studying, but for everything. One day, I decided to make a
                180-degree turn in my career and pursue what I truly love, so I
                decided to study programming. That's when I joined a bootcamp. I
                learned a lot, worked on individual and team projects. I can
                confidently say that through development, I discovered something
                that truly excites me. Today, I know that my place is in
                technology.
              </p>
              <p className={styles.p}>
                {" "}
                <span>•</span> As a developer, I give my all. I enjoy providing
                attractive and functional digital experiences that have a
                positive impact on users. I also have leadership skills and take
                initiative. I am highly dedicated when I work and deliver
                efficient results. Additionally, I am creative and naturally
                analytical in providing solutions.
                <br />I adapt to changes and learn quickly, which is why I
                consider myself a self-taught individual.
              </p>
              <p className={styles.p}>
                {" "}
                <span>•</span> In my ongoing process of specialization, I keep
                up with the most in-demand technologies in the current market.
                As part of my professional development, I am creating both
                individual and team projects that will soon be available in my
                portfolio.
              </p>
              <p className={styles.p}>
                {" "}
                <span>• </span> Currently, I serve as a Full Stack Teaching
                Assistant, where I assist beginners in a programming bootcamp,
                further strengthening my technical and soft skills.
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
          <br />
          <div className={styles.containerCertificate}>
            <h4>
              Full Stack Developer Certificate: Proficiency in Front End and
              Back End Technologies
            </h4>
            <div className={styles.divCertificate}>
              <img
                className={styles.certificate}
                src={certificate}
                alt="certificate"
              />
            </div>
          </div>
          <div className={styles.space}></div>
        </div>
      )}
    </>
  );
};

export default About;
