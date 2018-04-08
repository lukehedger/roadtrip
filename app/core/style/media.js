import { css } from 'styled-components'

import { breakpoints as bp } from 'core/style'

/**
 * Generate a CSS media query with a breakpoint and styles
 *
 * @param  {String} breakpoint Media query breakpoint
 * @param  {Object} styles     Styles to apply in media query
 * @return {Array}             CSS media query
 */
const media = (breakpoint, styles) => css`
  @media (${breakpoint}) {
    ${css(...styles)};
  }
`

export const sm = (...styles) => media(bp.SMALL, styles)

export const md = (...styles) => media(bp.MEDIUM, styles)

export const lg = (...styles) => media(bp.LARGE, styles)
