import { Section, types, util } from 'jaak-primitives'

/**
 * @namespace Road
 * @desc Primitive styled-component 💅
 * @return {Function} React component
 */
const Road = Section.extend`
  ${util.border};
  ${util.boxModel};
  ${util.position};
  overflow: ${({ overflow }) => overflow};
`

/**
 * @name defaultProps
 * @memberof Road
 * @desc Primitive's default properties
 */
Road.defaultProps = {
  borderWidth: [0],
  margin: [0],
  overflow: 'hidden',
  padding: [0],
  position: 'relative',
  size: ['auto'],
}

/**
 * @name propTypes
 * @memberof Road
 * @desc Primitive's prop type definitions
 */
Road.propTypes = {
  ...types.borderTypes,
  ...types.boxModelTypes,
  ...types.positionTypes,
}

/** @component */
export default Road
