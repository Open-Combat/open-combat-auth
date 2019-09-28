/**
 * Handler for all requests made to the /login route.
 *
 * @author  Zach Wild (https://github.com/zachwildd)
 * @license MIT    
 */

var log = require('../common/logger');

// user database model
var User = require('../models/User');

module.exports.postRefresh = (req, res) => {

  // make sure refresh token is valid

  // remove old refresh token

  // generate new refresh token

}