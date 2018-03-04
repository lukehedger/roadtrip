import React, { Component } from 'react'
import L from 'leaflet'
import 'leaflet.polyline.snakeanim'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'

import {
  actions as GiftedActions,
  selectors as GiftedSelectors,
} from 'domains/gifted'
import {
  actions as GiftsActions,
  selectors as GiftsSelectors,
} from 'domains/gifts'
// import * as Components from './components'

const MapIcon = L.icon({
  iconUrl: '/img/map-icon.svg',
  iconSize: [18, 30],
  iconAnchor: [9, 30],
  className: 'map-icon',
})

class Home extends Component {
  componentDidMount() {
    // const { actions } = this.props

    // initialise the map
    this.initMap()

    // fetch the gift list
    // return actions.readGifts()
  }

  initMap = () => {
    this.map = L.map('map', {
      center: [36.295117, -119.699698],
      // maxBounds: [[ 51.28, -0.489 ], [ 51.686, 0.236 ]],
      zoom: 7,
      zoomControl: false,
    })

    L.tileLayer(
      'https://api.mapbox.com/styles/v1/shandyclub/cjdj4loktivcg2tmodt9q1fe9/tiles/256/{z}/{x}/{y}?access_token={accessToken}',
      {
        attribution:
          'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'shandyclub.1hme714m',
        accessToken:
          'pk.eyJ1Ijoic2hhbmR5Y2x1YiIsImEiOiJjamRqNGdlMWYwaG92MzJwazBtdnFoMDJ2In0.UU0UwgKichfmNoR4nEwM7Q',
      }
    ).addTo(this.map)

    const route = L.featureGroup([
      L.marker([37.766907, -122.427303], { icon: MapIcon }),
      L.polyline([[37.766907, -122.427303], [37.286899, -121.876083]], {
        color: '#F479B7',
        snakingSpeed: 200,
      }),
      L.marker([37.286899, -121.876083], { icon: MapIcon }),
      L.polyline([[37.286899, -121.876083], [36.768952, -119.808304]], {
        color: '#F479B7',
        snakingSpeed: 200,
      }),
      L.marker([36.768952, -119.808304], { icon: MapIcon }),
    ])

    route.addTo(this.map).snakeIn()
  }

  render() {
    // const { actions } = this.props

    return (
      <div style={{ height: '100%', zIndex: 0, position: 'relative' }}>
        <div id="map" />

        {/* <button
          onClick={() =>
            actions.createGifted({
              from: 1,
              gift: '5a5101ebf36d287cf86bf729',
              image: 'data:text/plain;base64,p6b5...',
              message: 'A Gift',
            })
          }
        >
          Bug a gift!
        </button> */}
      </div>
    )
  }
}

export default connect(
  createStructuredSelector({
    gifted: GiftedSelectors.gifted,
    gifts: GiftsSelectors.gifts,
  }),
  dispatch => ({
    actions: bindActionCreators(
      { ...GiftedActions, ...GiftsActions },
      dispatch
    ),
  })
)(Home)
