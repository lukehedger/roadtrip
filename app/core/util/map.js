import L from 'leaflet'

import {
  MAP_ICON_OPTS,
  MAP_POLYLINE_COLOUR,
  MAP_SNAKING_SPEED,
} from 'core/constants'
import smoosh from './smoosh'

/**
 * Create a new Leaflet marker
 *
 * @param  {Array}  coords Marker [latitude, longitude]
 * @return {Object}        Marker
 */
const createMarker = coords => L.marker(coords, { icon: L.icon(MAP_ICON_OPTS) })

/**
 * Create a new Leaflet polyline
 *
 * @param  {Array}  coords     From [latitude, longitude]
 * @param  {Array}  nextCoords To [latitude, longitude]
 * @return {Object}            Polyline
 */
const createPolyline = (coords, nextCoords) =>
  L.polyline([coords, nextCoords], {
    color: MAP_POLYLINE_COLOUR,
    snakingSpeed: MAP_SNAKING_SPEED,
  })

/**
 * Generate Leaflet map route with markers and polyline
 *
 * @param  {Object} gifts Gifts to plot on route
 * @return {Object}
 */
export const generateMapRoute = (gifts, onClick) => {
  const end = gifts.length - 1

  const mapRoute = gifts.map(({ _id, coords }, i) => {
    const marker = createMarker(coords)

    marker.on('click', () => onClick(_id))

    const group = [marker]

    // polyline to next marker
    if (i < end) {
      group.push(createPolyline(coords, gifts[i + 1].coords))
    }

    return group
  })

  return L.featureGroup(smoosh(mapRoute))
}
