import { Record } from 'immutable'

/**
 * Gifted Immutable.Record
 *
 * @type {Record}
 */
const Gifted = new Record({
  _id: '',
  from: '',
  gift: '',
  image: '',
  message: '',
})

/**
 * Factory function to construct new gifted Record
 *
 * @param  {Object} gifted Gifted object
 * @return {Record}
 */
export const giftedFactory = gifted => new Gifted(gifted)
