import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useStyles } from './styles'

const Contact = () => {

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
    <div className={classes.Contact} style={style}>
      Contact page
    </div>
  )
}

export default Contact