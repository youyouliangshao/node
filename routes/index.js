var express = require('express');
var config = require('../config/env');
var user = require('../controller/user');
var request = require('request');
module.exports = function (app) {
    //首页
    app.get('/', function (req, res) {
        res.redirect('/index')
    });
    app.route('/index').get(function (req, res) {
        //res.render('index');
        user.classList(req).then(function (result) {
            res.render('index', {classList: result});
        }).catch(function (result) {
            next(result);
        });
    });
    //下载
    app.route('/download').get(function (req, res) {
        res.render('download');
    });
    //关于我们
    app.route('/about').get(function (req, res) {
        res.render('about');
    });
    //智能训练
    app.route('/train').get(function (req, res) {
        res.render('train');
    });
    //用户协议
    app.route('/agreement').get(function (req, res) {
        res.render('agreement');
    });
    //联系我们
    app.route('/contact').get(function (req, res) {
        res.render('contact');
    });
    //暑假班报名指南
    app.route('/guide').get(function (req, res) {
        res.render('guide');
    });
    //预约成功返回页面
    app.route('/back').get(function (req, res) {
        res.render('back');
    });
    //问题页
    app.route('/question').get(function (req, res) {
        res.render('question');
    });
    //密码问题页
    app.route('/questionpwd').get(function (req, res) {
        res.render('questionpwd');
    });
    // 培优课堂
    app.use('/class', require('./class'));
    // 所有需要授权登录的页面
    app.use('/auth', require('./auth'));
};
