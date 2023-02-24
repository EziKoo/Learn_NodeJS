const express = require('express')
const app = express()
const IndexRouter = require("./router2/IndexRouter")

//应用级别
app.use(function (req, res, next) {
  console.log("验证token");
  next()
})

//应用级别
app.use("/",IndexRouter)

//启动服务器
app.listen(3000,()=>{
  console.log("服务器已开启");
})

