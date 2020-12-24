import { Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'

import { useStyles } from './styles'

const SkillIcons = ({ icon, title }) => {

  const classes = useStyles()
  const [hovered, setHovered] = useState(false)
  const [style, setStyle] = useState({})

  useEffect(() => {
    if (hovered === true) {
      setStyle({ transform: 'scale(1.2)' })
    } else {
      setStyle({})
    }
  }, [hovered])

  return (
    <div
      className={classes.skillIconsContainer}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={classes.SkillIcons}
      >
        <img src={icon} alt='icon'
          style={{
            objectFit: 'contain',
            width: '70%',
          }}
        />
      </div>
      <Typography color='primary' className={classes.title}>{title}</Typography>
    </div>
  )
}

export default SkillIcons