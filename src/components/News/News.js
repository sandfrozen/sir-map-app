import React, { Component } from 'react'

import './style.css'
import LinearBuffer from '../LinearBuffer'

class News extends Component {
  render () {
    let { news, fetchingNews, country } = this.props
    if (fetchingNews === true) {
      return (
        <div>
          Searching for news in {country}...
          <LinearBuffer />
        </div>
      )
    } else {
      const listOfNews = news.map(n => (
        <li key={n.url}>
          <a href={n.url} target='_blank'>
            {n.source.name}
          </a>
          <br />
          {n.title}
        </li>
      ))
      if (listOfNews.length === 0) {
        return <div>Could not find news from {country}.</div>
      } else {
        return (
          <div className='news_container'>
            <div className='h4_container'>News in {country}:</div>

            <div className='news_list'>
              <ul>{listOfNews}</ul>
            </div>
          </div>
        )
      }
    }
  }
}

export default News
