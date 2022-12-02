import { motion } from 'framer-motion'
import  '../../styles/backdrop.css'

import React from 'react'

const Backdrop = ({ children, onclick, classe}) => {
  return (
    <motion.div
      className={classe}
      onClick={onclick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}

export default Backdrop
