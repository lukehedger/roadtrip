import { Button } from 'jaak-primitives'
import styled from 'styled-components'

/**
 * @namespace PrimaryButton
 * @desc Primitive styled-component 💅
 * @return {Function} React component
 */
const PrimaryButton = styled(Button)`
  position: relative;
  z-index: 1;
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    border: inherit;
    position: absolute;
    top: 3px;
    left: 3px;
    z-index: -1;
  }
`

/**
 * @name defaultProps
 * @memberof PrimaryButton
 * @desc Primitive's default properties
 */
PrimaryButton.defaultProps = {
  backgroundColor: 'yellow',
  borderColor: 'primary',
  borderWidth: ['1px'],
  padding: ['16px', '32px'],
}

/**
 * @name propTypes
 * @memberof PrimaryButton
 * @desc Primitive's prop type definitions
 */
PrimaryButton.propTypes = {}

/** @component */
export default PrimaryButton
