import { Image } from 'jaak-primitives'
import styled from 'styled-components'

import { media } from 'core/style'

/**
 * @namespace GiftImage
 * @desc Primitive styled-component 💅
 * @return {Function} React component
 */
const GiftImage = styled(Image)`
  width: 100px;
  height: 100px;

  ${media.md`
    width: 150px;
    height: 150px;
  `};
`

/**
 * @name defaultProps
 * @memberof GiftImage
 * @desc Primitive's default properties
 */
GiftImage.defaultProps = {}

/**
 * @name propTypes
 * @memberof GiftImage
 * @desc Primitive's prop type definitions
 */
GiftImage.propTypes = {}

/** @component */
export default GiftImage
