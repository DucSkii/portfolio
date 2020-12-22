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
  const [hovered, setHovered] = useState(false)
  const [style, setStyle] = useState({})

  useEffect(() => {
    if (location.pathname === navigation) {
      setIsLoaded(true)
    }
    return () => {
      setIsLoaded(false)
    }
  }, [location.pathname, navigation])


  useEffect(() => {
    if (hovered === true) {
      setStyle({ opacity: '1' })
    } else {
      setStyle({})
    }
  }, [hovered])

  const pageLoad = () => {
    if (isLoaded === true) {
      dispatch(setDrawerFalse())
      return null
    }
    dispatch(setDrawerFalse())
  }

  return (
    <div className={classes.DrawerButton}>
      <Link to={navigation} style={{ textDecoration: 'none' }}>
        <Button
          className={classes.buttons}
          onClick={pageLoad}
          onMouseOver={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {hovered ? (
            (Text === 'Projects' || Text === 'Contact') ? (
              <Typography
                className={classes.textSmall}
                style={style}
              >
                {Text}
              </Typography>
            ) : (
                <Typography
                  className={classes.text}
                  style={style}
                >
                  {Text}
                </Typography>
              )
          ) : (
              <>
                {children}
              </>
            )}
        </Button>
      </Link>
    </div>
  )
}

export default DrawerButton