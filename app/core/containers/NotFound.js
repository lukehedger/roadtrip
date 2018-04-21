import React from 'react'

import { Link } from 'core/components'
import { routes } from 'core/routes'

const NotFound = () => {
  return (
    <div style={{ padding: '32px', textAlign: 'center' }}>
      <img src="/img/dead-end.png" height="256px" width="256px" />

      <p style={{ fontSize: '18px' }}>Looks like you took a wrong turn!</p>

      <Link style={{ fontSize: '18px' }} to={routes.home.path}>
        &larr; Go back to the start
      </Link>
    </div>
  )
}

export default NotFound
