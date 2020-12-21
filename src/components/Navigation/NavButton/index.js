import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setTrue } from '../../../redux/ducks/pageTransition'

import { useStyles } from './styles'

const NavButton = ({ children, navigation }) => {

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
      return null
    }
    dispatch(setTrue())
  }

  return (
    <div className={classes.NavButton}>
      <Link to={navigation}>
        <Button className={classes.buttons} onClick={pageLoad}>
          {children}
        </Button>
      </Link>
    </div>
  )
}

export default NavButton