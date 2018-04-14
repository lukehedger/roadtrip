import { NODE_ENV } from 'core/constants'
import * as map from './map'

export { map }

/**
 * Check for development mode
 *
 * @type {Boolean}
 */
export const isDevelopment = NODE_ENV === 'development'

/**
 * Check if action belongs to a domain
 *
 * @param  {String}  domain     Redux store domain
 * @param  {String}  actionType Redux action type
 * @return {Boolean}            isDomainAction
 */
export const isDomainAction = (domain, actionType) =>
  actionType.indexOf(domain) === 0

/**
 * Check if async action has failed
 *
 * @param  {Object}  action Flux Standard Action
 * @return {Boolean}        hasAsyncActionFailed
 */
export const hasAsyncActionFailed = action =>
  action.meta && action.meta['redux-pack/LIFECYCLE'] === 'failure'

/**
 * Check if async action has started
 *
 * @param  {Object}  action Flux Standard Action
 * @return {Boolean}        hasAsyncActionStarted
 */
export const hasAsyncActionStarted = action =>
  action.meta && action.meta['redux-pack/LIFECYCLE'] === 'start'

/**
 * Check if async action has succeeded
 *
 * @param  {Object}  action Flux Standard Action
 * @return {Boolean}        hasAsyncActionSucceeded
 */
export const hasAsyncActionSucceeded = action =>
  action.meta && action.meta['redux-pack/LIFECYCLE'] === 'success'
