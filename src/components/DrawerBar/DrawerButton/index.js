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
          className={classes.buttonExpand}
          style={{ justifyContent: 'center' }}
        >
          <div className={classes.buttons}>
            {children}
          </div>
        </Button>
      )
    }
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button
          className={classes.buttonExpand}
          onClick={pageLoad}
        >
          <div className={classes.buttons}>
            {children}
          </div>
          <Typography color='primary'>{Text}</Typography>
        </Button>
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