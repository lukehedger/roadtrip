import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

import * as actions from './actionTypes'

export const initialState = Immutable.fromJS({
  isInitialVisit: true,
})

export default createReducer(initialState, {
  [actions.SET_IS_INITIAL_VISIT]: (state, action) =>
    state.merge(action.payload),
})
