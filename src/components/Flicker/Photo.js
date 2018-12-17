import React, { Component, Fragment } from 'react'

class Photo extends Component {
  _handleOnClickPhoto = (link, title) => event => {
    this.props.handleOnClickPhoto(link, title)
  }

  render () {
    let { id, secret, farm, server, title } = this.props
    const link = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
    return (
      <img
        src={link}
        onClick={this._handleOnClickPhoto(link, title)}
        className='photo'
        alt={title}
      />
    )
  }
}

export default Photo
