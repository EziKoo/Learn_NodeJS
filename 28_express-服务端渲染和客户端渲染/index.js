const express = require("express")
const app = express()
const HomeRouter = require('./router/HomeRouter')
const LoginRouter = require('./router/LoginRouter')

//配置静态资源
app.use(express.static("public"))
app.use(express.static("static"))

//配置解析post参数的中间件-不用下载第三方，内置
app.use(express.urlencoded({extended: false}))  //post参数
app.use(express.json()) //json格式参数

//首先使用应用级别中间件验证token
app.use(function (req, res, next) {
  console.log("验证 token");
  next()
})

//应用级别中间件
app.use("/home", HomeRouter)
app.use("/login", LoginRouter)

//错误级别中间件
app.use(function (req, res) {
  res.status(404).send("此页面丢了")
})

//启动服务器
app.listen(3000, () => {
  console.log("服务器已开启");
})