let express = require("express");
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let config = require('./config');

app.use(bodyParser.json({limit: config.LIMIT}));
app.use(bodyParser.urlencoded({limit: config.LIMIT, extended: true }));

mongoose.connect(config.DB_PATH);

let healthCheckRouter = require('./routes/healthCheckRoute')
let appRouter = require('./routes/appRoute');


/* Routes for Application */
app.use('/', healthCheckRouter);
app.use('/api', healthCheckRouter);
app.use('/api/shopapi', appRouter);

// Export the app instance for unit testing via supertest
module.exports = app
