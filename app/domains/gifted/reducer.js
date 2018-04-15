import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'
import { handle } from 'redux-pack'

import * as actions from './actionTypes'
import * as model from './model'

const createGifted = gifted => {
  return {
    [gifted.gift]: model.giftedFactory(gifted),
  }
}

export const initialState = Immutable.fromJS({})

export default createReducer(initialState, {
  [actions.CREATE_GIFTED]: (state, action) =>
    handle(state, action, {
      success: prevState =>
        prevState.merge(createGifted(action.payload.gifted)),
    }),
})
