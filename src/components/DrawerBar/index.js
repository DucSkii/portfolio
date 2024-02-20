import React, { useState } from 'react'
import { Button, Typography } from '@material-ui/core'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined'
import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import DrawerButton from './DrawerButton'
import duckLogo from '../../images/duckLogo.png'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { useStyles } from './styles'

const Drawer = () => {

  const classes = useStyles()
  const [show, setShow] = useState(false)

  const showClipboard = () => {
    if (show) {
      return null
    }
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 3000)
  }

  return (
    <div className={classes.drawerContainer}>

      <DrawerButton navigation='/' Text='logo'>
        <img src={duckLogo} alt='logo'
          style={{
            objectFit: 'contain',
            width: '100%',
            padding: '15px',
            overflow: 'hidden',
          }}
        />
      </DrawerButton>
      <div className={classes.buttonContainer}>
        <DrawerButton navigation='/' Text='Home'>
          <HomeOutlinedIcon color='secondary' fontSize='large' />
        </DrawerButton>
        <DrawerButton navigation='/about' Text='About'>
          <AccountCircleOutlinedIcon color='secondary' fontSize='large' />
        </DrawerButton>
        <DrawerButton navigation='/skills' Text='Skills'>
          <SettingsOutlinedIcon color='secondary' fontSize='large' />
        </DrawerButton>
        <DrawerButton navigation='/work' Text='Projects'>
          <VisibilityOutlinedIcon color='secondary' fontSize='large' />
        </DrawerButton>
        <DrawerButton navigation='/contact' Text='Contact'>
          <MailOutlineOutlinedIcon color='secondary' fontSize='large' />
        </DrawerButton>
      </div>
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
          <div className={classes.discordIcon}
            onClick={showClipboard}
          >
            <i className="fab fa-discord" aria-hidden="true"
              style={{ color: '#707cc3', padding: '5px 0px', fontSize: '19px', userSelect: 'none', width: '60px', display: 'flex', justifyContent: 'center' }}
            />
            <Typography color='primary' style={{ fontSize: '13px', userSelect: 'none' }}>DUCSKII</Typography>
          </div>
        </CopyToClipboard>
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
          <Typography color='primary' style={{ fontSize: '13px' }}>GITHUB</Typography>
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
          <Typography color='primary' style={{ fontSize: '13px' }}>LINKEDIN</Typography>
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
          <Typography color='primary' style={{ fontSize: '13px' }}>INSTAGRAM</Typography>
        </a>
      </div>
    </div>
  )
}

export default Drawer