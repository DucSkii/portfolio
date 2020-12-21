import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useStyles } from './styles'

const Work = () => {

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
    <div className={classes.Work} style={style}>
      Work page
    </div>
  )
}

export default Work