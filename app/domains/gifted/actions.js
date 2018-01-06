import { Api } from 'core/services'
import * as actions from './actionTypes'

/**
 * Create gifted object
 *
 * @return {Object} Flux Standard Action
 */
export const createGifted = gifted => ({
  type: actions.CREATE_GIFTED,
  promise: Api.createGifted(gifted),
})
