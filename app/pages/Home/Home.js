import React, { Component } from 'react'
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

class Home extends Component {
  componentDidMount() {
    const { actions } = this.props

    // fetch the gift list
    return actions.readGifts()
  }

  render() {
    const { actions } = this.props

    return (
      <div>
        <h1>Home</h1>

        <button
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
        </button>
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
