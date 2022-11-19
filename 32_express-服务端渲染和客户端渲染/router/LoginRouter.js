const express = require("express")
const router = express.Router()

//路由级别-响应前端的get请求
router.get("/", (req, res) => {
  // console.log(req.query);
  // res.send("login 登录页面111")  //send片段 & json

  // res.json([1,2,34])   //只能json

  //渲染模板后返回给前端
  res.render("login", {error: ''}) //找views文件夹下的login.ejs   //只能模板
})

router.post("/", (req, res) => {
  if (req.body.username === 'chy' && req.body.password === "123456") {
    console.log("登录成功");
    // res.send("成功")
    //重定向
    res.redirect("/home")
  } else {
    console.log("登录失败");
    res.render("login", {error: "用户名密码不匹配"})
  }
})


module.exports = router