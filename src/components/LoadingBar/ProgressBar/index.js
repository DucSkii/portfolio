import React, { useState, useEffect } from 'react'

import { useStyles } from './styles'

const ProgressBar = ({ wait }) => {

  const classes = useStyles()
  const [show, setShow] = useState(false)
  const [style, setStyle] = useState({})

  const showBar = () => {
    setShow(true)
    setTimeout(() => {
      const newStyle = {
        width: '300px',
      }

      setStyle(newStyle)
      setTimeout(() => {
        setStyle({})
      }, 2000)
    }, 500)
  }

  useEffect(() => {
    const unsubscribe = () => {
      setTimeout(() => {
        showBar()
      }, wait)
    }
    unsubscribe()
    return () => {
      unsubscribe()
    }
  }, [wait])

  return (
    show &&
    <div className={classes.ProgressBar} style={style} />
  )
}

export default ProgressBar