import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Grid } from '@material-ui/core'
import { setFalse, disableFalse, disableTrue } from '../../redux/ducks/pageTransition'
import duckLogo from '../../images/duckLogo.png'
import LoadingBar from '../LoadingBar'

import { useStyles } from './styles'

const PageLoad = () => {

  const classes = useStyles()
  const loading = useSelector(state => state.pageTransition.pageLoading)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [style, setStyle] = useState({})

  const loadPage = () => {
    dispatch(disableTrue())
    setIsLoading(true)
    setTimeout(() => {
      setStyle({
        left: '0',
      })
    }, 50)
    setTimeout(() => {
      setStyle({
        transform: 'translateX(100%)',
        left: '100',
      })
      setTimeout(() => {
        setStyle({})
        dispatch(disableFalse())
        setIsLoading(false)
      }, 800)
    }, 2000)
  }

  useEffect(() => {
    const unsubscribe = () => {
      if (loading === true) {
        loadPage()
        dispatch(setFalse())
      }
      return null
    }
    unsubscribe()
    return () => {
      unsubscribe()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  return (
    isLoading &&
    <div className={classes.PageLoading} style={style}>
      <Grid container>
        <Grid item xs={12} style={{ height: '35vh' }} />
        <Grid container item xs={12} style={{ justifyContent: 'center' }}>
          <img src={duckLogo} alt='Logo'
            style={{
              objectFit: 'contain',
              maxWidth: '80px',
              userSelect: 'none',
            }}
          />
        </Grid>
        <Grid item xs={12} style={{ height: '3vh' }} />
        <Grid container item xs={12} style={{ justifyContent: 'center' }}>
          <LoadingBar />
        </Grid>
      </Grid>
    </div>
  )
}

export default PageLoad