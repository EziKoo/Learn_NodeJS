const express = require("express")
//路由对象
const router = express.Router()

//路由级别中间件
router.get("/home",(req,res)=>{
  res.send("home")
})

router.get("/login",(req,res)=>{
  res.send("login")
})

module.exports = router
