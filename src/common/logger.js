/**
 * Logger for the server.
 *
 * @author  Zach Wild (https://github.com/zachwildd)
 * @license MIT    
 */

var winston = require('winston');

const format = winston.format.combine(
    winston.format.colorize(),
    winston.format.printf(
        info => `[INFO] ${info.message}`
    )
);

const logger = winston.createLogger({
    format: format,
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: 'logs/debug.log',
            level: 'debug'
        }),
        new winston.transports.File({
            filename: 'logs/info.log',
            level: 'info'
        }),
        new winston.transports.File({
            filename: 'logs/error.log',
            level: 'error'
        })
    ]
});

function log(str) {
    logger.info(JSON.stringify(str));
}

module.exports = log;