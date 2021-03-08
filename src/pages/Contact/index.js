import React, { useState, useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { motion } from 'framer-motion'
import { pageVariantHorizontal } from '../../utils/pageTransition'
import Form from '../../components/Form'
import Map from '../../components/Map'

import { useStyles } from './styles'

const Contact = () => {

  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 1000)
  }, [])

  const title = 'Contact me'.split('')

  const renderMap = () => {
    if (loaded === false) {
      return (
        <div className={classes.loading}>
          <Typography>Loading...</Typography>
        </div>
      )
    }
    return (
      <>
        <Map open={open} setOpen={setOpen} />
      </>
    )
  }

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariantHorizontal}
      className={classes.Contact}
    >
      <Grid container style={{ height: '100vh' }}>
        <Grid container item md={5} xs={12} className={classes.contactInfo}>
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
                    Alternatively, you can get through to me via mobile, email, discord or any other socials.
                  </Typography>
                  <Typography className={classes.description} style={{ marginTop: '10px', fontWeight: 'bold' }}>
                    Ducviet Dao . 07990877427 . ducvietdao@live.co.uk
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
        <Grid container item md={7} xs={12} className={classes.map}>
          {renderMap()}
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default Contact