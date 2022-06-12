import React, { useEffect } from 'react'
// import Overlay from './Overlay'
import AOS from "aos";
import "aos/dist/aos.css";


function Skills() {

    useEffect(() => {
        AOS.init({
          once: true,
        });
        AOS.refresh();
      }, []);

    const comment = '//'
    const text = 'All my works are dynamic, fast and apative for the best experience of using the web sites.'
    const text2 = 'For now, I know a lot of tools for the creating interactive pages, my level of knowledge in terms of them is presented by the progress bars.'
  return (
            <div data-aos="fade-up" id="skills" className="skills">
                <div className="skillsContainer container">
                    <div className="left">
                        <p className="section__headline">{comment} skills</p>
                        <p className="text">
                            {text}
                        </p>
                        <p className="text">
                            {text2}
                        </p>
                    </div>
                    <div className="right">
                        <div className="traits">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="progress">
                            <div 
                                className="progress-bar"
                            >
                                <div 
                                    className="progress-bar_fill progress-bar_fill-90"
                                ></div>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-bar_fill progress-bar_fill-90"></div>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-bar_fill progress-bar_fill-55"></div>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-bar_fill progress-bar_fill-10"></div>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-bar_fill progress-bar_fill-70"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Skills