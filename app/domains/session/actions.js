import * as actions from './actionTypes'

/**
 * Set is initial visit
 *
 * @param  {Boolean} isInitialVisit Initial visit status
 * @return {Object}                 Flux Standard Action
 */
export const setIsInitialVisit = isInitialVisit => ({
  type: actions.SET_IS_INITIAL_VISIT,
  payload: { isInitialVisit },
})
