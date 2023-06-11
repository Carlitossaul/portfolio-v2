import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import style from "./Contact.module.css";
import { NavLink } from "react-router-dom";
import { BsFillEnvelopeFill } from "react-icons/bs";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configura tus credenciales de EmailJS
    const serviceID = "service_epbalco";
    const templateID = "template_a5ev9rj";
    const userID = "n-pNqKPUvdxhgx-go";

    // Crea un objeto con los datos del formulario
    const templateParams = {
      from_name: email,
      message: message,
    };

    // Envía el correo electrónico utilizando EmailJS
    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("Correo electrónico enviado con éxito", response);
        // Restablece los campos del formulario

        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error al enviar el correo electrónico", error);
      });
  };

  return (
    <div className={style.Container}>
      <h1 className={style.h1}>Contact</h1>
      <div className={style.description}>
        <form onSubmit={handleSubmit}>
          <label>
            Correo electrónico:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Mensaje:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

{
  /* <div className={style.theP}>
  <p className={style.p}>
    I am currently looking for my first job in the IT sector.
  </p>
  <p className={style.p}>Contact me!</p>
  <p className={style.p}></p>
</div>
<div className={style.divButton}>
  <NavLink
    to={"mailto:carlitossaul.h@gmail.com"}
    className={style.NavLink}
  >
    <button className={style.button}>
      <BsFillEnvelopeFill /> SEND MAIL
    </button>
  </NavLink>
</div> */
}
