import React, { Component } from 'react'
import { Position } from 'jaak-primitives'
import L from 'leaflet'
import 'leaflet.polyline.snakeanim'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'

import { Slide } from 'core/components'
import {
  MAP_OFFSET_X,
  MAP_OFFSET_Y,
  MAP_OPTS,
  MAP_ROUTE_DRAW_DELAY,
  MAP_TILE_LAYER_OPTS,
  MAP_TILE_LAYER_URL,
} from 'core/constants'
import { routes } from 'core/routes'
import { map as mapUtil } from 'core/util'
import {
  actions as GiftedActions,
  selectors as GiftedSelectors,
} from 'domains/gifted'
import {
  actions as GiftsActions,
  selectors as GiftsSelectors,
} from 'domains/gifts'
import { actions as UIActions, selectors as UISelectors } from 'domains/ui'
import * as Components from './components'

class Home extends Component {
  componentDidMount() {
    const { actions } = this.props

    // TODO: If `gifts` have already been fetched, just `initMap(sortedGifts)` instead

    // fetch the gift list
    return actions.readGifts()
  }

  componentDidUpdate(prevProps) {
    const { isLoading, selectedGift, selectedGiftId, sortedGifts } = this.props
    const {
      isLoading: prevIsLoading,
      selectedGiftId: prevSelectedGiftId,
    } = prevProps

    // check if app has finished loading
    if (!isLoading && isLoading !== prevIsLoading) {
      // initialise the map
      this.initMap(sortedGifts)
    }

    // check if `selectedGiftId` has changed
    if (
      typeof selectedGiftId !== 'undefined' &&
      selectedGiftId !== prevSelectedGiftId
    ) {
      // center map to selected gift
      this.setMapCenter(selectedGift.coords, { animate: true }, [
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
        this.setMapCenter([center.lat, center.lng], { animate: true }, [
          -MAP_OFFSET_X,
          -MAP_OFFSET_Y,
        ])
      }
    }
  }

  initMap = gifts => {
    // create map
    this.map = L.map('map', MAP_OPTS)

    // add tile layer
    L.tileLayer(MAP_TILE_LAYER_URL, MAP_TILE_LAYER_OPTS).addTo(this.map)

    // add map events
    this.map.on('dragstart', this.onMapDragStart)
    this.map.on('dragend', this.onMapDragEnd)

    // generate route
    const route = mapUtil.generateMapRoute(gifts, this.onMarkerClick)

    // draw route after delay
    setTimeout(() => route.addTo(this.map).snakeIn(), MAP_ROUTE_DRAW_DELAY)
  }

  onContributeClick = id => {
    const { router } = this.context

    return router.push(`${routes.gift.path}/${id}`)
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

  onMapDragStart = () => {
    this.setMapIsDragging(true)

    // remove selected gift from route
    return this.redirectToGift()
  }

  onMapDragEnd = () => {
    this.setMapIsDragging(false)
  }

  onMarkerClick = id => {
    return this.redirectToGift(id)
  }

  redirectToGift = (id = '') => {
    const { router } = this.context

    return router.push(`${routes.home.path}${id}`)
  }

  setMapCenter = ([lat, lng], options = {}, offset = null) => {
    let center = { lat, lng }

    if (offset) {
      center = this.map.unproject(this.map.project(center).add(offset))
    }

    this.map.panTo(center, options)
  }

  setMapIsDragging = isDragging => {
    return (this.map.isDragging = isDragging)
  }

  render() {
    const { isLoading, isSidePanelOpen, selectedGift } = this.props

    return (
      <Position position="relative" size={['100%']} zIndex={2}>
        <div id="map" />

        <Position
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
            />
          </Slide>
        </Position>
      </Position>
    )
  }
}

Home.contextTypes = {
  router: PropTypes.object,
}

export default connect(
  createStructuredSelector({
    gifted: GiftedSelectors.gifted,
    isLoading: UISelectors.isLoading,
    isSidePanelOpen: UISelectors.isSidePanelOpen,
    selectedGift: UISelectors.selectedGift,
    selectedGiftId: UISelectors.selectedGiftId,
    sortedGifts: GiftsSelectors.sortedGifts,
  }),
  dispatch => ({
    actions: bindActionCreators(
      { ...GiftedActions, ...GiftsActions, ...UIActions },
      dispatch
    ),
  })
)(Home)
