export const { NODE_ENV } = process.env

const API_CONFIG = {
  endpoints: {
    development: {
      gifted: 'http://localhost:7000',
      gifts: 'http://localhost:7001',
    },
    production: {
      gifted: 'https://roadtrip-gifted-create.now.sh/',
      gifts: 'https://roadtrip-gifts-read.now.sh/',
    },
  },
}

export const API = API_CONFIG.endpoints[NODE_ENV]

export const STATE_KEY = '@Roadtrip:store'
