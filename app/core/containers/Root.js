import React, { Component } from 'react'
import { createConnectedRouter, createRender, resolver } from 'found'
import { Provider } from 'react-redux'

import { configureStore } from 'core/store'
import NotFound from './NotFound'

const Router = createConnectedRouter({
  getFound: store => store.get('found'),
  render: createRender({
    renderError: () => {
      // eslint-disable-line react/display-name
      return <NotFound />
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
