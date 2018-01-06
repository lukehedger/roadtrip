import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'
import { handle } from 'redux-pack'

import * as actions from './actionTypes'
import * as model from './model'

const createGifts = gifts => {
  return gifts.map(gift => model.giftFactory(gift)).reduce(
    (obj, gift) =>
      Object.assign({}, obj, {
        [gift._id]: gift,
      }),
    {}
  )
}

export const initialState = Immutable.fromJS({})

export default createReducer(initialState, {
  [actions.READ_GIFTS]: (state, action) =>
    handle(state, action, {
      success: prevState => prevState.merge(createGifts(action.payload.gifts)),
    }),
})
