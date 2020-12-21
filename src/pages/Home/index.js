import React, { useState, useEffect } from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import duckAnimation from '../../video/duck-animation.gif'
import { useSelector, useDispatch } from 'react-redux'
import { setTrue } from '../../redux/ducks/pageTransition'

import { useStyles } from './styles'
import './index.css'

const Home = () => {

  const loading = useSelector(state => state.pageTransition.loadingDisable)
  const [style, setStyle] = useState({})
  const dispatch = useDispatch()
  const classes = useStyles()

  const history = useHistory()
  const delayAndGo = e => {
    e.preventDefault()
    setTimeout(() => history.push('/contact'), 500)
  }

  useEffect(() => {
    if (loading === true) {
      setStyle({ opacity: '0' })
    } else {
      setStyle({ opacity: '1' })
    }
    return () => {
    }
  }, [loading])

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
              style={{
                color: '#ffffff',
                cursor: 'default',
                userSelect: 'none',
                marginLeft: '8%',
              }}
            >
              {titleArray.map((letter, index) => {
                if (letter === ' ') {
                  return ' '
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
    <div className={classes.Home} style={style}>
      <img src={duckAnimation} alt='Animated gif'
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '-100',
          userSelect: 'none',
        }}
      />
      <Grid container>
        <Grid item xs={12} style={{ height: '20vh' }} />
        {renderTitle()}
        <Grid container item xs={12}>
          <Grid item xs={1} />
          <Grid container item xs={11}>
            <Typography variant='h5'
              aria-hidden="true"
              style={{
                fontFamily: 'Roboto',
                marginTop: '10px',
                cursor: 'default',
                color: '#707cc3',
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
            {!loading &&
              <Link
                to='/contact'
                onClick={delayAndGo}
                style={{ textDecoration: 'none' }}
              >
                <Button variant='outlined' color='primary' style={{ color: '#707cc3' }} onClick={() => dispatch(setTrue())}>
                  <Typography variant='h6' style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>
                    Contact me!
                  </Typography>
                </Button>
              </Link>}
            {loading &&
              <Button variant='outlined' color='primary' style={{ color: '#707cc3' }}>
                <Typography variant='h6' style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>
                  Contact me!
              </Typography>
              </Button>}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home