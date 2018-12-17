import React, { Component, Fragment } from 'react'
import './style.css'
import LinearBuffer from '../LinearBuffer'

class CityInfo extends Component {
  render () {
    let {
      street,
      street_number,
      city,
      country,
      fetchingAddress,
      fetchingFlag,
      population,
      fetchingError
    } = this.props
    if (fetchingError === true) {
      return (
        <div style={{ textAlign: 'center' }}>
          <div>Choose a different place.</div>
          <div className='cannot'>CAN NOT FETCH DATA FOR THIS LOCATION</div>
        </div>
      )
    } else {
      return (
        <Fragment>
          {fetchingAddress === false && (
            <div className='city_details'>
              <div className='country'>{country}</div>
              <div className='city'>{city}</div>
              <div className='street'>
                {street} {street_number}
              </div>
            </div>
          )}
          {fetchingAddress === true && (
            <div>
              Address is loading...
              <LinearBuffer />
            </div>
          )}
          <hr style={{ width: 100 }} />
          <div className='city_population'>
            {fetchingFlag === true && (
              <div>
                Flag is loading...
                <LinearBuffer />
              </div>
            )}
            {fetchingFlag === false && (
              <div>
                
                <img
                  src={population.flag}
                  className='flag'
                  width='100'
                  height='auto'
                  alt='flag'
                />
              </div>
            )}
          </div>
        </Fragment>
      )
    }
  }
}

export default CityInfo
