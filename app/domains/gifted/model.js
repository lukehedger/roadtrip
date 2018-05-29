import { Record } from 'immutable'

/**
 * Gifted Immutable.Record
 *
 * @type {Record}
 */
const Gifted = new Record({
  _id: '',
  amount: 0,
  created: 0,
  from: '',
  gift: '',
  message: '',
})

/**
 * Factory function to construct new gifted Record
 *
 * @param  {Object} gifted Gifted object
 * @return {Record}
 */
export const giftedFactory = gifted => new Gifted(gifted)
