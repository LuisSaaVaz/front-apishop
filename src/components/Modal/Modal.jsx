import React from 'react'
import '../../styles/modal.css'
import { motion } from 'framer-motion'
import Backdrop from '../Backdrop/Backdrop'
import '../../styles/modal.css'
import modalEffects from '../../shared/helpers/modalEffects'


const {dropIn} = modalEffects()


const Modal = ({ classe ,classeBack, handleClose,children, variant = dropIn }) => {
  return (
    <Backdrop classe={` backdrop ${classeBack}`} onclick={handleClose}>
      
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={!classe ? 'modal' : classe}
        variants={variant}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        
        {children}
      </motion.div>
    </Backdrop>
  )
}

export default Modal
