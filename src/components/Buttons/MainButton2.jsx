import React from 'react'
import { motion } from 'framer-motion'

function MainButton2() {
  return (
    <>
        <motion.a 
            href="#skills" 
            className="mainButton"
            whileTap={{scale: 0.9}}
        >
            Watch my skills
        </motion.a>
    </>
  )
}

export default MainButton2