import L from 'leaflet'

import {
  MAP_CLUSTER_COLOUR,
  MAP_ICON_OPTS,
  MAP_POLYLINE_COLOUR,
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
 * Create a new Leaflet cluster
 *
 * @param  {Object} cluster Cluster layer
 * @return {Object}         Cluster
 */
const createCluster = () => L.icon(MAP_ICON_OPTS)

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
  })

/**
 * Generate Leaflet map markers, with clustering
 *
 * @param  {Object}   gifts   Gifts to plot on route
 * @param  {Function} onClick Marker on click handler
 * @return {Object}
 */
export const generateMapMarkers = (gifts, onClick) => {
  const markerLayer = L.markerClusterGroup({
    iconCreateFunction: createCluster,
    polygonOptions: { color: MAP_CLUSTER_COLOUR },
    showCoverageOnHover: false,
    // singleMarkerMode: true,
  })

  gifts.map(({ _id, coords }) => {
    const marker = createMarker(coords)

    marker.on('click', () => onClick(_id))

    markerLayer.addLayer(marker)
  })

  return markerLayer
}

/**
 * Generate Leaflet map route with polyline
 *
 * @param  {Object} steps Waypoints to plot on route
 * @return {Object}
 */
export const generateMapRoute = steps => {
  const mapRoute = steps.map(step => {
    const group = []

    step.map(({ end, start }) => {
      group.push(createPolyline(start, end))
    })

    return group
  })

  return L.featureGroup(smoosh(mapRoute))
}
