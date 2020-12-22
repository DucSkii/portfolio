import React, { useState, useEffect } from 'react'
import { Button, Typography } from '@material-ui/core'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setTrue } from '../../../redux/ducks/pageTransition'
import { setDrawerFalse } from '../../../redux/ducks/drawer'

import { useStyles } from './styles'

const DrawerButton = ({ children, navigation, Text }) => {

  const classes = useStyles()
  const loading = useSelector(state => state.pageTransition.loadingDisable)
  const [isLoaded, setIsLoaded] = useState(false)
  const location = useLocation()
  const dispatch = useDispatch()
  const history = useHistory()
  const [hovered, setHovered] = useState(false)
  const [style, setStyle] = useState({})

  const delayAndGo = e => {
    e.preventDefault()
    setTimeout(() => history.push(navigation), 500)
  }

  useEffect(() => {
    if (location.pathname === navigation) {
      setIsLoaded(true)
    }
    return () => {
      setIsLoaded(false)
      setHovered(false)
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
    dispatch(setTrue())
  }

  return (
    <div className={classes.DrawerButton}>
      {!loading &&
        <Link to={navigation} onClick={delayAndGo} style={{ textDecoration: 'none' }}>
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
      }
      {loading &&
        <Button className={classes.buttons}>
          {children}
        </Button>
      }
    </div>
  )
}

export default DrawerButton