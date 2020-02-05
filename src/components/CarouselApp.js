import React, { Component } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const events = [
  {
    id: 1,
    isEnabled: true,
    title: 'Performance title',
    image: '1',
    director: 'Director Name',
    date: new Date(),
    location: {
      institution: 'INC',
      room: 'Random Hall',
      address: '1st Main Street, Somecity'
    }
  },
  {
    id: 2,
    isEnabled: true,
    title: 'Performance title',
    image: '2',
    director: 'Director Name',
    date: new Date(),
    location: {
      institution: 'INC',
      room: 'Random Hall',
      address: '1st Main Street, Somecity'
    }
  },
  {
    id: 3,
    isEnabled: true,
    title: 'Performance title',
    image: '3',
    director: 'Director Name',
    date: new Date(),
    location: {
      institution: 'INC',
      room: 'Random Hall',
      address: '1st Main Street, Somecity'
    },
    disclaimer: '45 - 50 characters long excuse'
  }
]

export default class CarouselApp extends Component {
  processDate = (date, locale = 'en') => {
    return {
      year: date.getFullYear(),
      month: date.toLocaleString(locale, { month: 'long' }),
      day: date.getDate(),
      // weekDay: date.toLocaleString(locale, { weekday: 'short' }).slice(0, locale === 'ro' ? -1 : 3),
      weekDay: date.toLocaleString(locale, { weekday: 'short' }),
      time: `${date.getHours()}:${date.getMinutes()}`
    }
  }

  render() {
    const enabledEvents = events.filter(event => event.isEnabled);

    return (
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        interval={5000}
        swipeScrollTolerance={1000}
        emulateTouch
        width={'980px'}
        showArrows={true}>

        {enabledEvents.map(event => {
          const { id, isEnabled, title, image, director, date, location, disclaimer } = event
          const { year, month, weekDay, day, time } = this.processDate(date)

          return isEnabled && (
            <div key={id}>
              <img src={'assets/images/' + image + '.jpg'} alt={title} />
              <div className='legend'>

                <div className='details-section'>
                  <div className='performance-title'>{title}</div>
                  <div className='performance-director'><span className='pd-key'>D</span>: <span className='pd-val'>{director}</span></div>
                  <div className='performance-location'>
                    <i className="fas fa-map-marker-alt"></i>
                    <span className="pl-institution"> {location.institution} - </span>
                    <span className="pl-room">{location.room}, </span>
                    <span className="pl-address">{location.address}</span>
                  </div>
                  {disclaimer && <div className='performance-disclaimer'><i className="fas fa-comments"></i> {disclaimer}</div>}
                </div>

                <div className='date-section'>
                  <div className="ds-day-name">{weekDay}</div>
                  <div className="ds-week-day">{day}</div>
                  <div className="ds-meta">
                    <div className='ds-m-month-year'>{month} <span className='ds-m-my-year'>{year}</span></div>
                    <div className='ds-m-hour'><i className="far fa-clock"></i> <span>{time}</span></div>
                  </div>
                </div>

              </div>
            </div>
          )
        })}
      
      </Carousel>
    )
  }
}