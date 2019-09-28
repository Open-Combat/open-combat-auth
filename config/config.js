/**
 * Configuration for the auth service.
 *
 * @author  Zach Wild (https://github.com/zachwildd)
 * @license MIT    
 */

const config = {
  PORT: process.env.PORT,
  SECRET: process.env.SECRET,
  MONGO_PORT: process.env.MONGO_PORT,
  MONGO_HOST: process.env.MONGO_HOST
};

module.exports = config;