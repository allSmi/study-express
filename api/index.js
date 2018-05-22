// 根据接口类型模块化接口
var userApi = require('./user.js'); // 用户相关接口
var goodApi = require('./good.js'); // 商品相关接口

var express = require('express');
var router = express.Router();

userApi(router);
goodApi(router);

module.exports = router;
