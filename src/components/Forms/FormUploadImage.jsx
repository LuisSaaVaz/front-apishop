import React from 'react'
import { motion } from 'framer-motion'
import Upload from '../Icons/Upload'

const FormUploadImage = ({image, register, value}) => {
  return (
    <motion.label
      variants={{
        open: { backgroundColor: '#ECEFF1' },
        closed: { backgroundColor: '#fff' },
      }}
      whileHover={{ backgroundColor: '#ECEFF1' }}
      transition={{ duration: 0.1 }}
      animate={image ? 'open' : 'closed'}
      className="formAdd__group__label--file"
      htmlFor="file"
    >
      <motion.div
        variants={{
          open: { rotate: 0 },
          closed: { rotate: 180, color: '#c1cbd0bc' },
        }}
        transition={{ duration: 0.2 }}
        whileHover={{ rotate: 0 }}
        animate={image ? 'open' : 'closed'}
      >
        <Upload />
      </motion.div>
      <input
        className=" form__group__file"
        type="file"
        {...register(value)}
        id="file"
      />
      <motion.p
        variants={{
          hidden: { color: '#c1cbd0bc' },
          visible: {
            color: '#253238',
            scaleX: 1.1,
            scaleY: 1.1,
            transition: { duration: 0.1 },
            fontWeight: 400,
          },
        }}
        animate={image ? 'visible' : 'hidden'}
      >
        {!image ? 'Sube una imagen !' : 'Imagen lista !'}
      </motion.p>
    </motion.label>
  )
}

export default FormUploadImage