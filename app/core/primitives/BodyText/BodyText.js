import { Text } from 'jaak-primitives'

/**
 * @namespace BodyText
 * @desc Primitive styled-component 💅
 * @return {Function} React component
 */
const BodyText = Text.extend``

/**
 * @name defaultProps
 * @memberof BodyText
 * @desc Primitive's default properties
 */
BodyText.defaultProps = {
  fontFamily: "'Vidaloka', serif",
  lineHeight: 1,
}

/**
 * @name propTypes
 * @memberof BodyText
 * @desc Primitive's prop type definitions
 */
BodyText.propTypes = {}

/** @component */
export default BodyText
