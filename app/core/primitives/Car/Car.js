import { Image, types, util } from 'jaak-primitives'

import { animation } from 'core/style'

/**
 * @namespace Car
 * @desc Primitive styled-component 💅
 * @return {Function} React component
 */
const Car = Image.extend`
  ${util.position};
  animation: ${animation.slideRight} 0.6s ease 1s 1 forwards;
`

/**
 * @name defaultProps
 * @memberof Car
 * @desc Primitive's default properties
 */
Car.defaultProps = {
  borderWidth: [0],
  bottom: 0,
  margin: [0],
  padding: [0],
  position: 'absolute',
  size: ['auto'],
  transform: 'translateX(-100%)',
  zIndex: 2,
}

/**
 * @name propTypes
 * @memberof Car
 * @desc Primitive's prop type definitions
 */
Car.propTypes = {
  ...types.positionTypes,
}

/** @component */
export default Car
