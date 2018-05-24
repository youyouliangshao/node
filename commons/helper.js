/**
 * EJS helper
 */
var express = require('express');
var until = require('./until');

module.exports = function (app) {
    // 金额格式化
    app.locals.moneyFormat = function (str) {
        if (str !== undefined && str !== null) {
            if(!isNaN(parseFloat(str))){
                return until.format.number(parseFloat(str), '#,##0.00')
            }else{
                return "-";
            }
        }else {
            return '-'
        }
    };
    // 数字格式化
    app.locals.numberFormat = function (str, format) {
        return until.format.number(parseFloat(str), format)
    };
    // 根据key获取map中的值
    app.locals.mapVal = function (thisKey, map) {
        for(var key in map) {
            for(var i in map[key]){
                if(thisKey == i){
                    return map[key][i];
                }
            }
        }
    }
};

