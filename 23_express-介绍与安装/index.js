const express = require('express')

const app = express()

app.get("/", (req, res) => {
  // res.write("hello,world")
  // res.end()

  //结合了上面两个
  // res.send("hello，World")

  //可以直接解析html代码片段
  // res.send(`
  //   <div>
  //     <h1>这是一级标题</h1>
  //   </div>
  // `)

  //可以直接传送接口
  res.send({
    name: 'chy',
    age: 22
  })
})

app.listen(3000, () => {
  console.log("服务器已开启");
})
