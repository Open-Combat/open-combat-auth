/**
 * Authentication middleware.
 *
 * @author  Zach Wild (https://github.com/zachwildd)
 * @license MIT    
 */

var log = require('./common/logger');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/User');

passport.use(new LocalStrategy(function (username, password, done) {
  log(`Attempting to authenticate user ${username}`);
  User.findOne({'username': username}, function(err, user) {
    if (err || !user || !user.validPassword(password)) {
      // maybe specify error
      return done(err);
    }
    // if password valid user is authenticated
    return done(null, user);
  });
}));
