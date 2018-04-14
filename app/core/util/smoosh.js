/**
 * Smoosh an array
 *
 * @param  {Array} array Array to smoosh
 * @return {Array}       Smooshed array
 */
const smoosh = array => array.reduce((arr, item) => arr.concat(item), [])

export default smoosh
