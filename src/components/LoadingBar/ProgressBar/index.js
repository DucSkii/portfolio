import React, { useState, useEffect } from 'react'

import { useStyles } from './styles'

const ProgressBar = ({ wait }) => {

  const classes = useStyles()
  const [show, setShow] = useState(false)
  const [style, setStyle] = useState({})

  const showBar = () => {
    setShow(true)
    setTimeout(() => {
      setStyle({ width: '300px' })
    }, 500)
  }

  useEffect(() => {
    setTimeout(() => {
      showBar()
    }, wait)
    return () => {
    }
  }, [wait])

  return (
    show &&
    <div className={classes.ProgressBar} style={style} />
  )
}

export default ProgressBar