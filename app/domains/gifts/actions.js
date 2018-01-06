import { Api } from 'core/services'
import * as actions from './actionTypes'

/**
 * Read gifts
 *
 * @return {Object} Flux Standard Action
 */
export const readGifts = () => ({
  type: actions.READ_GIFTS,
  promise: Api.readGifts(),
})
