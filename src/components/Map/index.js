import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const LeafletMap = () => {

  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh'}}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
}

export default LeafletMap