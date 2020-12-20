import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { useStyles } from './styles'

const Home = () => {

  const classes = useStyles()

  return (
    <div className={classes.Home}>
      <Grid container>
        <Grid item xs={12} style={{ height: '20vh' }} />
        <Grid container item xs={12}>
          <Grid item xs={1} />
          <Grid container item xs={11}>
            <Typography variant='h1' style={{ color: '#ffffff' }}>
              Hi,
          </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={1} />
          <Grid container item xs={11}>
            <Typography variant='h1' style={{ color: '#ffffff' }}>
              I'm Duc,
          </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={1} />
          <Grid container item xs={11}>
            <Typography variant='h1' style={{ color: '#ffffff' }}>
              web developer.
          </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={1} />
          <Grid container item xs={11}>
            <Typography variant='h5' color='primary' style={{ fontFamily: 'Roboto', marginTop: '10px' }}>
              Front End Developer / React Developer
          </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home