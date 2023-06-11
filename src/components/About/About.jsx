import style from "./About.module.css";
import img from "../../assets/20220215_071013_(1).jpg";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.Container}>
      <div className={style.title}>
        <h1 className={style.h1}>About </h1>
        <br />
      </div>
      <div className={style.description}>
        <div className={style.theP}>
          <p className={style.p}>
            My name is Carlos Lovey and I like to create things that live on the
            internet. I love developing. I enjoy creating projects and watching
            them work.
          </p>
          <p className={style.p}>
            My interest in web development began in my adolescence but I was
            able to dedicate myself to my training just around June 2022 in a
            bootcamp. Simultaneously I have taken courses to complement the path
            of learning, I currently have experience working with the following
            technologies:
          </p>
        </div>
        <div className={style.divImg}>
          <img className={style.img} src={img} alt="Carlos Lovey" />
        </div>
      </div>
      <div className={style.tecnologias}>
        <table className={style.table}>
          <tr>
            <td>
              <li>Html</li>
            </td>
            <td>
              <li>React</li>
            </td>
          </tr>
          <tr>
            <td>
              <li>CSS</li>
            </td>
            <td>
              <li>Redux</li>
            </td>
          </tr>
          <tr>
            <td>
              <li>Bootstrap</li>
            </td>
            <td>
              <li>Git</li>
            </td>
          </tr>
          <tr>
            <td>
              <li>Javascript (ES6+)</li>
            </td>
            <td>
              <li>Github</li>
            </td>
          </tr>
          <tr>
            <td>
              <li>Express</li>
            </td>
            <td>
              <li>Sequelize</li>
            </td>
          </tr>
          <tr>
            <td>
              <li>Postgresql</li>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default About;
