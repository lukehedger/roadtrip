import mixpanel from 'mixpanel-browser'

import { MIXPANEL_TOKEN } from 'core/constants'
import { isDevelopment } from 'core/util'

export const init = () =>
  mixpanel.init(MIXPANEL_TOKEN, { debug: isDevelopment })

export const track = (action, payload) => {
  return !isDevelopment && mixpanel.track(action, payload)
}
