import React, { useState, useEffect } from 'react'
import duckAnimation from '../../video/duck-animation-duck.gif'
import { useLocation } from 'react-router-dom'

import { useStyles } from './styles'

const DuckAnimation = () => {

  const classes = useStyles()
  const location = useLocation()
  const [style, setStyle] = useState({})

  useEffect(() => {
    if (location.pathname === '/') {
      setStyle({ opacity: '1' })
    } else {
      setStyle({})
    }
  }, [location.pathname])

  return (
    <img src={duckAnimation} alt='Animated gif'
      aria-hidden="true"
      className={classes.duckAnimation}
      style={style}
    />
  )
}

export default DuckAnimation