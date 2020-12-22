import React from 'react'
import { motion } from 'framer-motion'
import { pageVariantHorizontal } from '../../utils/pageTransition'

import { useStyles } from './styles'

const Contact = () => {

  const classes = useStyles()

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariantHorizontal}
      className={classes.Contact}
    >
      Contact page
    </motion.div>
  )
}

export default Contact