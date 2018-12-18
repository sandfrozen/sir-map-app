import React, { Component } from 'react'

import LinearBuffer from '../LinearBuffer'
import Photo from './Photo'

import './style.css'

class Flicker extends Component {
  state = { link: '', title: '' }

  handleOnClickPhoto = (link, title) => {
    console.log(link, title)
    this.setState({ link, title }, () => {
      var modal = document.getElementById('myModal');
      modal.style.display = "block";
    })
  }

  handleOnClickClose = () => {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
  }

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
      const ps = photos.map(p => (
        <Photo
          id={p.id}
          key={p.id}
          secret={p.secret}
          farm={p.farm}
          server={p.server}
          title={p.title}
          handleOnClickPhoto={this.handleOnClickPhoto}
        />
      ))
      if (ps.length === 0) {
        return (
          <div className='no_photos_container'>
            No photos from this location.
          </div>
        )
      } else {
        const {link, title} = this.state
        return (
          <div className='photos_container'>
            {ps}
              <div id='myModal' className='modal'>
                <span className='close' onClick={this.handleOnClickClose}>
                  &times;
                </span>
                <img className='modal-content' alt='asd' src={link} />
                <div id='caption'>{title}</div>
              </div>
          </div>
        )
      }
    }
  }
}

export default Flicker
