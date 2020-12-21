import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setTrue } from '../../../redux/ducks/pageTransition'

import { useStyles } from './styles'

const NavButton = ({ children, navigation }) => {

  const classes = useStyles()
  const loading = useSelector(state => state.pageTransition.loadingDisable)
  const [isLoaded, setIsLoaded] = useState(false)
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = () => {
      if (location.pathname === navigation) {
        setIsLoaded(true)
      }
    }
    unsubscribe()
    return () => {
      unsubscribe()
      setIsLoaded(false)
    }
  }, [location.pathname, navigation])

  const pageLoad = () => {
    console.log('location.pathname', location.pathname)
    if (isLoaded === true) {
      return null
    }
    dispatch(setTrue())
  }

  return (
    <div className={classes.NavButton}>
      {!loading &&
        <Link to={navigation}>
          <Button className={classes.buttons} onClick={pageLoad}>
            {children}
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