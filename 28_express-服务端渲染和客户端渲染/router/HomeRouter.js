const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
  res.send("home 首页")
})

router.get("/list",(req,res)=>{
  res.send(["111","222","333"])
})

router.get("/swiper",(req,res)=>{
  res.send("轮播图")
})

router.get("/slider",(req,res)=>{
  res.send("slider")
})

module.exports = router