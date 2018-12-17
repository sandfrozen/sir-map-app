import React, { Component, Fragment } from 'react'
import './App.css'
import GoogleApiWrapper from './components/GoogleApiWrapper/GoogleApiWrapper'
import axios from 'axios'

import Weather from './components/Weather/Weather'
import CityInfo from './components/CityInfo/CityInfo'
import News from './components/News/News'
import NewsAPI from 'newsapi'
import Flicker from './components/Flicker/Flicker'

const newsapi = new NewsAPI('bedefbb1d71346c2a2795c2113f469fd')

class App extends Component {
  state = {
    lat: 41.69452881805707,
    lng: -8.846923664502128,
    country: '',
    country_code: '',
    street: '',
    street_number: '',
    city: '',
    fetchingAddress: true,
    fetchingFlag: true,
    fetchingError: false,
    news: null,
    fetchingNews: true,
    fetchingPhotos: true,
    photos: null
  }

  componentDidMount () {
    this.getAddress()
    this.getFlicker()
  }

  setNewCoords = (lat, lng) => {
    this.setState({ lat, lng }, () => {
      this.getAddress()
      this.getFlicker()
    })
  }

  getAddress = () => {
    this.setState({
      fetchingAddress: true,
      fetchingError: false
    })

    let { lat, lng } = this.state
    let street = ''
    let street_number = ''
    let city = ''
    let country = ''
    let country_code = ''
    let old_country = this.state.country
    let old_country_code = this.state.country_code

    axios
      .get(
        'https://maps.googleapis.com/maps/api/geocode/json?language=EN&latlng=' +
          lat +
          ',' +
          lng +
          '&key=AIzaSyCFmio79TncN-TlcoFdOX1K8WPxIQHUwxw'
      )
      .then(result => {
        try {
          // console.log('address', result.data.results['0'].formatted_address)
          let addressObject = result.data.results['0'].address_components
          addressObject.forEach(a => {
            if (a.types.includes('route')) street = a.long_name
            if (a.types.includes('street_number')) street_number = a.long_name
            else if (a.types.includes('locality')) city = a.long_name
            else if (a.types.includes('country')) {
              country = a.long_name
              country_code = a.short_name
            }
          })
          this.setState({
            street,
            street_number,
            city,
            country,
            country_code,
            fetchingAddress: false
          })
          if (country !== '' && country !== old_country) {
            this.getCountryInfo()
            // this.getTime()
          }
          if (country_code !== '' && country_code !== old_country_code) {
            this.getNews()
          }
        } catch {
          this.setState({
            fetchingError: true
          })
        }
      })
  }

  getNews = () => {
    this.setState({ fetchingNews: true })
    const { country_code } = this.state
    newsapi.v2
      .topHeadlines({
        category: 'technology',
        language: country_code,
        country: country_code
      })
      .then(response => {
        // console.log('news', response.articles)
        this.setState({ news: response.articles, fetchingNews: false })
      })
  }

  getCountryInfo = () => {
    this.setState({ fetchingFlag: true })
    axios
      .get('https://restcountries.eu/rest/v2/name/' + this.state.country)
      .then(result => {
        this.setState({
          population: result.data['0'],
          fetchingFlag: false
        })
      })
  }

  getTime = () => {
    axios
      .get('http://worldtimeapi.org/api/timezone/' + this.state.country)
      .then(result => {
        // console.log(result)
      })
  }

  getFlicker = () => {
    this.setState({ fetchingPhotos: true })
    const { lat, lng } = this.state
    let photos = []
    const link =
      'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0bfdec570e0b535a4b59707cd4e6c30b&lat=' +
      lat +
      '&lon=' +
      lng +
      '&per_page=9&format=json&nojsoncallback=1'
    axios.get(link).then(result => {
      photos = result.data.photos.photo
      // let photosIds = photos.map(p => (p.id, p.secret) )
      // console.log('ps', result.data.photos.photo)
      this.setState({ photos: photos, fetchingPhotos: false })
    })
  }

  render () {
    let {
      lat,
      lng,
      street,
      street_number,
      city,
      country,
      fetchingAddress,
      fetchingFlag,
      population,
      fetchingError,
      news,
      fetchingNews,
      photos,
      fetchingPhotos
    } = this.state
    return (
      <Fragment>
        <div className='container'>
          <div className='map_item'>
            <GoogleApiWrapper
              setNewCoords={this.setNewCoords}
              lat={lat}
              lng={lng}
            />
          </div>
          <div className='weather_item'>
            <Weather lat={lat} lng={lng} />
          </div>
        </div>
        <div className='container'>
          <div className='extra_item'>
            <CityInfo
              street={street}
              street_number={street_number}
              city={city}
              country={country}
              fetchingAddress={fetchingAddress}
              fetchingFlag={fetchingFlag}
              population={population}
              fetchingError={fetchingError}
            />
          </div>
          <div className='extra_item'>
            <Flicker photos={photos} fetchingPhotos={fetchingPhotos} />
          </div>
          <div className='extra_item'>
            <News news={news} country={country} fetchingNews={fetchingNews} />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default App
