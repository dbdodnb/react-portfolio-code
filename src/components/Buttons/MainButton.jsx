import React from 'react'
import { motion } from 'framer-motion'

function MainButton() {
  return (
    <>
        <motion.a 
            href="#portfolio" 
            className="mainButton mainButton_ml"
            whileTap={{scale: 0.9}}
        >
            Watch my works
        </motion.a>
    </>
  )
}

export default MainButton