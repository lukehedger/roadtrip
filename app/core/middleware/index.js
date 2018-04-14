import { createLogger } from 'redux-logger'
import { middleware as reduxPack } from 'redux-pack'

import GiftsMiddleware from './gifts'

const createMiddleware = isDevelopment => {
  // default middleware
  const middleware = [reduxPack, GiftsMiddleware]

  // logger middleware in development
  if (isDevelopment) middleware.push(createLogger({ collapsed: true }))

  return middleware
}

export default createMiddleware
