import React, { useState, useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { useStyles } from './styles'

const About = () => {

  const classes = useStyles()
  const loading = useSelector(state => state.pageTransition.loadingDisable)
  const [style, setStyle] = useState({})

  const title = 'About me'.split('')

  useEffect(() => {
    if (loading === true) {
      setStyle({ opacity: '0' })
    } else {
      setStyle({ opacity: '1' })
    }
    return () => {
    }
  }, [loading])

  return (
    <div className={classes.About} style={style}>
      <Grid container>
        <Grid item xs={12} style={{ height: '30vh' }} />
        <Grid container item xs={12}>
          <Typography
            variant='h2'
            color='primary'
            style={{
              cursor: 'default',
              userSelect: 'none',
              marginLeft: '7.5%',
              fontSize: '80px',
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