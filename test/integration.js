/**
 * Does all setup neccesary for testing endpoints and runs postman
 * tests.
 *
 * @author Zach Wild (https://github.com/zachwildd)
 * @license MIT    
 */

var log = require('../src/common/logger');

// postman test runner
var newman = require('newman');

// express server
var app = require('../src/app');

// connect to mongo
log('Connecting to database...')
var mongoose = require('mongoose');
var config = require('../config/config');
mongoose.connect('mongodb://' + config.MONGO_HOST + '/' + config.MONGO_NAME, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// start server
app.listen(config.PORT, () => {
  log('App listening on port ' + config.PORT + ' ...');
});

// run api tests
newman.run({
  collection: require('./open-conquest-auth.postman_collection.json'),
  reporters: 'cli'
}, function (err) {
  if (err) { throw err; }
  log('Collection run complete!');
  process.exit(0);
});