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
      <Grid container style={{ height: '100vh' }}>
        <Grid container item md={5}>
          <Grid container item md={12} className={classes.marginLeftWrapper}>
            <Grid item xs={12} />
            <Grid container item xs={12} className={classes.marginLeftContainer}>
              <Grid item xs={1} />
              <Grid container item xs={10} className={classes.title}>
                <Typography
                  variant='h2'
                  color='primary'
                  className={classes.letters}
                  style={{
                    cursor: 'default',
                    userSelect: 'none',
                    // marginLeft: '7.5%',
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
              <Grid item xs={1} />
              <Grid container item xs={12}>
                <Grid item xs={1} />
                <Grid container item xs={10} style={{ flexDirection: 'column' }}>
                  <Typography className={classes.description}>
                    If you have any requests or questions, don't hesitate to contact me using the form!
                  </Typography>
                  <Typography className={classes.description}>
                    Alternatively, you can get through to me via mobile.
                  </Typography>
                  <Grid item xs={1} />
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={1} />
              <Grid container item xs={10}>
                <Grid item xs={12}>
                  <Form />
                </Grid>
              </Grid>
              <Grid item xs={1} />
            </Grid>
          </Grid>
        </Grid>
        <Grid container item md={7} style={{ backgroundColor: '#ffffff' }}>
          {/* <img src='https://i.gyazo.com/a9089a00b089d29c0a6375ab86875a6e.png' alt='map' 
          style={{objectFit: 'contain', width: '100%', height: '100vh'}}
          /> */}
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default Contact