import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import './style.css'

const containerStyle = { position: 'relative', width: '100%', height: '60vh' }

export class MapContainer extends Component {

  onClick = (target, map, coord) => {
    let lat = coord.latLng.lat()
    let lng = coord.latLng.lng()
    //console.log(target, map, coord)

    this.props.setNewCoords(lat, lng)
  }

  render () {
    const { lat, lng } = this.props
    return (
      <Map
        google={this.props.google}
        zoom={2}
        containerStyle={containerStyle}
        onClick={this.onClick}
        initialCenter={{
          lat: 41.69452881805707,
          lng: -8.846923664502128
        }}
      >
        <Marker
          position={{ lat: lat, lng: lng }}
        />
      </Map>
    )
  }
}

const LoadingContainer = (props) => (
  <div>Map is loading...</div>
)

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCFmio79TncN-TlcoFdOX1K8WPxIQHUwxw',
  LoadingContainer: LoadingContainer
})(MapContainer)
