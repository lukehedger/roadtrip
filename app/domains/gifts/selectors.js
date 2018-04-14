import { createSelector } from 'reselect'

import { name } from './constants'

/**
 * Select the entire domain from the store by `name`
 *
 * @param  {Object} state Redux store
 * @return {Object}       Domain state
 */
const getAll = state => state.get(name).toJS()

/**
 * Sort gifts into route order
 *
 * @type {Array}
 */
const getSortedGifts = createSelector(getAll, gifts => {
  return gifts && Object.values(gifts).sort((a, b) => a.order - b.order)
})

export default {
  gifts: getAll,
  sortedGifts: getSortedGifts,
}
