var config = module.exports
var PRODUCTION = process.env.NODE_ENV === 'production'

config.LIMIT = "10kb"

config.express = {
  port: process.env.EXPRESS_PORT || 3010,
  ip: '0.0.0.0'
}

config.mongodb = {
  url: "mongodb://host.docker.internal:27017/",
  dbName: 'shopApp',
}

config.DB_PATH = `${config.mongodb.url + config.mongodb.dbName}`

if (PRODUCTION) {
  // for example
  config.express.ip = '0.0.0.0'
}
// config.db same deal
// config.email etc
// config.log