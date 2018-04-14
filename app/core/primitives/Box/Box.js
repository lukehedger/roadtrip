import { Box as BoxPrimitive, types, util } from 'jaak-primitives'
import styled from 'styled-components'

// import { media } from 'core/style'

/**
 * @namespace Box
 * @desc Primitive styled-component 💅
 * @return {Function} React component
 */
const Box = styled(BoxPrimitive)`
  ${util.border};
  ${'' /* ${media.sm`
    flex: 0 0 100%;
  `}; */};
`

/**
 * @name defaultProps
 * @memberof Box
 * @desc Primitive's default properties
 */
Box.defaultProps = {
  borderColor: 'primary',
  borderRadius: 0,
  borderStyle: 'solid',
  borderWidth: [0],
}

/**
 * @name propTypes
 * @memberof Box
 * @desc Primitive's prop type definitions
 */
Box.propTypes = {
  ...types.borderTypes,
}

/** @component */
export default Box
