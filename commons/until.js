var express = require('express');
var request = require('request');
var Promise = require('bluebird');
var logger = require('../config/env').log;
var config = require('../config/env');

var utils = {
    /**
     * 字符串格式化类
     * utils.format.number(123.4, '#,##0.000'), '123,400'
     * utils.format.number(12.32410, '#,##0.0000#'), '12,3241'
     * utils.format.number(1231231212.32410, '#,##0.0000#'), '1.231.231.212,3241'
     * utils.format.number(-999, "#,###"), '-999'
     * f = 'dd.MM.yyyy';
     * df = utils.format.date('1.5.2009', f);
     * d = new Date(df);
     * utils.format.date(d, f), '01.05.2009';
     */
};
module.exports = utils;
