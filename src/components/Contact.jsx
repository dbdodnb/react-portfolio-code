import React, { useEffect } from 'react'
import ContactForm from './ContactForm'
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {

    useEffect(() => {
        AOS.init({
          once: true,
        });
        AOS.refresh();
      }, []);

    const comment = '//'

  return (
        <div data-aos="fade-up" className="contact" id="contact">
            <div className="container contactContainer">
                <p className="section__headline">{comment} text me</p>
                <div className="flexSB">
                    <ContactForm />
                    <div className="contact__info">
                        <p className="contact__heading">Have a question?</p>
                        <a href="tel:+380961386439" className="contact__link">+38(096)-138-64-39</a>
                        <a href="mailto:daniilmamentovich@gmail.com" className="contact__link">daniilmamentovich@gmail.com</a>
                        <p className="contact__heading">Check out my socials:</p>
                        <div className="social">
                            <a target='_blank' rel='noreferrer' href="https://www.instagram.com/mamentovychh/" className="social__link"> </a>
                            <a target='_blank' rel='noreferrer' href="https://www.facebook.com/mamentovych" className="social__link"> </a>
                            <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/mamentovych" className="social__link"> </a>
                            <a target='_blank' rel='noreferrer' href="https://github.com/dbdodnb" className="social__link"> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}



export default Contact