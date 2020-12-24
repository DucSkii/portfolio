import React, { useState, useEffect } from 'react'
import { Button, Typography } from '@material-ui/core'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setDrawerFalse } from '../../../redux/ducks/drawer'

import { useStyles } from './styles'

const DrawerButton = ({ children, navigation, Text }) => {

  const classes = useStyles()
  const [isLoaded, setIsLoaded] = useState(false)
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    if (location.pathname === navigation) {
      setIsLoaded(true)
    }
    return () => {
      setIsLoaded(false)
    }
  }, [location.pathname, navigation])

  const pageLoad = () => {
    if (isLoaded === true) {
      dispatch(setDrawerFalse())
      return null
    }
    dispatch(setDrawerFalse())
  }

  const renderButton = () => {
    if (Text === 'logo') {
      return (
        <Button
          onClick={pageLoad}
          className={classes.buttons}
        >
          {children}
        </Button>
      )
    }
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button
          className={classes.buttons}
          onClick={pageLoad}
        >
          {children}
        </Button>
        <Typography color='primary' onClick={pageLoad}>{Text}</Typography>
      </div>
    )
  }

  return (
    <div className={classes.DrawerButton}>
      <Link to={navigation} style={{ textDecoration: 'none' }}>
        {renderButton()}
      </Link>
    </div>
  )
}

export default DrawerButton