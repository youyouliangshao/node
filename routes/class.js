var express = require('express');
var router = express.Router();
var user = require('../controller/user');
var config = require('../config/env');
var logger = require('../config/env').log;
var url = require('url');
// /class
// 培优课堂
router.get('/', function (req, res, next) {
    res.render('class');
});
router.get('/appointment', function (req, res, next) {
    res.render('class/appointment');
});
router.get('/guide', function (req, res, next) {
    res.render('class/guide');
});
//课程列表导航
router.get('/classnav', function (req, res, next) {
    user.navList(req).then(function (result) {
        res.render('class/classnav', {navlist: result});
    }).catch(function (result) {
        next(result);
    });
});
//课程详情页
router.get('/listdetail', function (req, res, next) {
    res.render('class/listdetail');

});
module.exports = router;
