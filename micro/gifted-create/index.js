const { json } = require('micro')
const microCors = require('micro-cors')
const { MongoClient } = require('mongodb')

// configure CORS
const cors = microCors({ allowMethods: ['POST'] })

// set env variables in non-production environments
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: '.env' })
}

module.exports = cors(async req => {
  try {
    // connect to database
    const client = await MongoClient.connect(process.env.MONGO_URL, {
      promiseLibrary: global.Promise,
    })

    // select database
    const db = client.db('roadtrip')

    // parse request body
    const { gifted } = await json(req)

    // execute database query
    const { ops: [insertGifted] } = await db
      .collection('gifted')
      .insertOne(gifted)

    // close connection
    client.close()

    // return response body
    return {
      gifted: insertGifted,
    }
  } catch (e) {
    return e
  }
})
