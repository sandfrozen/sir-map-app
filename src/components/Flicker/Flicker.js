import React, { Component } from 'react'

import LinearBuffer from '../LinearBuffer'
import Photo from './Photo'

import './style.css'

class Flicker extends Component {

  render () {
    const { photos, fetchingPhotos } = this.props
    if (fetchingPhotos === true) {
      return (
        <div>
          <div>Downloading photos...</div>
          <LinearBuffer />
        </div>
      )
    } else {
      const ps = photos.map(p => <Photo id={p.id} key={p.id} secret={p.secret} farm={p.farm} server={p.server} />)
      return <div className='photos_container'>{ps}</div>
    }
  }
}

export default Flicker
