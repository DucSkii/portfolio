import React from 'react'
import { Button } from '@material-ui/core'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined'
import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'
import { Link } from 'react-router-dom'

import { useStyles } from './styles'

const Navigation = () => {

  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div style={{ height: '90px' }} />
      <div className={classes.buttonContainer}>
        <Link to='/'>
          <Button className={classes.buttons}>
            <HomeOutlinedIcon color='secondary' fontSize='large' />
          </Button>
        </Link>
        <Link to='/about'>
          <Button className={classes.buttons}>
            <AccountCircleOutlinedIcon color='secondary' fontSize='large' />
          </Button>
        </Link>
        <Link to='/skills'>
          <Button className={classes.buttons}>
            <SettingsOutlinedIcon color='secondary' fontSize='large' />
          </Button>
        </Link>
        <Link to='/work'>
          <Button className={classes.buttons}>
            <VisibilityOutlinedIcon color='secondary' fontSize='large' />
          </Button>
        </Link>
        <Link to='/contact'>
          <Button className={classes.buttons}>
            <MailOutlineOutlinedIcon color='secondary' fontSize='large' />
          </Button>
        </Link>
      </div>
      <div className={classes.socials}>
        <a href='https://github.com/DucSkii'>
          <Button className={classes.buttonSocials}>
            <GitHubIcon color='primary' fontSize='small' />
          </Button>
        </a>
        <a href='https://www.instagram.com/ducskii/'>
          <Button className={classes.buttonSocials} style={{ marginBottom: '30px' }}>
            <InstagramIcon color='primary' fontSize='small' />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Navigation