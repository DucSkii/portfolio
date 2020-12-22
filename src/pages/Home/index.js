import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { pageVariantVertical } from '../../utils/pageTransition'

import { useStyles } from './styles'
import '../../utils/rubberBand.css'

const Home = () => {

  const classes = useStyles()

  const title = [
    'Hi,',
    `I'm Duc,`,
    'web developer.',
  ]

  const renderTitle = () => {
    return title.map((word, index) => {
      const titleArray = word.split('')
      return (
        <Grid container item xs={12} key={index}>
          <Grid container item xs={12}>
            <Typography variant='h1'
              aria-hidden="true"
              className={classes.letters}
              style={{
                color: '#ffffff',
                cursor: 'default',
                userSelect: 'none',
                marginLeft: '7.5%',
              }}
            >
              {titleArray.map((letter, index) => {
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
        </Grid>
      )
    })
  }

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariantVertical}
      className={classes.Home}
    >
      <Grid container>
        <Grid item xs={12} style={{ height: '20vh' }} />
        {renderTitle()}
        <Grid container item xs={12}>
          <Grid item xs={1} />
          <Grid container item xs={11}>
            <Typography variant='h5'
              aria-hidden="true"
              color='primary'
              className={classes.text}
              style={{
                fontFamily: 'Roboto',
                marginTop: '10px',
                cursor: 'default',
                userSelect: 'none',
              }}
            >
              Front End Developer / React Developer
          </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ height: '5vh' }} />
        <Grid container item xs={12}>
          <Grid item xs={1} />
          <Grid container item xs={11}>
            <Link
              to='/contact'
              style={{ textDecoration: 'none' }}
            >
              <Button variant='outlined' color='primary'>
                <Typography variant='h6' className={classes.contactButton}
                  style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}
                >
                  Contact me!
                  </Typography>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default Home