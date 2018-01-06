import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ThemeProvider } from 'styled-components'

import { Link } from 'core/components'
import { routes } from 'core/routes'
import { theme } from 'core/style'
import { selectors as UISelectors } from 'domains/ui'

class App extends Component {
  render() {
    const { children, error, isRequesting } = this.props

    return (
      <ThemeProvider theme={theme}>
        <div>
          <main>
            <header>
              <Link to={routes.list.path}>List View</Link>

              <h1>GxA</h1>

              {isRequesting && <div>Loading</div>}

              {error && <div>{error.message}</div>}
            </header>

            {children}
          </main>
        </div>
      </ThemeProvider>
    )
  }
}

export default connect(
  createStructuredSelector({
    error: UISelectors.error,
    isRequesting: UISelectors.isRequesting,
  })
)(App)
