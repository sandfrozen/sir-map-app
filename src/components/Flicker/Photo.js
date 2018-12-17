import React, { Component } from 'react'

class Photo extends Component {

  render () {
    let { id, secret, farm, server } = this.props
    const link = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
    return(
      <img src={link} className='photo' alt='name' />
    )
  }
}

export default Photo
