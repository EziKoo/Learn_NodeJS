const express = require("express")
const router = express.Router()

//路由级别-响应前端的get请求
router.get("/", (req, res) => {
  console.log(req.query);
  res.send("login 登录页面")
})

//路由级别-响应前端的post请求
router.post("/", (req, res) => {
  console.log(req.body)  //必须配置中间件
  const {username,password} = req.body
  if(username === 'chy' && password === '123456'){
    res.send({ok: 1})
  }else{
    res.send({ok: 0})
  }
})

router.get("/aaa", (req, res) => {
  res.send("aaa")
})

module.exports = router