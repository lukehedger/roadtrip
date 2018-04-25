import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'

import { animation, theme } from 'core/style'

injectGlobal`
  ${normalize()}

  * {
  	box-sizing: inherit;
  }

  html {
  	box-sizing: border-box;
  }

  html, body, #Root {
    height: 100%;
    min-height: 100%;
    font-family: 'Vidaloka', serif;
    background-color: ${theme.palette.yellow};
  }

  body {
    font-size: 16px;
    letter-spacing: 0.1px;
    line-height: 1.625;
    color: ${theme.palette.primary};
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: ${theme.palette.blue};
    text-decoration: underline;
  }

  #map {
    width: 100%;
    height: 100%;
    outline: none;
    z-index: 0;
  }

  .leaflet-container {
    background: ${theme.palette.yellow};
  }

  .map-icon {
    opacity: 0;
		animation: ${animation.fadeIn} 0.3s cubic-bezier(0,0,.25,1) 1 forwards;
	}

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
