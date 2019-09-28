/**
 * Handler for all requests made to the /register route.
 *
 * @author  Zach Wild (https://github.com/zachwildd)
 * @license MIT    
 */

var log = require('../common/logger');

// user database model
var User = require('../models/User');

/** 
 * The POST /register route is used when a user is registering
 * a new account.
 */
module.exports.postRegister = (req, res) => {
    log('Post to /register', req.body);

    var user = new User();
    user.email = req.body.email;
    user.username = req.body.username;
    user.saltPassword(req.body.password);

    user.save(function(err, result) {
        if (err) {
            res.json({'error': err});
        }
        else {
            return res.json({
                'email': result.email, 
                'username': result.username,
                'jwt': result.generateJWT()
            });
        }
    });
};