var express = require('express');
var logger = require('../config/env').log;
var url = require('url');
var config = require('../config/env');
var request = require('request');

var intPage = {
    empInfo: {
        getEmpInfo : function (token, empAccount) {
            return new Promise(function(resolve, reject) {
                var reqUrl = config.api("permission","v1") + "/individual/center/"+ empAccount +"?token=" + token;
                logger.debug("empInfo请求url：" + reqUrl);
                request(reqUrl,function (error, response, body) {

                    if (!error && response.statusCode == 200) {
                        logger.debug("empInfo请求结果："+ body);
                        var empInfo = JSON.parse(body) ;
                        if(empInfo.success == true){
                            resolve({empInfo:empInfo})
                        }else {
                            logger.error("empInfo请求结果success不为true");
                            reject({empInfo:{}})
                        }
                    }else {
                        logger.debug("empInfo请求结果不是200" + body);
                        reject(response);
                    }
                })
            })
        }
    }
};

module.exports = {
  intPage: function (req, res, next) {
      var goLogin = function () {
          if(req.originalUrl.indexOf('/login') != -1){
              return res.redirect('/login');
          }else {
              return res.redirect('/login?redirecturl=' + req.originalUrl);
          }
      };
      if (req.cookies.token && req.cookies.empAccount){
          var token = req.cookies.token;
          var empAccount = req.cookies.empAccount;
          logger.info("获取访问链接:" + req.originalUrl);
          logger.info("获取访问者token:"+ token);
          logger.info("获取访问者empAccount:"+ empAccount);
          intPage.pageInfo(token,empAccount).then(function (result) {
              res.locals.pageInfo = result;
              next();
          }).catch(function (result) {
              if(result.statusCode == 403){ // 未登录
                  goLogin()
              }else if (result.statusCode == 401){ // 无权限
                  goLogin()
              }else {
                  // res.send(result.message);
                  res.locals.pageInfo = {menus:{},empInfo:{}};
                  next(result);
              }
          });
      }else {
          goLogin()
      }
  }
};
// module.exports = app;
