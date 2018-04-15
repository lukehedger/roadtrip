import { Text, types, util } from 'jaak-primitives'
import styled from 'styled-components'

/**
 * @namespace BodyText
 * @desc Primitive styled-component 💅
 * @return {Function} React component
 */
const BodyText = styled(Text)`
  ${util.link};
`

/**
 * @name defaultProps
 * @memberof BodyText
 * @desc Primitive's default properties
 */
BodyText.defaultProps = {
  fontFamily: "'Vidaloka', serif",
  lineHeight: '1',
}

/**
 * @name propTypes
 * @memberof BodyText
 * @desc Primitive's prop type definitions
 */
BodyText.propTypes = {
  ...types.link,
}

/** @component */
export default BodyText
