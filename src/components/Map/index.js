import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

import { useStyles } from './styles'

const LeafletMap = ({ open, setOpen }) => {

  const classes = useStyles()
  const [mapStyle, setMapStyle] = useState({})

  useEffect(() => {
    if (open === true) {
      setMapStyle({ position: 'fixed' })
    } else {
      setMapStyle({})
    }
  }, [open])

  const contactInfo = [
    'Ducviet Dao',
    'London',
    '07990877427',
    '@: ducvietdao@live.co.uk'
  ]

  return (
    <div className={classes.mapContainer} style={mapStyle}>
      <div className={classes.mapButtonContainer}
      >
        {open ? (
          <Button
            variant='contained'
            color='secondary'
            onClick={() => setOpen(false)}
            className={classes.mapButton}
          >
            <ExpandMoreIcon />
          </Button>
        ) : (
            <Button
              variant='contained'
              color='secondary'
              onClick={() => setOpen(true)}
              className={classes.mapButton}
            >
              <ExpandLessIcon />
            </Button>
          )}
      </div>
      <MapContainer center={[51.4624692, 0.0351483]} zoom={11} style={{ height: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.4624692, 0.0351483]}>
          <Popup>
            {contactInfo.map((info, index) => {
              return (
                <p key={index}>{info}</p>
              )
            })}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default LeafletMap