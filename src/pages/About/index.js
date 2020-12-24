import React, { useState } from 'react'
import { Grid, Typography, Modal } from '@material-ui/core'
import { motion } from 'framer-motion'
import { pageVariantHorizontal } from '../../utils/pageTransition'
import timeline from '../../images/timeline.png'
import timelineVertical from '../../images/timeline-vertical.png'

import { useStyles } from './styles'

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    width: '80%',
    outline: '0',
    border: '0',
  }
}

const About = () => {

  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false)

  const title = 'About me'.split('')

  const aboutMeText = [
    'Went from the graphics designing industry to moving into web development with now over a year of experience.',
    ' ',
    'Highly motivated individual who is naturally analytically minded with a keen eye for detail. Fan of Boxing, Basketball, eSports and Animation.',
    ' ',
    'Since moving into web development I was quickly drawn into the frontend side of production. The idea of being able to implement some artistic skills was what got me started.',
    ' ',
    'Always looking forward to working on ambitious projects with positive people.',
  ]

  const renderText = () => {
    return aboutMeText.map((paragraph, index) => {
      if (paragraph === ' ') {
        return (
          <div style={{ height: '25px' }} key={index} />
        )
      }
      return (
        <Typography
          key={index}
          className={classes.aboutMeText}
        >
          {paragraph}
        </Typography>
      )
    })
  }

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariantHorizontal}
      className={classes.About}
    >
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.modal}>
          <img src={timelineVertical} alt='timeline'
            className={classes.modalImageSmall}
          />
          <img src={timeline} alt='timeline'
            className={classes.modalImageLarge}
          />
        </div>
      </Modal>
      <Grid container>
        <Grid item xs={12} className={classes.titleHeight} />
        <Grid container item xs={12}>
          <Typography
            variant='h2'
            color='primary'
            className={classes.letters}
            style={{
              cursor: 'default',
              userSelect: 'none',
              marginLeft: '7.5%',
            }}
          >
            {title.map((letter, index) => {
              if (letter === ' ') {
                return ' '
              }
              if (index === 0) {
                return (
                  <span className='a' key={index} style={{ marginLeft: '5px' }}>{letter}</span>
                )
              }
              return (
                <span className='a' key={index}>{letter}</span>
              )
            })}
          </Typography>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={1} />
          <Grid container item xs={10}>
            <Grid item xs={12} md={6}>
              {renderText()}
            </Grid>
            <Grid container item xs={12} md={6}
              style={{ alignItems: 'center', flexDirection: 'column' }}
            >
              <Typography
                variant='h5'
                className={classes.timeline}
                style={{
                  fontFamily: 'Roboto',
                  letterSpacing: '2px',
                  textAlign: 'center',
                  fontSize: '20px',
                }}
              >
                TIMELINE
            </Typography>
              <Typography
                variant='h5'
                className={classes.timelineExtra}
                style={{
                  fontFamily: 'Roboto',
                  letterSpacing: '2px',
                  textAlign: 'center',
                  marginBottom: '5px',
                  fontSize: '12px',
                }}
              >
                CLICK TO EXPAND
            </Typography>
              <img src={timeline} alt='timeline'
                className={classes.timelineExtra}
                onClick={() => setOpen(true)}
                style={{
                  objectFit: 'contain',
                  width: '100%',
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default About