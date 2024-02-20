import React, { useState, useEffect } from 'react'
import { Button, IconButton, Typography } from '@material-ui/core'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import NavButton from './NavButton'
import { useDispatch } from 'react-redux'
import { setDrawerTrue } from '../../redux/ducks/drawer'
import duckLogo from '../../images/duckLogo.png'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { useStyles } from './styles'

const Navigation = () => {

  const classes = useStyles()
  const dispatch = useDispatch()
  const [open, setOpen] = useState(true)
  const [style, setStyle] = useState({})
  const [hovered, setHovered] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (open === false) {
      setStyle({ width: '60px', minWidth: '60px' })
      setShow(false)
    } else {
      setStyle({})
    }
  }, [open])

  const showClipboard = () => {
    if (show) {
      return null
    }
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 3000)
  }

  const renderSocials = () => {
    if (open === true) {
      return (
        <div className={classes.socials}>
          <div
            className={show ? classes.opacityShow : classes.opacityNone}
            style={{
              display: 'flex',
              position: 'fixed',
              width: '155px',
              justifyContent: 'center',
              bottom: '160px',
              transition: 'all 0.5s',
            }}
          >
            <Typography color='primary' style={{ fontSize: '13px', userSelect: 'none' }}>Copied to clipboard</Typography>
          </div>
          <CopyToClipboard text='ducskii'>
            <div className={hovered ? classes.discordIconHovered : classes.discordIcon}
              onMouseOver={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{ cursor: 'pointer' }}
              onClick={showClipboard}
            >
              <i className="fab fa-discord" aria-hidden="true"
                style={{ color: '#707cc3', padding: '5px 0px', fontSize: '19px', userSelect: 'none', width: '60px', display: 'flex', justifyContent: 'center', minWidth: '60px' }}
              />
              <Typography color='primary' style={{ fontSize: '13px', userSelect: 'none' }}>DUCSKII</Typography>
            </div>
          </CopyToClipboard>
          <a href='https://github.com/DucSkii' target="_blank" rel="noopener noreferrer"
          >
            <Button className={classes.buttonSocialsExpanded}>
              <div className={classes.buttonSocials}>
                <GitHubIcon color='primary' fontSize='small' />
              </div>
              <Typography color='primary' style={{ fontSize: '13px' }}>GitHub</Typography>
            </Button>
          </a>
          <a href='https://www.linkedin.com/in/ducviet-dao-898457202/' target="_blank" rel="noopener noreferrer"
          >
            <Button className={classes.buttonSocialsExpanded}>
              <div className={classes.buttonSocials}>
                <LinkedInIcon color='primary' fontSize='small' />
              </div>
              <Typography color='primary' style={{ fontSize: '13px' }}>LinkedIn</Typography>
            </Button>
          </a>
          <a href='https://www.instagram.com/ducskii/' target="_blank" rel="noopener noreferrer"
          >
            <Button className={classes.buttonSocialsExpanded} >
              <div className={classes.buttonSocials}>
                <InstagramIcon color='primary' fontSize='small' />
              </div>
              <Typography color='primary' style={{ fontSize: '13px' }}>Instagram</Typography>
            </Button>
          </a>
        </div>
      )
    }

    return (
      <div className={classes.socials}>
        <Button className={classes.buttonSocials} onClick={() => setOpen(true)}>
          <i className="fab fa-discord" aria-hidden="true"
            style={{ color: '#707cc3', padding: '5px 0px', fontSize: '19px', userSelect: 'none', width: '60px', display: 'flex', justifyContent: 'center' }}
          />
        </Button>
        <a href='https://github.com/DucSkii' target="_blank" rel="noopener noreferrer"
          style={{
            display: 'flex',
            textDecoration: 'none',
            alignItems: 'center',
          }}
        >
          <Button className={classes.buttonSocials}>
            <GitHubIcon color='primary' fontSize='small' />
          </Button>
        </a>
        <a href='https://www.linkedin.com/in/ducviet-dao-898457202/' target="_blank" rel="noopener noreferrer"
          style={{
            display: 'flex',
            textDecoration: 'none',
            alignItems: 'center',
          }}
        >
          <Button className={classes.buttonSocials}>
            <LinkedInIcon color='primary' fontSize='small' />
          </Button>
        </a>
        <a href='https://www.instagram.com/ducskii/' target="_blank" rel="noopener noreferrer"
          style={{
            display: 'flex',
            textDecoration: 'none',
            alignItems: 'center',
            marginBottom: '30px',
          }}
        >
          <Button className={classes.buttonSocials} >
            <InstagramIcon color='primary' fontSize='small' />
          </Button>
        </a>
      </div>
    )
  }

  return (
    <>
      <div className={classes.burgerMenuContainer}>
        <IconButton className={classes.burgerMenu}
          onClick={() => dispatch(setDrawerTrue())}
        >
          <MenuIcon />
        </IconButton>
      </div>
      <div className={classes.container} style={style}>
        <div>
          <NavButton navigation='/' Text='logo' open={open}>
            <img
              src={duckLogo}
              alt='logo'
              style={{
                objectFit: 'contain',
                width: '100%',
                padding: '15px',
                overflow: 'hidden',
              }}
              draggable='false'
            />
          </NavButton>
          {open ? (
            <NavButton Text='Close' setOpen={setOpen} open={open}>
              <ChevronLeftIcon color='secondary' fontSize='large' />
            </NavButton>
          ) : (
            <NavButton Text='Expand' setOpen={setOpen} open={open}>
              <ChevronRightIcon color='secondary' fontSize='large' />
            </NavButton>
          )}
        </div>
        <div className={classes.buttonContainer}>
          <NavButton navigation='/' Text='Home' open={open}>
            <HomeOutlinedIcon color='secondary' fontSize='large' />
          </NavButton>
          <NavButton navigation='/about' Text='About' open={open}>
            <AccountCircleOutlinedIcon color='secondary' fontSize='large' />
          </NavButton>
          <NavButton navigation='/skills' Text='Skills' open={open}>
            <SettingsOutlinedIcon color='secondary' fontSize='large' />
          </NavButton>
          <NavButton navigation='/work' Text='Projects' open={open}>
            <VisibilityOutlinedIcon color='secondary' fontSize='large' />
          </NavButton>
          <NavButton navigation='/contact' Text='Contact' open={open}>
            <MailOutlineOutlinedIcon color='secondary' fontSize='large' />
          </NavButton>
        </div>
        {renderSocials()}
      </div>
    </>
  )
}

export default Navigation