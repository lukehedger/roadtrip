export const { NODE_ENV } = process.env

const API_CONFIG = {
  endpoints: {
    development: {
      gifted: 'http://localhost:7000',
      gifts: 'http://localhost:7001',
    },
    production: {
      gifted: 'https://roadtrip-gifted-create.now.sh/',
      gifts: 'https://roadtrip-gifts-read.now.sh/',
    },
  },
}

export const API = API_CONFIG.endpoints[NODE_ENV]

export const APP_LOAD_DELAY = 2500

export const MAP_ROUTE_DRAW_DELAY = 1000

export const MAP_ICON_OPTS = {
  iconUrl: '/img/map-icon.svg',
  iconSize: [48, 60],
  iconAnchor: [15, 45],
  className: 'map-icon',
}

export const MAP_OFFSET_X = 100

export const MAP_OFFSET_Y = 0

export const MAP_OPTS = {
  center: [36.295117, -119.699698],
  // maxBounds: [[ 51.28, -0.489 ], [ 51.686, 0.236 ]],
  zoom: 7,
  zoomControl: false,
}

export const MAP_POLYLINE_COLOUR = '#F479B7'

export const MAP_SNAKING_SPEED = 200

export const MAP_TILE_LAYER_URL =
  'https://api.mapbox.com/styles/v1/shandyclub/cjdj4loktivcg2tmodt9q1fe9/tiles/256/{z}/{x}/{y}?access_token={accessToken}'

export const MAP_TILE_LAYER_OPTS = {
  attribution:
    'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'shandyclub.1hme714m',
  accessToken:
    'pk.eyJ1Ijoic2hhbmR5Y2x1YiIsImEiOiJjamRqNGdlMWYwaG92MzJwazBtdnFoMDJ2In0.UU0UwgKichfmNoR4nEwM7Q',
}

export const MONZO_URL = 'https://monzo.me/lukehedger'

export const STATE_KEY = '@Roadtrip:store'
