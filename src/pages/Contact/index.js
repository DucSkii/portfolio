import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { motion } from 'framer-motion'
import { pageVariantHorizontal } from '../../utils/pageTransition'
import Form from '../../components/Form'

import { useStyles } from './styles'

const Contact = () => {

  const classes = useStyles()

  const title = 'Contact me'.split('')

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariantHorizontal}
      className={classes.Contact}
    >
      <Grid container>
        <Grid item xs={12} className={classes.titleHeight} />
        <Grid container item xs={12} style={{ marginLeft: '10px' }}>
          <Typography
            variant='h2'
            color='primary'
            className={classes.letters}
            style={{
              cursor: 'default',
              userSelect: 'none',
              marginLeft: '7.5%',
            }}
          >
            {title.map((letter, index) => {
              if (letter === ' ') {
                return ' '
              }
              if (index === 0) {
                return (
                  <span className='a' key={index} style={{ marginLeft: '5px' }}>{letter}</span>
                )
              }
              return (
                <span className='a' key={index}>{letter}</span>
              )
            })}
          </Typography>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={1} />
          <Grid container item xs={10} spacing={5}>
            <Grid item md={5}>
              <Form />
            </Grid>
            <Grid item md={7}>
              MAP
            </Grid>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default Contact