import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import duckAnimation from '../../video/duck-animation.gif'
import { useSelector } from 'react-redux'

import { useStyles } from './styles'

const Home = () => {

  const loading = useSelector(state => state.pageTransition.loadingDisable)
  const classes = useStyles()

  console.log('loading', loading)

  return (
    <div className={classes.Home}>
      <img src={duckAnimation} alt='Animated gif'
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '-100',
        }}
      />
      <Grid container>
        <Grid item xs={12} style={{ height: '20vh' }} />
        <Grid container item xs={12}>
          <Grid item xs={1} />
          <Grid container item xs={11}>
            <Typography variant='h1' style={{ color: '#ffffff', cursor: 'default' }}>
              Hi,
          </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={1} />
          <Grid container item xs={11}>
            <Typography variant='h1' style={{ color: '#ffffff', cursor: 'default' }}>
              I'm Duc,
          </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={1} />
          <Grid container item xs={11}>
            <Typography variant='h1' style={{ color: '#ffffff', cursor: 'default' }}>
              web developer.
          </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={1} />
          <Grid container item xs={11}>
            <Typography variant='h5' color='primary' style={{ fontFamily: 'Roboto', marginTop: '10px', cursor: 'default' }}>
              Front End Developer / React Developer
          </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ height: '5vh' }} />
        <Grid container item xs={12}>
          <Grid item xs={1} />
          <Grid container item xs={11}>
            <Link to='/contact' style={{ textDecoration: 'none' }}>
              <Button variant='outlined' color='primary'>
                <Typography variant='h6' style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>
                  Contact me!
              </Typography>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home