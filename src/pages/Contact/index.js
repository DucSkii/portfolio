import React from 'react'
import { motion } from 'framer-motion'
import { pageTransition } from '../../utils/pageTransition'

import { useStyles } from './styles'

const Contact = () => {

  const classes = useStyles()

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      className={classes.Contact}
    >
      Contact page
    </motion.div>
  )
}

export default Contact