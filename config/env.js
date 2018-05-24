/**
 *  基础配置文件
 */

'use strict';
var nconf = require('nconf').argv().env();
var bunyan = require('bunyan');
var profiles = nconf.get('profiles') || 'dev';
var logPath = nconf.get('logPath') || '/';
var port = nconf.get('port') || 1991;
var config = {};
console.log(profiles)
// config.staticPath = 'static';

if (profiles === 'prod') {
    config = require('./env-prod.json');
    config.log = bunyan.createLogger({
        name: 'limi-service-log',
        streams: [{
            type: 'rotating-file',
            path: logPath,
            period: '1d',
            count: 30
        }]
    });
}  else if (profiles === 'test') {
    config = require('./env-test.json');
    config.log = bunyan.createLogger({
        name: 'limi-service-log',
        streams: [{
            type: 'rotating-file',
            path: logPath,
            period: '1d',
            level: 'debug',
            count: 30
        }]
    });
}else if (profiles === 'dev') {
    config = require('./env-dev.json');
    config.log = bunyan.createLogger({
        name: 'limi-service-log',
        streams: [{
            type: 'rotating-file',
            path: logPath,
            period: '1d',
            level: 'debug',
            count: 30
        }]
    });
}

config.server = {
    name: 'limi-service',
    port: port,
    profiles: profiles
};
module.exports = config;
