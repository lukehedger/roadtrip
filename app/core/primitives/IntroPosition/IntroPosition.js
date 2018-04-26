import { Position } from 'jaak-primitives'
import styled from 'styled-components'

import { media } from 'core/style'

/**
 * @namespace IntroPosition
 * @desc Primitive styled-component 💅
 * @return {Function} React component
 */
const IntroPosition = styled(Position)`
  width: 100%;
  height: 100%;
  padding-top: 62px;

  ${media.md`
    width: 300px;
    height: 500px;
    padding-top: 0;
  `};
`

/**
 * @name defaultProps
 * @memberof IntroPosition
 * @desc Primitive's default properties
 */
IntroPosition.defaultProps = {}

/**
 * @name propTypes
 * @memberof IntroPosition
 * @desc Primitive's prop type definitions
 */
IntroPosition.propTypes = {}

/** @component */
export default IntroPosition
