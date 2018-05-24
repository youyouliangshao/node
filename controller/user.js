var express = require('express');
var config = require('../config/env');
var logger = require('../config/env').log;
var Promise = require('bluebird');
var url = require('url');
var request = require('request');
var user = {
    classList: function (req) {
        return new Promise(function (resolve, reject) {
            var reqUrl = config.api_domain1 + '/limi-math-web/api-get-class-list';
            logger.info(reqUrl);
            logger.info("获取菜单url:" + reqUrl);
            request({
                url: reqUrl,
                method: "GET",
                json: true,
                headers: {
                    "content-type": "application/json"
                }
            }, function (error, response, body) {
                logger.debug("获取结果：" + JSON.stringify(body));
                if (!error && response.statusCode == 200) {
                    var resData = [
                        {
                            "id": "2094",
                            "name": "二年级2018春季直播课",
                            "market_name": "二年级2018春季直播课",
                            "grade": "2",
                            "class_year": "2018",
                            "class_season": "1",
                            "frequency": "每周五",
                            "first_class_time": "03月09日",
                            "last_class_time": "06月15日",
                            "teacher_id": "6919169",
                            "state": "4",
                            "class_type": "1",
                            "price": 799,
                            "bg_img_url": "http://limi-live-video-img.oss-cn-beijing.aliyuncs.com/class_img/bg/1e0e8debb6f30b52d640617147e97ce6.png",
                            "js_img_url": "http://limi-live-video-img.oss-cn-beijing.aliyuncs.com/class_img/bg/7802f41e42306c2088b411d94962dc2c.jpg",
                            "course_count": "15",
                            "web_bj_img_url": "http://limi-live-video-img.oss-cn-beijing.aliyuncs.com/class_img/bg/1f7290da9002cc69c807f5ffdae32767.jpg",
                            "teacher_name": "张树霞",
                            "num": "492",
                            "class_season_name": "春季",
                            "grade_name": "二"
                        },
                        {
                            "id": "2095",
                            "name": "三年级2018春季直播课",
                            "market_name": "",
                            "grade": "3",
                            "class_year": "2018",
                            "class_season": "1",
                            "frequency": "每周六",
                            "first_class_time": "03月10日",
                            "last_class_time": "06月16日",
                            "teacher_id": "6951935",
                            "state": "4",
                            "class_type": "1",
                            "price": 999,
                            "bg_img_url": "http://limi-live-video-img.oss-cn-beijing.aliyuncs.com/class_img/bg/c07375be582ba69da8fb33c5f21d9de0.png",
                            "js_img_url": "http://limi-live-video-img.oss-cn-beijing.aliyuncs.com/class_img/bg/8e61448e973f64dc3735b787cf183667.jpg",
                            "course_count": "15",
                            "web_bj_img_url": "http://limi-live-video-img.oss-cn-beijing.aliyuncs.com/class_img/bg/cdc0d82a7f5e3ea995262f32ad545a5c.jpg",
                            "teacher_name": "赵淼",
                            "num": "543",
                            "class_season_name": "春季",
                            "grade_name": "三"
                        },
                        {
                            "id": "2096",
                            "name": "四年级2018春季直播课",
                            "market_name": "",
                            "grade": "4",
                            "class_year": "2018",
                            "class_season": "1",
                            "frequency": "每周六",
                            "first_class_time": "03月10日",
                            "last_class_time": "06月16日",
                            "teacher_id": "6399033",
                            "state": "4",
                            "class_type": "1",
                            "price": 999,
                            "bg_img_url": "http://limi-live-video-img.oss-cn-beijing.aliyuncs.com/class_img/bg/9909f414662be9508dc4ce1c2527ead5.png",
                            "js_img_url": "http://limi-live-video-img.oss-cn-beijing.aliyuncs.com/class_img/bg/d420eebe7318bfc0f16c1d7f9304849f.jpg",
                            "course_count": "15",
                            "web_bj_img_url": "http://limi-live-video-img.oss-cn-beijing.aliyuncs.com/class_img/bg/833bf2e295b6e20b8260b8c734d8b5e8.jpg",
                            "teacher_name": "侯曼",
                            "num": "500",
                            "class_season_name": "春季",
                            "grade_name": "四"
                        },
                        {
                            "id": "2190",
                            "name": "五年级2018春季直播课",
                            "market_name": "",
                            "grade": "5",
                            "class_year": "2018",
                            "class_season": "1",
                            "frequency": "每周六",
                            "first_class_time": "03月10日",
                            "last_class_time": "06月16日",
                            "teacher_id": "7463658",
                            "state": "4",
                            "class_type": "1",
                            "price": 999,
                            "bg_img_url": "http://limi-live-video-img.oss-cn-beijing.aliyuncs.com/class_img/bg/b3348a8c26387210844e30266a2e6a6d.png",
                            "js_img_url": "http://zmp-attachment.oss-cn-beijing.aliyuncs.com/32fb15af451c5720ff9b9da0d3f62c6f.png",
                            "course_count": "15",
                            "web_bj_img_url": "http://zmp-attachment.oss-cn-beijing.aliyuncs.com/746d768f6d212a714cd42c6748225ddd.png",
                            "teacher_name": "周新生",
                            "num": "364",
                            "class_season_name": "春季",
                            "grade_name": "五"
                        },
                        {
                            "id": "2095",
                            "name": "三年级2018春季直播课",
                            "market_name": "",
                            "grade": "3",
                            "class_year": "2018",
                            "class_season": "1",
                            "frequency": "每周六",
                            "first_class_time": "03月10日",
                            "last_class_time": "06月16日",
                            "teacher_id": "6951935",
                            "state": "4",
                            "class_type": "1",
                            "price": 999,
                            "bg_img_url": "http://limi-live-video-img.oss-cn-beijing.aliyuncs.com/class_img/bg/c07375be582ba69da8fb33c5f21d9de0.png",
                            "js_img_url": "http://limi-live-video-img.oss-cn-beijing.aliyuncs.com/class_img/bg/8e61448e973f64dc3735b787cf183667.jpg",
                            "course_count": "15",
                            "web_bj_img_url": "http://limi-live-video-img.oss-cn-beijing.aliyuncs.com/class_img/bg/cdc0d82a7f5e3ea995262f32ad545a5c.jpg",
                            "teacher_name": "赵淼",
                            "num": "543",
                            "class_season_name": "春季",
                            "grade_name": "三"
                        }

                    ]
                    resolve(resData);
                } else {
                    reject(response);
                }
            });
        });
    },
    navList: function (req) {
        return new Promise(function (resolve, reject) {
            var reqUrl = config.api_domain + '/limi-math-web-v3/get-goods-list?grade='+req.query.grade;
            logger.info(reqUrl);
            logger.info("获取菜单url:" + reqUrl);
            request({
                url: reqUrl,
                method: "GET",
                json: true,
                headers: {
                    "content-type": "application/json"
                }
            }, function (error, response, body) {
                logger.debug("获取结果：" + JSON.stringify(body));
                if (!error && response.statusCode == 200) {
                    var resData =[
                        {
                                "teacher_id": "6919169",
                                "teacher_name": "张树霞",
                                "teacher_avatar_url": "http://limi-live-video-img.oss-cn-beijing.aliyuncs.com/teacher_avatar/9c8736cd7a44ff9d4afc97a1be5f63e9.png",
                                "admin_id": "7373788",
                                "admin_name": "李玲利",
                                "admin_avatar_url": "http://limi-live-video-img.oss-cn-beijing.aliyuncs.com/teacher_avatar/0d42757934133e818c87267cd66c9a61.jpg",
                                "first_class_time": "03月09日",
                                "last_class_time": "06月15日",
                                "frequency": "每周五",
                                "freq_start": "19:00",
                                "freq_end": "19:45",
                                "bg_img_url": "http://limi-live-video-img.oss-cn-beijing.aliyuncs.com/class_img/bg/1e0e8debb6f30b52d640617147e97ce6.png",
                                "course_count": "15",
                                "course_syks": 7,
                                "yes": 1,
                                "grade": "二",
                                "class_year": "2018",
                                "class_season": "春季",
                                "class_season_time": "春季: 03月09日-06月15日",
                                "start_name": "已开课",
                                "start_time": "0天",
                                "count": 455
                            },
                        {
                                "teacher_id": "7800984",
                                "teacher_name": "侯悦",
                                "teacher_avatar_url": "http://limi-live-video-img.oss-cn-beijing.aliyuncs.com/teacher_avatar/a01a8ca8123f062333562194ea91cbd7.jpg",
                                "admin_id": "8036383",
                                "admin_name": "杨德欣",
                                "admin_avatar_url": "http://limi-live-video-img.oss-cn-beijing.aliyuncs.com/teacher_avatar/1267fd05e326030015f4163cc78dbc09.jpg",
                                "first_class_time": "03月10日",
                                "last_class_time": "06月16日",
                                "frequency": "每周六",
                                "freq_start": "19:00",
                                "freq_end": "19:45",
                                "bg_img_url": "http://zmp-attachment.oss-cn-beijing.aliyuncs.com/34cfdefa38372077a5a10058f730e624.png",
                                "course_count": "15",
                                "course_syks": 7,
                                "yes": 1,
                                "grade": "二",
                                "class_year": "2018",
                                "class_season": "春季",
                                "class_season_time": "春季: 03月10日-06月16日",
                                "start_name": "已开课",
                                "start_time": "0天",
                                "count": 261,
                                "student_savle": "无"
                        }
                    ]
                    resolve(resData);
                } else {
                    reject(response);
                }
            });
        });
    }
};
module.exports = user;
