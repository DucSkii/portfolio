import React from 'react'
import ProgressBar from './ProgressBar'

import { useStyles } from './styles'

const LoadingBar = () => {

  const classes = useStyles()

  return (
    <div className={classes.LoadingBar}>
      <ProgressBar wait={500} />
    </div>
  )
}

export default LoadingBar