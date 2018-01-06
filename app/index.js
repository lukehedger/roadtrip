import React from 'react'
import { render } from 'react-dom'

import Root from './core/containers/Root'

import './core/style/global'

const rootEl = document.getElementById('Root')

render(<Root />, rootEl)
