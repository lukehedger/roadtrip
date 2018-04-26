import { Text } from 'jaak-primitives'
import styled from 'styled-components'

import { media } from 'core/style'

/**
 * @namespace GiftHeaderText
 * @desc Primitive styled-component 💅
 * @return {Function} React component
 */
const GiftHeaderText = styled(Text)`
  margin-bottom: 24px;

  ${media.md`
    margin-bottom: 48px;
  `};
`

/**
 * @name defaultProps
 * @memberof GiftHeaderText
 * @desc Primitive's default properties
 */
GiftHeaderText.defaultProps = {
  fontFamily: "'Playfair Display SC', serif",
  lineHeight: '1',
}

/**
 * @name propTypes
 * @memberof GiftHeaderText
 * @desc Primitive's prop type definitions
 */
GiftHeaderText.propTypes = {}

/** @component */
export default GiftHeaderText
