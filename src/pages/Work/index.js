import React from 'react'
import { motion } from 'framer-motion'
import { pageVariantHorizontal } from '../../utils/pageTransition'

import { useStyles } from './styles'

const Work = () => {

  const classes = useStyles()

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariantHorizontal}
      className={classes.Work}
    >
      Work page
    </motion.div>
  )
}

export default Work