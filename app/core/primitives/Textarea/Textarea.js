import { types, util } from 'jaak-primitives'
import { placeholder } from 'polished'
import styled from 'styled-components'

/**
 * @namespace Textarea
 * @desc Primitive styled-component 💅
 * @return {Function} React component
 */
const Textarea = styled.textarea`
  ${util.background};
  ${util.border};
  ${util.boxModel};
  ${util.display};
  ${util.link};
  ${util.text};
  ${({ placeholderColor, theme }) =>
    placeholder({
      color: theme.palette[placeholderColor] || placeholderColor,
    })};
  resize: none;
`

/**
 * @name defaultProps
 * @memberof Textarea
 * @desc Primitive's default properties
 */
Textarea.defaultProps = {
  borderColor: 'primary',
  borderStyle: 'solid',
  borderWidth: ['1px'],
  cursor: 'initial',
  fontFamily: "'Playfair Display SC', serif",
  fontSize: 'baseFontSize',
  margin: [0],
  outline: 'none',
  padding: [0],
  size: ['auto'],
}

/**
 * @name propTypes
 * @memberof Textarea
 * @desc Primitive's prop type definitions
 */
Textarea.propTypes = {
  ...types.backgroundTypes,
  ...types.borderTypes,
  ...types.boxModelTypes,
  ...types.displayTypes,
  ...types.linkTypes,
  ...types.textTypes,
}

/** @component */
export default Textarea
