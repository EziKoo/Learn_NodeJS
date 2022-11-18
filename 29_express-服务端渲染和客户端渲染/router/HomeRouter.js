const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  // res.send("home 首页")
  const list = ['aaa', 'bbb', 'ccc', 'ddd']
  let myhtml = "<b>我是加粗</b>"
  res.render('home', {list: list, myhtml: myhtml})
})


module.exports = router