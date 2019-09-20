var config = module.exports
var PRODUCTION = process.env.NODE_ENV === 'production'

config.LIMIT = "10kb"

config.express = {
  port: process.env.EXPRESS_PORT || 3000,
  ip: '127.0.0.1'
}

config.mongodb = {
  port: process.env.MONGODB_PORT || 27017,
  host: process.env.MONGODB_HOST || 'localhost',
  dbName: 'shopApp',
}

config.DB_PATH = `mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.dbName}`

if (PRODUCTION) {
  // for example
  config.express.ip = '0.0.0.0'
}
// config.db same deal
// config.email etc
// config.log