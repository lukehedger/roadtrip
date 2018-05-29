import React, { Component } from 'react'
import { Position } from 'jaak-primitives'
import L from 'leaflet'
import 'leaflet.markercluster'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'

import { Slide } from 'core/components'
import {
  MAP_DEFAULT_ZOOM,
  MAP_OFFSET_X,
  MAP_OFFSET_Y,
  MAP_OPTS,
  MAP_ROUTE_DRAW_DELAY,
  MAP_TILE_LAYER_OPTS,
  MAP_TILE_LAYER_URL,
  MONZO_URL,
  STEPS,
} from 'core/constants'
import { PanelPosition } from 'core/primitives'
import { routes } from 'core/routes'
import { map as mapUtil, track } from 'core/util'
import { actions as GiftedActions } from 'domains/gifted'
import {
  actions as GiftsActions,
  selectors as GiftsSelectors,
} from 'domains/gifts'
import {
  actions as SessionActions,
  selectors as SessionSelectors,
} from 'domains/session'
import { actions as UIActions, selectors as UISelectors } from 'domains/ui'
import * as Components from './components'

class Home extends Component {
  state = {
    modalIsOpen: false,
  }

  componentDidMount() {
    const { actions, routeParams, sortedGifts } = this.props

    // if gifts already fetched, init map and draw route
    if (sortedGifts.length > 0) {
      this.initMap()

      return this.drawRoute(sortedGifts, STEPS)
    }

    // if viewing a gift, close intro
    if (routeParams.gift) {
      this.onIntroCloseClick()
    }

    // fetch the gift list
    return actions.readGifts()
  }

  componentDidUpdate(prevProps) {
    const {
      isInitialVisit,
      isLoading,
      selectedGift,
      selectedGiftId,
      sortedGifts,
    } = this.props
    const {
      isInitialVisit: prevIsInitialVisit,
      isLoading: prevIsLoading,
      selectedGiftId: prevSelectedGiftId,
    } = prevProps

    // check if app has finished loading
    if (!isLoading && isLoading !== prevIsLoading) {
      // initialise the map
      this.initMap()
    }

    // check if app has finished loading and intro has been displayed
    if (
      (!isInitialVisit && !isLoading && isLoading !== prevIsLoading) ||
      (!isInitialVisit && isInitialVisit !== prevIsInitialVisit)
    ) {
      // draw route
      this.drawRoute(sortedGifts, STEPS)

      // open first gift, if none open
      if (typeof selectedGiftId === 'undefined') {
        this.redirectToGift(sortedGifts[0]._id)
      }

      // if gift selected on load
      if (
        typeof selectedGiftId !== 'undefined' &&
        typeof selectedGift !== 'undefined'
      ) {
        // center map to selected gift
        this.setMapCenter(selectedGift.coords, 14, { animate: true }, [
          MAP_OFFSET_X,
          MAP_OFFSET_Y,
        ])
      }
    }

    // check if `selectedGiftId` has changed
    if (
      typeof selectedGiftId !== 'undefined' &&
      selectedGiftId !== prevSelectedGiftId
    ) {
      // center map to selected gift
      this.setMapCenter(selectedGift.coords, 14, { animate: true }, [
        MAP_OFFSET_X,
        MAP_OFFSET_Y,
      ])
    }

    // check if `selectedGiftId` has changed to `undefined`
    if (
      typeof selectedGiftId === 'undefined' &&
      selectedGiftId !== prevSelectedGiftId
    ) {
      const center = this.map.getCenter()

      // if map is not being dragged, reset map center to remove panel offset
      if (!this.map.isDragging) {
        this.setMapCenter(
          [center.lat, center.lng],
          MAP_DEFAULT_ZOOM,
          { animate: true },
          [-MAP_OFFSET_X, -MAP_OFFSET_Y]
        )
      }
    }
  }

  closeModal = () => {
    const { router } = this.context
    const { location } = this.props

    this.setState(() => ({
      modalIsOpen: false,
    }))

    // close Postcard
    return router.push({ pathname: location.pathname, search: '' })
  }

  drawRoute = (gifts, steps) => {
    // if map not init, wait
    if (!this.map) return

    // generate markers
    const markers = mapUtil.generateMapMarkers(gifts, this.onMarkerClick)

    // generate route
    const route = mapUtil.generateMapRoute(steps)

    // draw route and plot markers after delay
    setTimeout(() => {
      markers.addTo(this.map)

      route.addTo(this.map)
    }, MAP_ROUTE_DRAW_DELAY)
  }

  initMap = () => {
    // create map
    this.map = L.map('map', MAP_OPTS)

    // add tile layer
    L.tileLayer(MAP_TILE_LAYER_URL, MAP_TILE_LAYER_OPTS).addTo(this.map)

    // add map events
    this.map.on('dragstart', this.onMapDragStart)
    this.map.on('dragend', this.onMapDragEnd)
  }

