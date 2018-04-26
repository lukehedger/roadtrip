import { Position } from 'jaak-primitives'
import styled from 'styled-components'

import { media } from 'core/style'

/**
 * @namespace PanelPosition
 * @desc Primitive styled-component 💅
 * @return {Function} React component
 */
const PanelPosition = styled(Position)`
  width: 100%;

  ${media.md`
    width: 50%;
  `};
`

/**
 * @name defaultProps
 * @memberof PanelPosition
 * @desc Primitive's default properties
 */
PanelPosition.defaultProps = {}

/**
 * @name propTypes
 * @memberof PanelPosition
 * @desc Primitive's prop type definitions
 */
PanelPosition.propTypes = {}

/** @component */
export default PanelPosition
