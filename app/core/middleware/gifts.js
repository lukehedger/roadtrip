import { APP_LOAD_DELAY } from 'core/constants'
import { isDomainAction, hasAsyncActionSucceeded } from 'core/util'
import { name, actionTypes as gifts } from 'domains/gifts'
import { actions as UIActions } from 'domains/ui'

const GiftsMiddleware = ({ dispatch }) => next => action => {
  // action not in namespace? abort!
  if (!isDomainAction(name, action.type)) return next(action)

  if (gifts.READ_GIFTS === action.type && hasAsyncActionSucceeded(action)) {
    setTimeout(
      () => dispatch(UIActions.update({ isLoading: false })),
      APP_LOAD_DELAY
    )
  }

  return next(action)
}

export default GiftsMiddleware
