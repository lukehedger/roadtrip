import { createSelector } from 'reselect'

import { name } from './constants'

/**
 * Select the entire domain from the store by `name`
 *
 * @param  {Object} state Redux store
 * @return {Object}       Domain state
 */
const getAll = state => state.get(name)

/**
 * Get application initial visit status
 *
 * @type {Boolean}
 */
const getIsInitialVisit = createSelector([getAll], state => {
  return state.get('isInitialVisit')
})

export default {
  isInitialVisit: getIsInitialVisit,
}
