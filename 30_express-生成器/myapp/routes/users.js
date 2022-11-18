var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  //读取前端的cookie值
  // console.log(req.cookies);
  //设置前端的cookie值C:\Users\10508\AppData\Roaming\npm\node_module
  res.cookie("gender", "male")
  res.send({name: 'chy', age: 22, height: 1.88});
});

module.exports = router;
