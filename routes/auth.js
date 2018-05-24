var express = require('express');
var router = express.Router();
var user = require('../controller/user');
var config = require('../config/env');
var logger = require('../config/env').log;
var url = require('url');
//登录
router.get('/login', function (req, res, next) {
    res.render('auth/login');

});
//确认订单第一步
router.get('/pay/step1', function (req, res, next) {
    res.render('auth/paystep1');

});
//确认订单第二步，选择支付方式
router.get('/pay/step2', function (req, res, next) {
    res.render('auth/paystep2');

});
//确认订单第三部，微信支付
router.get('/pay/step3', function (req, res, next) {
    res.render('auth/wxpay');

});
//确认订单第四部，支付宝支付
router.get('/pay/step4', function (req, res, next) {
    res.render('auth/zfbpay');

});
module.exports = router;
