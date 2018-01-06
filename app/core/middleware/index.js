import { createLogger } from 'redux-logger'
import { middleware as reduxPack } from 'redux-pack'

const createMiddleware = isDevelopment => {
  // default middleware
  const middleware = [reduxPack]

  // logger middleware in development
  if (isDevelopment) middleware.push(createLogger({ collapsed: true }))

  return middleware
}

export default createMiddleware
