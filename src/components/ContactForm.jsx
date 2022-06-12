import React, { useRef } from "react";

import emailjs from '@emailjs/browser';

import { motion } from "framer-motion";

function ContactForm(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9tjb7cl', 'template_fnnu89c', form.current, 'OW-ZZEozsfHs9fbi_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  function sent() {
    alert('Your letter was sent!')
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input className="contact__input" placeholder="Your name" type="text" name="user_name" />
      <input className="contact__input" placeholder="Your email" type="email" name="user_email" />
      <textarea placeholder="Write a messaage here" name="message" />
      <motion.input whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={sent} className="contact__button" type="submit" value="Send" />
    </form>
  );
};

export default ContactForm