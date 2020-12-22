import React, { useState, useEffect } from 'react'
import { Button, Typography } from '@material-ui/core'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setTrue } from '../../../redux/ducks/pageTransition'

import { useStyles } from './styles'

const NavButton = ({ children, navigation, Text }) => {

  const classes = useStyles()
  const loading = useSelector(state => state.pageTransition.loadingDisable)
  const [isLoaded, setIsLoaded] = useState(false)
  const location = useLocation()
  const dispatch = useDispatch()
  const history = useHistory()
  const [hovered, setHovered] = useState(false)

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
    }
  }, [location.pathname, navigation])

  const pageLoad = () => {
    if (isLoaded === true) {
      return null
    }
    dispatch(setTrue())
  }

  return (
    <div className={classes.NavButton}>
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
                  style={{
                    fontFamily: 'Roboto',
                    fontSize: '9px',
                    textAlign: 'center',
                    letterSpacing: '1px',
                    color: '#47b3ed',
                  }}
                >
                  {Text}
                </Typography>
              ) : (
                  <Typography
                    style={{
                      fontFamily: 'Roboto',
                      fontSize: '12px',
                      textAlign: 'center',
                      letterSpacing: '1px',
                      color: '#47b3ed',
                    }}
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

export default NavButton