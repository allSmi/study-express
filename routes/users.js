var express = require('express');
var path = require('path');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // sendFile 必须要用绝对路径或指定跟路径 sendfile默认的跟目录就是项目启动目录
  // res.sendfile('public/stylesheets/style.css')
  // res.sendFile(path.join(__dirname, '../public', 'stylesheets/style.css'))
  // res.sendfile('stylesheets/style.css', { root: path.join(__dirname, '../public') })
  res.send('respond with a resource');
});

module.exports = router;
