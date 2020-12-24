import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { motion } from 'framer-motion'
import { pageVariantHorizontal } from '../../utils/pageTransition'

import { useStyles } from './styles'

const Skills = () => {

  const classes = useStyles()

  const title = 'Skills & Experience'.split(' ')

  const aboutMeText = [
    'My expertise in web development lay in the front end department (client side of the web).',
    ' ',
    'HTML, CSS(SCSS), JS (React), Material UI, I am able to create interactive and responsive web designs.'
  ]

  const renderText = () => {
    return aboutMeText.map((paragraph, index) => {
      if (paragraph === ' ') {
        return (
          <div style={{ height: '25px' }} key={index} />
        )
      }
      return (
        <Typography
          className={classes.skillsText}
          key={index}
        >
          {paragraph}
        </Typography>
      )
    })
  }

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariantHorizontal}
      className={classes.Skills}
    >
      <Grid container>
        <Grid item xs={12} style={{ height: '30vh' }} />
        <Grid container item xs={12}>
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
              if (index === 0) {
                return (
                  <span className='a' key={index} style={{ marginLeft: '20px' }}>{letter}</span>
                )
              }
              if (index === 2) {
                return (
                  <span className='a' key={index} style={{ marginRight: '60px' }}>{letter}</span>
                )
              } else {
                return (
                  <span className='a' key={index} style={{ margin: '0px 20px' }}>{letter}</span>
                )
              }
            })}
          </Typography>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={1} />
          <Grid container item xs={10}>
            <Grid item md={6}>
              {renderText()}
            </Grid>
            <Grid item md={6}>
            </Grid>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default Skills