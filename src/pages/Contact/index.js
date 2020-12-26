import React, { useState, useEffect } from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { motion } from 'framer-motion'
import { pageVariantHorizontal } from '../../utils/pageTransition'
import Form from '../../components/Form'
import ReactMapGl, { Marker } from 'react-map-gl'
import RoomIcon from '@material-ui/icons/Room'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { useStyles } from './styles'

const Contact = () => {

  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [mapStyle, setMapStyle] = useState({})
  const [buttonStyle, setButtonStyle] = useState({})
  const [emailPopupStyle, setEmailPopupStyle] = useState({})
  const [loaded, setLoaded] = useState(false)
  const mediumScreen = useMediaQuery(theme => theme.breakpoints.up('md'))
  const [viewport, setViewport] = useState({})

  useEffect(() => {
    if (open === true) {
      setMapStyle({ position: 'fixed' })
      setButtonStyle({ display: 'none' })
    } else {
      setMapStyle({})
      setButtonStyle({})
    }
  }, [open])

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 1000)
  }, [])

  useEffect(() => {
    if (mediumScreen === true) {
      setViewport({
        latitude: 51.45426846731866,
        longitude: 0.07270684547610262,
        zoom: 11,
        width: '60vw',
        height: '100vh',
      })
    } else {
      setViewport({
        latitude: 51.45426846731866,
        longitude: 0.07270684547610262,
        zoom: 11,
        width: '100%',
        height: '100vh',
      })
    }
  }, [mediumScreen])

  const showEmailPopup = () => {
    setEmailPopupStyle({ opacity: '1' })
    setTimeout(() => {
      setEmailPopupStyle({})
    }, 3000)
  }

  const title = 'Contact me'.split('')

  const contactInfo = [
    'Ducviet Dao,',
    'London,',
    '07990877427,',
  ]

  const renderMap = () => {
    if (loaded === false) {
      return (
        <div className={classes.loading}>
          <Typography>Loading...</Typography>
        </div>
      )
    }
    return (
      <>
        <div className={classes.mapButtonContainer}
          style={buttonStyle}
        >
          <Button
            variant='contained'
            color='secondary'
            onClick={() => setOpen(true)}
            className={classes.mapButton}
          >
            <ExpandLessIcon />
          </Button>
        </div>
        {open ? (
          <Button
            variant='contained'
            color='secondary'
            onClick={() => setOpen(false)}
            className={classes.mapButtonClose}
          >
            <ExpandMoreIcon />
          </Button>
        ) : (
            <div></div>
          )}
        <ReactMapGl
          {...viewport}
          mapboxApiAccessToken="pk.eyJ1IjoiZHVjc2tpaSIsImEiOiJja2o0ZWUybG8ya3BrMnVueHh1eG45YWFkIn0.CvaMljSrY7bN1tifU0DU7Q"
          onViewportChange={viewport => setViewport(viewport)}
          mapStyle="mapbox://styles/ducskii/ckj4erzd2ch0f19rpqivek237"
        >
          <Marker
            latitude={51.4624692}
            longitude={0.0351483}
          >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <RoomIcon fontSize='large' />
              <div
                style={{
                  width: '180px',
                  height: '100px',
                  borderRadius: '10px',
                  backgroundColor: '#000000',
                  padding: '10px',
                }}
              >
                {contactInfo.map((info, index) => {
                  return (
                    <Typography key={index}
                      style={{
                        fontFamily: 'Roboto',
                        color: '#ffffff',
                        fontWeight: 'bold',
                      }}
                    >
                      {info}
                    </Typography>
                  )
                })}
                <Typography
                  style={{
                    fontFamily: 'Roboto',
                    color: '#8dd0f4',
                    fontWeight: 'bold',
                  }}
                >
                  @: ducvietdao@live.co.uk
            </Typography>
              </div>
            </div>
          </Marker>
        </ReactMapGl>
      </>
    )
  }

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariantHorizontal}
      className={classes.Contact}
    >
      <div aria-hidden="true" className={classes.emailPopupRight} style={emailPopupStyle}>
        <Typography style={{ color: '#ffffff' }}>Email Sent</Typography>
      </div>
      <div aria-hidden="true" className={classes.emailPopupLeft} style={emailPopupStyle}>
        <Typography style={{ color: '#ffffff' }}>Email Sent</Typography>
      </div>
      <Grid container style={{ height: '100vh' }}>
        <Grid container item md={5} xs={12} className={classes.contactInfo}>
          <Grid container item md={12} className={classes.marginLeftWrapper}>
            <Grid item xs={12} />
            <Grid container item xs={12} className={classes.marginLeftContainer}>
              <Grid item xs={1} />
              <Grid container item xs={10} className={classes.title}>
                <Typography
                  variant='h2'
                  color='primary'
                  className={classes.letters}
                  style={{
                    cursor: 'default',
                    userSelect: 'none',
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
              <Grid item xs={1} />
              <Grid container item xs={12}>
                <Grid item xs={1} />
                <Grid container item xs={10} style={{ flexDirection: 'column' }}>
                  <Typography className={classes.description}>
                    If you have any requests or questions, don't hesitate to contact me using the form!
                  </Typography>
                  <Typography className={classes.description}>
                    Alternatively, you can get through to me via mobile.
                  </Typography>
                  <Grid item xs={1} />
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={1} />
              <Grid container item xs={10}>
                <Grid item xs={12}>
                  <Form showEmailPopup={showEmailPopup} />
                </Grid>
              </Grid>
              <Grid item xs={1} />
            </Grid>
          </Grid>
        </Grid>
        <Grid container item md={7} xs={12} className={classes.map} style={mapStyle}>
          {renderMap()}
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default Contact