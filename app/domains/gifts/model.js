import { Record } from 'immutable'

/**
 * Gift Immutable.Record
 *
 * @type {Record}
 */
const Gift = new Record({
  _id: '',
  coords: [],
  description: '',
  gifted: '',
  image: '',
  order: 0,
  title: '',
  value: '',
})

/**
 * Factory function to construct new gift Record
 *
 * @param  {Object} gift Gift object
 * @return {Record}
 */
export const giftFactory = gift => new Gift(gift)
