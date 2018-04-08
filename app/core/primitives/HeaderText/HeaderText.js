import { Text } from 'jaak-primitives'

/**
 * @namespace HeaderText
 * @desc Primitive styled-component 💅
 * @return {Function} React component
 */
const HeaderText = Text.extend``

/**
 * @name defaultProps
 * @memberof HeaderText
 * @desc Primitive's default properties
 */
HeaderText.defaultProps = {
  fontFamily: "'Playfair Display SC', serif",
  lineHeight: 1,
}

/**
 * @name propTypes
 * @memberof HeaderText
 * @desc Primitive's prop type definitions
 */
HeaderText.propTypes = {}

/** @component */
export default HeaderText
