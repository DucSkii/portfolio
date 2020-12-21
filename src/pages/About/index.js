import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useStyles } from './styles'

const About = () => {

  const classes = useStyles()
  const loading = useSelector(state => state.pageTransition.loadingDisable)
  const [style, setStyle] = useState({})

  useEffect(() => {
    if (loading === true) {
      setStyle({ opacity: '0' })
    } else {
      setStyle({ opacity: '1' })
    }
    return () => {
    }
  }, [loading])

  return (
    <div className={classes.About} style={style}>
      About page
    </div>
  )
}

export default About