  onContributeClick = () => {
    const { router } = this.context
    const { location, selectedGiftId } = this.props

    track.track('contribute', { gift: selectedGiftId })

    return router.push({ pathname: location.pathname, search: '?gift=true' })
  }

  onGiftPrevClick = index => {
    const { sortedGifts } = this.props

    const prevIndex = index <= 0 ? sortedGifts.length - 1 : index - 1

    return this.redirectToGift(sortedGifts[prevIndex]._id)
  }

  onGiftNextClick = index => {
    const { sortedGifts } = this.props

    const nextIndex = index >= sortedGifts.length - 1 ? 0 : index + 1

    return this.redirectToGift(sortedGifts[nextIndex]._id)
  }

  onIntroCloseClick = () => {
    const { actions } = this.props

    return actions.setIsInitialVisit(false)
  }

  onMapDragStart = () => {
    const { selectedGiftId } = this.props

    this.setMapIsDragging(true)

    // remove selected gift from route
    if (selectedGiftId) this.redirectToGift()
  }

  onMapDragEnd = () => {
    this.setMapIsDragging(false)
  }

  onMarkerClick = id => {
    track.track('gift', { gift: id })

    return this.redirectToGift(id)
  }

  onPostcardCloseClick = () => {
    const { router } = this.context
    const { location } = this.props

    return router.push({ pathname: location.pathname, search: '' })
  }

  onPostcardPostClick = (amount, from, gift, message, image = null) => {
    const { router } = this.context
    const { actions, location } = this.props

    // add gifted to database
    actions.createGifted({ amount, from, gift, image, message })

    if (amount > 100) {
      return this.setState(() => ({
        modalIsOpen: true,
      }))
    }

    // load Monzo
    window.open(`${MONZO_URL}/${amount}/billing?d=${message}`, '_blank')

    // close Postcard
    return router.push({ pathname: location.pathname, search: '' })
  }

  redirectToGift = (id = '') => {
    const { router } = this.context

    return router.push(`${routes.home.path}${id}`)
  }

  setMapCenter = ([lat, lng], zoom, options = {}, offset = null) => {
    const currentZoom = this.map.getZoom()
    const zoomValue = zoom > currentZoom ? zoom : currentZoom

    let center = { lat, lng }

    if (offset) {
      center = this.map.unproject(
        this.map.project(center, zoomValue).add(offset),
        zoomValue
      )
    }

    // this.map.flyTo(center, zoom, options)
    this.map.setZoomAround(center, zoomValue, options)
    this.map.panTo(center, options)
  }

  setMapIsDragging = isDragging => {
    return (this.map.isDragging = isDragging)
  }

  render() {
    const {
      isFormOpen,
      isInitialVisit,
      isLoading,
      isSelectedGiftGifted,
      isSidePanelOpen,
      selectedGift,
      selectedGiftId,
    } = this.props

    return (
      <Position position="relative" size={['100%']} zIndex={2}>
        <div id="map" />

        <PanelPosition
          maxWidth="500px"
          minWidth="15em"
          position="fixed"
          size={['100%', '50%']}
          style={{ pointerEvents: 'none' }}
          right={0}
          top={0}
          zIndex={3}
        >
          <Slide
            appear={true}
            duration={500}
            in={!isLoading && isSidePanelOpen}
          >
            <Components.Panel
              gift={selectedGift}
              onContributeClick={this.onContributeClick}
              onNextClick={this.onGiftNextClick}
              onPrevClick={this.onGiftPrevClick}
              isSelectedGiftGifted={isSelectedGiftGifted}
            />
          </Slide>
        </PanelPosition>

        {!isLoading &&
          isInitialVisit && (
            <Components.Intro onCloseClick={this.onIntroCloseClick} />
          )}

        {!isLoading &&
          isFormOpen && (
            <Components.Postcard
              gift={selectedGiftId}
              onCloseClick={this.onPostcardCloseClick}
              onPostClick={this.onPostcardPostClick}
            />
          )}

        <Components.Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
        />
      </Position>
    )
  }
}

Home.contextTypes = {
  router: PropTypes.object,
}

export default connect(
  createStructuredSelector({
    isFormOpen: UISelectors.isFormOpen,
    isInitialVisit: SessionSelectors.isInitialVisit,
    isLoading: UISelectors.isLoading,
    isSelectedGiftGifted: UISelectors.isSelectedGiftGifted,
    isSidePanelOpen: UISelectors.isSidePanelOpen,
    selectedGift: UISelectors.selectedGift,
    selectedGiftId: UISelectors.selectedGiftId,
    sortedGifts: GiftsSelectors.sortedGifts,
  }),
  dispatch => ({
    actions: bindActionCreators(
      { ...GiftedActions, ...GiftsActions, ...SessionActions, ...UIActions },
      dispatch
    ),
  })
)(Home)
