import React, { useState, useEffect } from 'react'
import { Button, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useStyles } from './styles'

const NavButton = ({ children, navigation, Text }) => {

  const classes = useStyles()
  const [hovered, setHovered] = useState(false)
  const [style, setStyle] = useState({})

  useEffect(() => {
    if (hovered === true) {
      setStyle({ opacity: '1' })
    } else {
      setStyle({})
    }
  }, [hovered])

  return (
    <div className={classes.NavButton}>
      <Link to={navigation}
        transition='slide-left'
        style={{ textDecoration: 'none' }}
      >
        <Button
          className={classes.buttons}
          onMouseOver={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {hovered ? (
            (Text === 'Projects' || Text === 'Contact') ? (
              <Typography
                className={classes.textSmall}
                style={style}
              >
                {Text}
              </Typography>
            ) : (
                <Typography
                  className={classes.text}
                  style={style}
                >
                  {Text}
                </Typography>
              )
          ) : (
              <>
                {children}
              </>
            )}
        </Button>
      </Link>
    </div>
  )
}

export default NavButton