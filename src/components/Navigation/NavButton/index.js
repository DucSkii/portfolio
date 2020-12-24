import React, { useState, useEffect } from 'react'
import { Button, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useStyles } from './styles'

const NavButton = ({ children, navigation, Text, setOpen, open }) => {

  const classes = useStyles()
  const [hovered, setHovered] = useState(false)
  const [style, setStyle] = useState({})

  useEffect(() => {
    if (open === true) {
      setHovered(false)
    }
    if (hovered === true) {
      setStyle({ opacity: '1' })
    } else {
      setStyle({})
    }
  }, [hovered, open])

  const renderButton = () => {
    if (Text === 'logo') {
      return (
        <Button
          className={classes.buttons}
        >
          {children}
        </Button>
      )
    } else if (open === true) {
      return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button className={classes.buttonExpand}>
            <div
              className={classes.buttons}
            >
              {children}
            </div>
            <Typography color='primary'>{Text}</Typography>
          </Button>
        </div>
      )
    } else {
      return (
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
      )
    }
  }

  const renderExpand = () => {
    if (open === true) {
      return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button className={classes.buttonExpand}
            onClick={() => setOpen(false)}
          >
            <div
              className={classes.buttons}
            >
              {children}
            </div>
            <Typography color='primary'>{Text}</Typography>
          </Button>
        </div>
      )
    }
    return (
      <Button
        className={classes.buttons}
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setOpen(true)}
      >
        {hovered ? (
          <Typography
            className={classes.text}
            style={style}
          >
            {Text}
          </Typography>
        ) : (
            <>
              {children}
            </>
          )}
      </Button>
    )
  }

  return (
    <div className={classes.NavButton}>
      {(navigation === undefined) ? (
        renderExpand()
      ) : (
          <Link to={navigation}
            style={{ textDecoration: 'none' }}
          >
            {renderButton()}
          </Link>
        )
      }
    </div >
  )
}

export default NavButton