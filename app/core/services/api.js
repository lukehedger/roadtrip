import { API } from 'core/constants'
import { Fetch } from 'core/services'

export const createGifted = gifted => {
  return Fetch.post({ gifted }, API.gifted)
    .then(res => res.json())
    .catch(error => ({ error }))
}

export const readGifts = () => {
  return Fetch.get(API.gifts)
    .then(res => res.json())
    .catch(error => ({ error }))
}
