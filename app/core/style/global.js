import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'

import { theme } from 'core/style'

injectGlobal`
  ${normalize()}

  * {
  	box-sizing: inherit;
  }

  html {
  	box-sizing: border-box;
  }

  html, body, #Root, #App {
    height: 100%;
    min-height: 100%;
    font-family: 'Montserrat', helvetica, sans-serif;
  }

  body {
    font-size: 16px;
    letter-spacing: 0.1px;
    line-height: 1.625;
    color: ${theme.primary};
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: ${theme.accent};
    text-decoration: none;
  }
`
