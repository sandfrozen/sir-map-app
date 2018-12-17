import React, { Component } from 'react'
// import axios from 'axios'
import './style.css'
import DarkSkyApi from 'dark-sky-api'
import LinearBuffer from '../LinearBuffer'

DarkSkyApi.apiKey = 'cebde3da6c210680a9368ee7a3b1d7ee'
DarkSkyApi.units = 'si'

class Weather extends Component {
  state = {
    weather: null
  }

  componentDidMount () {
    this.getWeather()
  }

  componentWillReceiveProps (nextProps) {
    this.props = nextProps
    this.getWeather()
  }

  getWeather = () => {
    this.setState({ weather: null })
    let { lat, lng } = this.props
    const position = {
      latitude: lat,
      longitude: lng
    }
    DarkSkyApi.loadCurrent(position).then(result => {
      this.setState({ weather: result })
    })
  }

  render () {
    let { weather } = this.state
    let { lat, lng } = this.props

    let coordsDiv = (
      <div style={{ paddingTop: '20px' }}>
        <div className='coords'>LOCATION: {lat}</div>
        <div className='coords'>{lng}</div>
      </div>
    )

    if (weather === null) {
      return (
        <div>
          <div>
            <div>Calculating weather data...</div>
            <LinearBuffer />
            {coordsDiv}
          </div>
        </div>
      )
    } else {
      let img_src =
        'https://darksky.net/images/weather-icons/' + weather.icon + '.png'

      return (
        <div className='weather_container'>
          <span className='currently'>
            <span className='cloudy-icon currently-icon swip'>
              <img width='84' height='84' src={img_src} alt='cloudy Icon' />
            </span>
            <span className='desc swap'>
              <span className='summary swap'>
                {weather.temperature}˚ {weather.summary}.
              </span>
              <div className='summary-high-low'>
                <div>
                  <span className='high-low-label'>Humidity:</span>
                  {weather.humidity} %
                </div>
                <div>
                  <span className='high-low-label'>Pressure:</span>
                  {weather.pressure} hpa
                </div>
                <div>
                  <span className='high-low-label'>Visibility:</span>
                  {weather.visibility} km
                </div>
                <div>
                  <span className='high-low-label'>Wind:</span>
                  {weather.windSpeed} km/h ({weather.windDirection})
                </div>
                <div>
                  <span className='high-low-label'>Wind gust:</span>
                  {weather.windGust} km/h
                </div>
              </div>
            </span>
          </span>
          {coordsDiv}
        </div>
      )
    }
  }
}

export default Weather
