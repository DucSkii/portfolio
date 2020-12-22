import React, { useState, useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { useStyles } from './styles'

const Skills = () => {

  const classes = useStyles()
  const loading = useSelector(state => state.pageTransition.loadingDisable)
  const [style, setStyle] = useState({})

  useEffect(() => {
    if (loading === true) {
      setStyle({ opacity: '0' })
    } else {
      setStyle({ opacity: '1' })
    }
    return () => {
    }
  }, [loading])

  const title = 'Skills & Experience'.split(' ')

  return (
    <div className={classes.Skills} style={style}>
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
      </Grid>
    </div>
  )
}

export default Skills