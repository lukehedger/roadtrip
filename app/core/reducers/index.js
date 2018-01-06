import { foundReducer } from 'found'
import { combineReducers } from 'redux-immutablejs'

import * as Gifted from 'domains/gifted'
import * as Gifts from 'domains/gifts'
import * as UI from 'domains/ui'

export default combineReducers({
  found: foundReducer,
  [Gifted.name]: Gifted.reducer,
  [Gifts.name]: Gifts.reducer,
  [UI.name]: UI.reducer,
})
