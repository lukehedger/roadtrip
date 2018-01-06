import {
  BrowserProtocol,
  createHistoryEnhancer,
  Actions as FarceActions,
  queryMiddleware,
} from 'farce'
import { createMatchEnhancer, Matcher } from 'found'
import Immutable from 'immutable'
import { createStore, applyMiddleware, compose } from 'redux'

import { STATE_KEY } from 'core/constants'
import createMiddleware from 'core/middleware'
import rootReducer from 'core/reducers'
import routeConfig from 'core/routes'
import { WebStorage } from 'core/services'
import { isDevelopment } from 'core/util'

// create middleware
const middleware = createMiddleware(isDevelopment)

// create store with middleware - and devTools if dev
const finalCreateStore = compose(
  applyMiddleware(...middleware),
  createHistoryEnhancer({
    protocol: new BrowserProtocol(),
    middlewares: [queryMiddleware],
  }),
  createMatchEnhancer(new Matcher(routeConfig)),
  window.devToolsExtension && isDevelopment
    ? window.devToolsExtension()
    : f => f
)(createStore)

// persist stored state
const persistState = WebStorage.getSessionItem(STATE_KEY) || {}

// expose create store method
export const configureStore = (state = persistState) => {
  const store = finalCreateStore(rootReducer, Immutable.fromJS(state))

  store.dispatch(FarceActions.init())

  // store state on change
  store.subscribe(() => {
    WebStorage.setSessionItem(STATE_KEY, {
      // ui: store.getState().get('ui'),
    })
  })

  return store
}
