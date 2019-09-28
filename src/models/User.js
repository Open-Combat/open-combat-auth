/**
 * User MongoDB schema.
 *
 * @author  Zach Wild (https://github.com/zachwildd)
 * @license MIT    
 */

var log = require('../common/logger');

// node modules
var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../../config/config').SECRET;

const UserSchema = new mongoose.Schema({
    email: {type: 'String', lowercase: true, required: true, index: {unique: true}},
    username: {type: 'String', lowercase: true, required: false, index: {unique: true}},
    password: {type: 'String', required: true},
    salt: {type: 'String', required: true}
});

UserSchema.methods.isPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
}

UserSchema.methods.saltPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.password = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.generateJWT = function() {
    var today = new Date();
    var expire = new Date(today);
    expire.setDate(today.getDate() + 60);

    return jwt.sign({
        _id: this._id,
        username: this.username,
        exp: parseInt(expire.getTime()/1000)
    }, secret);
};

module.exports = mongoose.model('User', UserSchema);