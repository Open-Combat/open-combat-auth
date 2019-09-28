/**
 * Handler for all requests made to the /login route.
 *
 * @author  Zach Wild (https://github.com/zachwildd)
 * @license MIT    
 */

var log = require('../common/logger');

// user database model
var User = require('../models/User');

/** 
 * The POST /login route is used when a user is logging in
 * to an account.
 */
module.exports.postLogin = (req, res) => {
  // check for missing fields in request
  if (!req.body.password) {
    res.json({'error': 'Password is requied'});
  }
  if (!req.body.username) {
    res.json({'error': 'Username is requied'});
  }

  // lookup user in database and validate password
  var user = User.findOne({'username': req.body.username}, function (err, result) {
    result.isPassword(req.body.password);
    return res.json({
      'email': result.email, 
      'username': result.username,
      'jwt': result.generateJWT()
    });
  })
  .catch(function (err) {
    res.json({'error': err});
  });

};