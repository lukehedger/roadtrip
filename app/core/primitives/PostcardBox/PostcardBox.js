import { Box } from 'jaak-primitives'
import styled from 'styled-components'

import { media } from 'core/style'

/**
 * @namespace PostcardBox
 * @desc Primitive styled-component 💅
 * @return {Function} React component
 */
const PostcardBox = styled(Box)`
  flex-direction: column;

  ${media.md`
    flex-direction: row-reverse;
  `};
`

/**
 * @name defaultProps
 * @memberof PostcardBox
 * @desc Primitive's default properties
 */
PostcardBox.defaultProps = {}

/**
 * @name propTypes
 * @memberof PostcardBox
 * @desc Primitive's prop type definitions
 */
PostcardBox.propTypes = {}

/** @component */
export default PostcardBox
