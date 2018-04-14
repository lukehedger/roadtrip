import { Text } from 'jaak-primitives'
import styled from 'styled-components'

/**
 * @namespace BodyText
 * @desc Primitive styled-component 💅
 * @return {Function} React component
 */
const BodyText = styled(Text)``

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
BodyText.propTypes = {}

/** @component */
export default BodyText
