import React, { useEffect, useState } from 'react'
import data from './data'
import { motion } from 'framer-motion'
import AOS from "aos";
import "aos/dist/aos.css";

function Portfolio() {

  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  const comment = '//'

  const [item, setItem] = useState(data)

  const filterItem = (cateItem) => {
    const upadatedItem = data.filter((curElem) => {
      return curElem.category === cateItem;
    })
    setItem(upadatedItem)
  }

  function changeActive1() {
    document.getElementById('link1').classList.add('portfolio__link_active')
    document.getElementById('link2').classList.remove('portfolio__link_active')
    document.getElementById('link3').classList.remove('portfolio__link_active')
    document.getElementById('link4').classList.remove('portfolio__link_active')
  }

  function changeActive2() {
    document.getElementById('link1').classList.remove('portfolio__link_active')
    document.getElementById('link2').classList.add('portfolio__link_active')
    document.getElementById('link3').classList.remove('portfolio__link_active')
    document.getElementById('link4').classList.remove('portfolio__link_active')
  }

  function changeActive3() {
    document.getElementById('link1').classList.remove('portfolio__link_active')
    document.getElementById('link2').classList.remove('portfolio__link_active')
    document.getElementById('link3').classList.add('portfolio__link_active')
    document.getElementById('link4').classList.remove('portfolio__link_active')
  }

  function changeActive4() {
    document.getElementById('link1').classList.remove('portfolio__link_active')
    document.getElementById('link2').classList.remove('portfolio__link_active')
    document.getElementById('link3').classList.remove('portfolio__link_active')
    document.getElementById('link4').classList.add('portfolio__link_active')
  }

  return (
      <div data-aos="fade-up" id="portfolio" className="portfolio">
        <div className="container portfolioContainer">
          <p className="section__headline">{comment} my works</p>
          <div className="links">
            <ul className='flexEnd'>
              <li className='portfolio__pagination-item' onClick={() => setItem(data)}><p onClick={changeActive1} id='link1' className='text portfolio__link portfolio__link_active'>All</p></li>
              <li className='portfolio__pagination-item' onClick={() => filterItem('HTML/Sass')}><p onClick={changeActive2} id='link2' className='text portfolio__link'>HTML/Sass</p></li>
              <li className='portfolio__pagination-item' onClick={() => filterItem('React')}><p onClick={changeActive3} id='link3' className='text portfolio__link'>React</p></li>
              <li className='portfolio__pagination-item' onClick={() => filterItem('Figma')}><p onClick={changeActive4} id='link4' className='text portfolio__link'>Figma</p></li>
            </ul>
          </div>
          <div className="content grid mtop">
            {
              item.map((elem) => {
                const {title, category, name, link, overlay} = elem
                return(
                  <>
                    <div className={name}>
                      <div 
                        className={overlay}
                      >
                        <p className="text portfolio__title">{title}</p>
                        <motion.a target='_blank' rel='noreferrer' href={link} whileTap={{scale: 0.95}}>Open in new window</motion.a>
                        <p className="text portfolio__category">{category}</p>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
  )
}

export default Portfolio