import { Span, types, util } from 'jaak-primitives'

import { animation } from 'core/style'

/**
 * @namespace Sun
 * @desc Primitive styled-component 💅
 * @return {Function} React component
 */
const Sun = Span.extend`
  ${util.background};
  ${util.border};
  ${util.position};
  animation: ${animation.slideLeft} 0.5s ease 1.2s 1 forwards;
`

/**
 * @name defaultProps
 * @memberof Sun
 * @desc Primitive's default properties
 */
Sun.defaultProps = {
  backgroundColor: 'peach',
  borderRadius: '50%',
  borderWidth: [0],
  display: 'block',
  fontSize: 'baseFontSize',
  margin: [0],
  padding: [0],
  position: 'absolute',
  size: ['auto'],
  top: 0,
  transform: 'translateX(140px)',
  zIndex: 1,
}

/**
 * @name propTypes
 * @memberof Sun
 * @desc Primitive's prop type definitions
 */
Sun.propTypes = {
  ...types.backgroundTypes,
  ...types.borderTypes,
  ...types.positionTypes,
}

/** @component */
export default Sun
