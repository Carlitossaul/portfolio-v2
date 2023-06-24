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
            ¡Hola! Soy Carlos, un apasionado Desarrollador Full Stack Junior con
            enfoque en Front End, ubicado en Formosa, Argentina. Disfruto de la
            vida en la hermosa capital de Formosa junto con mi familia.
          </p>
          <p className={styles.p}>
            Mi pasión radica en la creación de experiencias digitales atractivas
            y funcionales que impacten positivamente a los usuarios.
            Recientemente, finalicé mi formación en Henry, adquiriendo una
            sólida base en desarrollo web y obteniendo experiencia práctica a
            través de proyectos individuales y en equipo.
          </p>
          <p className={styles.p}>
            En mi último proyecto grupal, asumí el rol de líder en el Front End,
            demostrando iniciativa, atención al detalle y un enfoque
            perfeccionista para garantizar que las aplicaciones se vean y
            funcionen según lo previsto.
            <br />
            Me destaco por mi responsabilidad y puntualidad en la entrega de
            proyectos, siempre esforzándome por cumplir con los horarios y metas
            propuestas.
            <br />
            Soy disciplinado en mi aprendizaje y organizo mi tiempo de manera
            efectiva para poner en práctica lo que aprendo.
          </p>
          <p className={styles.p}>
            Además de mis habilidades técnicas, mi trabajo actual como portero
            me ha brindado la oportunidad de desarrollar habilidades
            interpersonales y de comunicación. También desempeño el rol de
            Teaching Assistant, donde ayudo a principiantes en el bootcamp de
            programación, lo que fortalece aún más mis habilidades blandas.
          </p>

          <p className={styles.p}>
            En mi continuo proceso de especialización, me mantengo al tanto de
            las tecnologías más demandadas en el mercado actual. Como parte de
            mi desarrollo profesional, estoy creando proyectos tanto
            individuales como en equipo, los cuales estarán disponibles
            próximamente en mi portafolio.
            <br />I currently have experience working with the following
            technologies:
          </p>
        </div>
        <div className={styles.divImg}>
          <img className={styles.img} src={img} alt="" />
        </div>
      </div>
      <div className={styles.tecnologias}>
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
          <li>Agile Methodologies</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
