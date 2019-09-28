/**
 * Starts the auth server.
 *
 * @author  Zach Wild (https://github.com/zachwildd)
 * @license MIT    
 */

var log = require('./common/logger');

var mongoose = require('mongoose');
var app = require('./app');
var config = require('../config/config');

// connect to mongodb
log('Attempting to connect to database...');

mongoose.connect('mongodb://' + config.MONGO_HOST + '/auth', { 
   useNewUrlParser: true,
   useUnifiedTopology: true
})
.then(() => {
   log('Connected to database.');
});

// start server
app.listen(config.PORT, () => {
   log('Starting server on :5000');
});