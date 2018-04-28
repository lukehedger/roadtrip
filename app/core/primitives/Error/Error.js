import styled from 'styled-components'
import { types, util } from 'jaak-primitives'

/**
 * @namespace Error
 * @desc Primitive styled-component 💅
 * @return {Function} React component
 */
const Error = styled.div`
  ${util.background};
  ${util.border};
  ${util.boxModel};
`

/**
 * @name defaultProps
 * @memberof Error
 * @desc Primitive's default properties
 */
Error.defaultProps = {
  backgroundColor: 'yellow',
  borderColor: 'primary',
  borderRadius: '4px',
  borderStyle: 'dotted',
  borderWidth: ['2px'],
  margin: ['16px'],
  padding: ['16px'],
  size: ['auto'],
}

/**
 * @name propTypes
 * @memberof Error
 * @desc Primitive's prop type definitions
 */
Error.propTypes = {
  ...types.backgroundTypes,
  ...types.borderTypes,
  ...types.boxModelTypes,
}

/** @component */
export default Error
