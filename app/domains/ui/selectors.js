import { createSelector } from 'reselect'

import { selectors as Gifts } from 'domains/gifts'
import { name } from './constants'

/**
 * Select the entire domain from the store by `name`
 *
 * @param  {Object} state Redux store
 * @return {Object}       Domain state
 */
const getAll = state => state.get(name)

/**
 * Get application error status
 *
 * @type {Array}
 */
const getError = createSelector([getAll], state => {
  return state.get('error') && state.get('error').toJS()
})

/**
 * Get gift form state
 *
 * @param  {Object}  state Redux state
 * @param  {Object}  props Component props
 * @return {Boolean}
 */
const getIsFormOpen = (state, { location }) => {
  return location.query.gift
}

/**
 * Get application loading status
 *
 * @type {Boolean}
 */
const getIsLoading = createSelector([getAll], state => {
  return state.get('isLoading')
})

/**
 * Get application network request status
 *
 * @type {Boolean}
 */
const getIsRequesting = createSelector([getAll], state => {
  return state.get('isRequesting')
})

/**
 * Get side panel state
 *
 * @param  {Object}  state Redux state
 * @param  {Object}  props Component props
 * @return {Boolean}
 */
const getIsSidePanelOpen = (state, { routeParams }) => {
  return Boolean(routeParams.gift)
}

/**
 * Get selected gift ID from route param
 *
 * @param  {Object}  state Redux state
 * @param  {Object}  props Component props
 * @return {String}
 */
const getSelectedGiftId = (state, { routeParams }) => {
  return routeParams.gift
}

/**
 * Get selected gift object
 *
 * @return {Object}
 */
const getSelectedGift = createSelector(
  [getSelectedGiftId, Gifts.gifts],
  (id, gifts) => {
    return gifts[id]
  }
)

export default {
  error: getError,
  isFormOpen: getIsFormOpen,
  isLoading: getIsLoading,
  isRequesting: getIsRequesting,
  isSidePanelOpen: getIsSidePanelOpen,
  selectedGift: getSelectedGift,
  selectedGiftId: getSelectedGiftId,
}
