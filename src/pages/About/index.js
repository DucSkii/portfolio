import React, { useState, useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'

import { useStyles } from './styles'

const About = () => {

  const classes = useStyles()
  
  const title = 'About me'.split('')

  return (
    <div className={classes.About}>
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
      <Grid container item xs={12}>

      </Grid>
    </div>
  )
}

export default About