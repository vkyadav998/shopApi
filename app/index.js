let express = require("express");
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let config = require('./config');
// let products = require('./dummyData/productList');

app.use(bodyParser.json({limit: config.LIMIT}));
app.use(bodyParser.urlencoded({limit: config.LIMIT, extended: true }));


mongoose.connect(config.DB_PATH);

let router = express.Router();

let healthCheckRouter = require('./routes/healthCheckRoute')
let appRouter = require('./routes/appRoute');


/* Routes for Application */
app.use('/', healthCheckRouter);
app.use('/api', healthCheckRouter);
app.use('/api/shopapi', appRouter);

// app.get("/",function (req,res) {
//   res.send(products);
// });

// Export the app instance for unit testing via supertest
module.exports = app
