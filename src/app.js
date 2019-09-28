/**
 * Initializes the express app.
 *
 * @author  Zach Wild (https://github.com/zachwildd)
 * @license MIT    
 */

var log = require('./common/logger');

// node modules
var express = require('express');

// initialize express app
var app = express();
app.use(express.json());

// controllers
var registerController = require('./routes/register');
var loginController = require('./routes/login');
var refreshController = require('./routes/refresh');

// routes
app.post('/user/register', registerController.postRegister);
app.post('/user/login', loginController.postLogin);
app.post('/user/refresh', refreshController.postRefresh);

module.exports = app;