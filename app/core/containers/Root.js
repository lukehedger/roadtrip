import React, { Component } from 'react'
import { createConnectedRouter, createRender, resolver } from 'found'
import { Provider } from 'react-redux'

import { configureStore } from 'core/store'

const Router = createConnectedRouter({
  getFound: store => store.get('found'),
  render: createRender({
    renderError: ({ error }) => {
      // eslint-disable-line react/display-name
      return <div>{error.status === 404 ? 'Not Found' : 'Error'}</div>
    },
  }),
})

const store = configureStore()

export default class Root extends Component {
  componentWillMount() {
    console.log('🌴 C A L I F O R N I A ☀️')
  }

  render() {
    return (
      <Provider store={store}>
        <Router resolver={resolver} />
      </Provider>
    )
  }
}
