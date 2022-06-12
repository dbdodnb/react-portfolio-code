import React, { useState } from 'react'
import { motion } from 'framer-motion'


function Header() {
    const [active, setActive] = useState('nav_menu')
    const [icon, setIcon] = useState('nav_toggler')

    const [count, setCount] = useState(0)

    function navToggle() {
        if (active === 'nav_menu') {
            setActive('nav_menu nav_active')
        }else setActive('nav_menu')

        if (icon === 'nav_toggler') {
            setIcon('nav_toggler')
        }else setIcon('nav_toggler')

        setCount(count + 1)

        
    }

    if (count === 1) {
        document.body.style.position = 'fixed'
        document.body.style.top = '0'
        document.body.style.left = '0'
        document.body.style.overflow = 'hidden'
        
    }
    if (count === 2) {
        document.body.style.position = 'inherit'
        document.body.style.overflow = 'visible'
    }
    if (count === 3) {
        setCount(1)
    }

    function click() {
        document.getElementById('hideBurger').click()
        setCount(2)
    }

  return (
    <header>
        <div className="headerContainer container flexSB">
            <a className='logo' href="#home"> </a>
            <nav>
                <ul className={active}>
                    <li><a onClick={click} className='nav__link' href="#about">About</a></li>
                    <li><a onClick={click} className='nav__link' href="#skills">Skills</a></li>
                    <li><a onClick={click} className='nav__link' href="#portfolio">Portfolio</a></li>
                    <a onClick={click} href="#contact">
                        <motion.button className="outline-btn"
                            whileHover = {{scale: 1.05}} 
                            whileTap = {{scale: 0.9}}
                        >
                            <a href="#contact">Contact me</a>
                        </motion.button>
                    </a>
                </ul>
            </nav>
            <div id='hideBurger' onClick={navToggle} className={icon}><i className="fas fa-bars"></i></div>
        </div>    
    </header>  
  )
}

export default Header