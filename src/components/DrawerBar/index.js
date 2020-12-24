import React from 'react'
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

import { useStyles } from './styles'

const Drawer = () => {

  const classes = useStyles()

  return (
    <div className={classes.drawerContainer}>

      <DrawerButton navigation='/' Text='logo'>
        <img src={duckLogo} alt='logo'
          style={{
            objectFit: 'contain',
            width: '100%',
            padding: '15px',
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
        <a href='https://github.com/DucSkii'
          style={{
            display: 'flex',
            textDecoration: 'none',
            alignItems: 'center',
          }}
        >
          <Button className={classes.buttonSocials}>
            <GitHubIcon color='primary' fontSize='small' />
          </Button>
          <Typography color='primary' style={{ fontSize: '13px' }}>GitHub</Typography>
        </a>
        <a href='https://www.linkedin.com/in/ducviet-dao-898457202/'
          style={{
            display: 'flex',
            textDecoration: 'none',
            alignItems: 'center',
          }}
        >
          <Button className={classes.buttonSocials}>
            <LinkedInIcon color='primary' fontSize='small' />
          </Button>
          <Typography color='primary' style={{ fontSize: '13px' }}>LinkedIn</Typography>
        </a>
        <a href='https://www.instagram.com/ducskii/'
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
          <Typography color='primary' style={{ fontSize: '13px' }}>Instagram</Typography>
        </a>
      </div>
    </div>
  )
}

export default Drawer