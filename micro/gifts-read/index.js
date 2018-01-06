const microCors = require('micro-cors')
const { MongoClient } = require('mongodb')

// configure CORS
const cors = microCors({ allowMethods: ['POST'] })

// set env variables in non-production environments
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: '.env' })
}

module.exports = cors(async () => {
  try {
    // connect to database
    const client = await MongoClient.connect(process.env.MONGO_URL, {
      promiseLibrary: global.Promise,
    })

    // select database
    const db = client.db('roadtrip')

    // execute database query
    const gifts = await db
      .collection('gifts')
      .find({ gifted: false })
      .toArray()

    // close connection
    client.close()

    // return response body
    return {
      gifts: gifts,
    }
  } catch (e) {
    return e
  }
})
