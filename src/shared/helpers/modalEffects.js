const modalEffects = () => {
  const dropIn = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: '100vh',
      opacity: 0,
    },
  }

  const sliceIn = {
    hidden: {
      x: '-100vw',
       y: '-25vh',
      opacity: 0,
    },
    visible: {
      x: '0',
      y: '-29vh',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 37,
        stiffness: 500,
      },
    },
    exit: {
      x: '100vw',
      opacity: 0,
    },
  }
  const sliceMid = {
    hidden: {
      y: '100vh',
      opacity: 0,
    },
    visible: {
  
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 37,
        stiffness: 500,
      },
    },
    exit: {
     
      opacity: 0,
    },
  }


  return { dropIn, sliceIn, sliceMid }
}

export default modalEffects
