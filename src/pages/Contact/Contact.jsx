import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.css";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_epbalco";
    const templateID = "template_a5ev9rj";
    const userID = "n-pNqKPUvdxhgx-go";

    const templateParams = {
      userEmail: email,
      message: message,
      userName: name,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        toast.success("Message sent successfully.");
        setEmail("");
        setMessage("");
        setName("");
      })
      .catch((error) => {
        toast.error(
          "If the message could not be sent, an error occurred. Please try again later."
        );
      });
  };

  return (
    <div className={styles.Container}>
      <div className={styles.title}>
        <h1 className={styles.h1}>Contact </h1>
        <br />
      </div>
      <div className={styles.description}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            placeholder="Write your name..."
          />
          <label>Email:</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            placeholder="Write your email..."
          />
          <label>Message:</label>
          <textarea
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
            className={styles.textarea}
            placeholder="Write your message..."
          />
          <button className={styles.button} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
