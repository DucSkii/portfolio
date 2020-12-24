import React, { useState, useEffect } from 'react'
import { Button, IconButton } from '@material-ui/core'
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

import { useStyles } from './styles'

const Navigation = () => {

  const classes = useStyles()
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [style, setStyle] = useState({})

  useEffect(() => {
    if (open === true) {
      setStyle({ width: '140px' })
    } else {
      setStyle({})
    }
  }, [open])

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
          <NavButton navigation='/' Text='logo'>
            <img src={duckLogo} alt='logo'
              style={{
                objectFit: 'contain',
                width: '100%',
                padding: '15px',
              }}
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
        <div className={classes.socials}>
          <a href='https://github.com/DucSkii'>
            <Button className={classes.buttonSocials}>
              <GitHubIcon color='primary' fontSize='small' />
            </Button>
          </a>
          <a href='https://www.linkedin.com/in/ducviet-dao-898457202/'>
            <Button className={classes.buttonSocials}>
              <LinkedInIcon color='primary' fontSize='small' />
            </Button>
          </a>
          <a href='https://www.instagram.com/ducskii/'>
            <Button className={classes.buttonSocials} style={{ marginBottom: '30px' }}>
              <InstagramIcon color='primary' fontSize='small' />
            </Button>
          </a>
        </div>
      </div>
    </>
  )
}

export default Navigation