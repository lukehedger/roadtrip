import { ERRORS } from 'core/constants'
import {
  hasAsyncActionFailed,
  hasAsyncActionStarted,
  hasAsyncActionSucceeded,
} from 'core/util'
import { actions } from 'domains/ui'

const UIMiddleware = ({ dispatch }) => next => action => {
  if (hasAsyncActionFailed(action)) {
    const error = action.payload.error || ERRORS[action.type] || ERRORS.default

    dispatch(actions.update({ error: error, isRequesting: false }))
  }

  if (hasAsyncActionStarted(action)) {
    dispatch(actions.update({ error: null, isRequesting: true }))
  }

  if (hasAsyncActionSucceeded(action)) {
    dispatch(actions.update({ isRequesting: false }))
  }

  return next(action)
}

export default UIMiddleware
