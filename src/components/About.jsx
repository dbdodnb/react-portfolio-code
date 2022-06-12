import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
// import { AOS } from 'aos'
import AOS from "aos";
import "aos/dist/aos.css";
 
function About() {
  // AOS.init()

  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  const comment = '//'
  return (
      <div data-aos="fade-up" id="about" className="about">
          <div className="aboutContainer">
            <div className="about__photo"></div>
            <div className="about__content">
              <p className="section__headline">{ comment } about me</p>
              <p className="text">
                Hi, I'm Danyil Mamentovych and I'm front-end developer.
              </p>
              <p className="text">I'm 16 years old, I have good leadership personal qualities, I had an experience working in team projects, can generate ideas and find solutions, which will be convinient for all people in the group.</p>
              <p className="text">I'm open to new knowledge, can study for a new topics quickly. Also, I can teach other for some things I know if needed.</p>
              <p className="text">Contact me <motion.a 
                  href="#contact"
                  whileHover={{scale: 1.07}}
                  whileTap={{scale: 0.95}}
                >
                  here
                </motion.a>
              </p>
            </div>
          </div>
        </div>
  )
}

export default About